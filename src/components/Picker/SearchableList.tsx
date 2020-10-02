import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, SectionList, LayoutAnimation } from "react-native";
import Spacing from "../../style/spacing";
import colors from "../../style/colors";
import TextInput from "../input/TextInput";
import Text from "../Text";
import AlphabetScroll from "./AlphabetScroll";
import ItemSeparator from "./ItemSeparator";
import ListFooter from "./ListFooter";
import PickerRow from "./PickerRow";
import type { ListTypes, Option } from ".";
import getSectionItemLayout from "./getSectionItemLayout";

interface Section {
  title?: string;
  data: Option[];
}

interface SearchableListProps {
  options: Option[];
  favoriteOptions?: Option[];
  selectedOption?: Option;
  onSelectOption: (option: Option) => void;
  searchPlaceholder?: string;
  listEmptyText?: string;
  listType: ListTypes;
}

const SearchableList: React.FC<SearchableListProps> = ({
  options,
  favoriteOptions,
  selectedOption,
  onSelectOption,
  searchPlaceholder,
  listEmptyText,
  listType,
}) => {
  const [search, setSearch] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const sectionRef = useRef<SectionList>(null);

  const onSearchChange = (text: string) => {
    setSearch(text);
  };

  const onLetterChange = (letter: string) => {
    if (!sections.length) return;
    const sectionIndex = sections.findIndex(
      (section) => section.title === letter
    );
    if (sectionIndex < 0) return;
    sectionRef.current?.scrollToLocation({
      sectionIndex,
      itemIndex: 1,
      viewOffset: 0,
      viewPosition: 0,
      animated: true,
    });
  };

  const getItemLayout = getSectionItemLayout({
    getItemHeight: () => Spacing.sp7,
    getSeparatorHeight: () => 1,
    getSectionHeaderHeight: () => Spacing.sp3,
  });

  const removeAccents = (text: string) => {
    const removedAccents = text
      .replace(/[áàãâäÅ]/gi, "a")
      .replace(/[éè¨ê]/gi, "e")
      .replace(/[íìïî]/gi, "i")
      .replace(/[óòöôõ]/gi, "o")
      .replace(/[úùüû]/gi, "u")
      .replace(/[ç]/gi, "c")
      .replace(/[ñ]/gi, "n")
      .replace(/[^a-zA-Z0-9]/g, " ");
    return removedAccents[0].toUpperCase() + removedAccents.slice(1);
  };

  useEffect(() => {
    const initialSections =
      favoriteOptions && !search
        ? [{ title: undefined, data: favoriteOptions }]
        : [];

    const sections = Object.values(options)
      .sort((a, b) =>
        removeAccents(a.label) < removeAccents(b.label) ? -1 : 1
      )
      .filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
      .reduce((result: Section[], option) => {
        const firstLetter = removeAccents(option.label[0]);
        const index = result.findIndex((item) => item.title === firstLetter);
        if (index >= 0) {
          result[index]?.data.push(option);
        } else {
          result.push({ title: firstLetter, data: [option] });
        }
        return result;
      }, initialSections);

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSections(sections);
  }, [search]);

  useEffect(() => {
    if (!selectedOption?.label || !sections?.length) {
      return;
    }

    let timeout = setTimeout(() => {
      const { label } = selectedOption;
      const sectionIndex = sections.findIndex(
        (section) => section.title === label[0].toUpperCase()
      );
      if (sectionIndex < 0) return;
      const itemIndex = sections[sectionIndex].data.findIndex(
        (data) => data.label === label
      );
      if (itemIndex < 0) return;
      sectionRef.current?.scrollToLocation({
        sectionIndex,
        // itemIndex + 1 because ListHeaderComponent counts as an index too
        itemIndex: itemIndex + 1,
        viewOffset: 0,
        viewPosition: 0,
        animated: true,
      });
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [sections]);

  return (
    <>
      <TextInput
        containerStyle={styles.input}
        placeholder={searchPlaceholder}
        onChangeText={onSearchChange}
        type="search"
      />
      <View style={styles.flex}>
        <SectionList
          ref={sectionRef}
          sections={sections}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <PickerRow
              option={item}
              selectedOption={selectedOption}
              onSelectOption={onSelectOption}
              listType={listType}
            />
          )}
          renderSectionHeader={({ section: { title } }) => {
            if (!title) return null;
            return (
              <View style={styles.sectionHeader}>
                <Text type="h6" textAlign="left">
                  {title}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <ItemSeparator listType={listType} />}
          ListEmptyComponent={() => (
            <Text
              type="subtextRegular"
              color={colors.greyDark}
              style={styles.listEmpty}
            >
              {listEmptyText}
            </Text>
          )}
          ListFooterComponent={<ListFooter />}
          stickySectionHeadersEnabled={true}
          getItemLayout={getItemLayout}
        />
        <AlphabetScroll onLetterChange={onLetterChange} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: { marginVertical: Spacing.sp3, marginHorizontal: Spacing.sp3 },
  flex: { flex: 1 },
  sectionHeader: {
    justifyContent: "center",
    height: Spacing.sp3,
    backgroundColor: colors.greyLight,
    paddingHorizontal: Spacing.sp3,
  },
  listEmpty: {
    paddingHorizontal: Spacing.sp3,
  },
});

export default SearchableList;
