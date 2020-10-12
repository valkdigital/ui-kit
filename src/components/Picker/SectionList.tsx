import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  SectionList as RNSectionList,
  LayoutAnimation,
} from "react-native";
import Spacing from "../../style/spacing";
import colors from "../../style/colors";
import Text from "../Text";
import AlphabetScroll from "./AlphabetScroll";
import ItemSeparator from "./ItemSeparator";
import ListFooter from "./ListFooter";
import PickerRow from "./PickerRow";
import type { Option } from ".";
import getSectionListItemLayout from "./getSectionListItemLayout";

interface Section {
  title?: string;
  data: Option[];
}

interface SectionListProps {
  options: Option[];
  favoriteOptions?: Option[];
  selectedOption?: Option;
  onSelectOption: (option: Option) => void;
  search: string;
  listEmptyText?: string;
  alphabeticScrollEnabled?: boolean;
}

const SectionList: React.FC<SectionListProps> = ({
  options,
  favoriteOptions,
  selectedOption,
  onSelectOption,
  search,
  listEmptyText,
  alphabeticScrollEnabled,
}) => {
  const [sections, setSections] = useState<Section[]>([]);
  const sectionListRef = useRef<RNSectionList>(null);

  const showAlphabet = alphabeticScrollEnabled && !search;

  const onLetterChange = (letter: string) => {
    if (!sections.length) return;
    const sectionIndex = sections.findIndex(
      (section) => section.title === letter
    );
    if (sectionIndex < 0) return;
    sectionListRef.current?.scrollToLocation({
      sectionIndex,
      itemIndex: 1,
      viewOffset: 0,
      viewPosition: 0,
      animated: true,
    });
  };

  const getItemLayout = getSectionListItemLayout({
    getItemHeight: () => Spacing.sp7,
    getSeparatorHeight: () => 1,
    getSectionHeaderHeight: () => Spacing.sp3,
    extraOffset: favoriteOptions?.length && -Spacing.sp5,
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
      .sort((a, b) => {
        const stringA = removeAccents(a.label);
        const stringB = removeAccents(b.label);
        // place non-alphabetic characters at the back
        if (!stringA.match(/^[a-zA-Z]/g) && !!stringB.match(/^[a-zA-Z]/g)) {
          return 1;
        }
        return stringA.localeCompare(stringB, undefined, {
          numeric: true,
          sensitivity: "base",
        });
      })
      .filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
      .reduce((result: Section[], option) => {
        let firstLetter = removeAccents(option.label[0]);
        if (!firstLetter.match(/^[a-zA-Z]/g)) firstLetter = "#";

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
    if (search || !selectedOption?.label || !sections?.length) {
      return;
    }

    const timeout = setTimeout(() => {
      const { label } = selectedOption;
      const sectionIndex = sections.findIndex(
        (section) => section.title === label[0].toUpperCase()
      );
      if (sectionIndex < 0) return;
      const itemIndex = sections[sectionIndex].data.findIndex(
        (data) => data.label === label
      );
      if (itemIndex < 0) return;
      sectionListRef.current?.scrollToLocation({
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
      <RNSectionList
        ref={sectionListRef}
        sections={sections}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index, section }) => (
          <PickerRow
            option={item}
            selectedOption={selectedOption}
            onSelectOption={onSelectOption}
            needsSpaceForAlphabet={showAlphabet}
            isFirstOption={index === 0 && !section.title}
          />
        )}
        renderSectionHeader={({ section: { title } }) => {
          if (!title) return null;
          return (
            <View
              style={styles.sectionHeader}
              onStartShouldSetResponder={() => true}
            >
              <Text type="h6" textAlign="left">
                {title}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <ItemSeparator needsSpaceForAlphabet={showAlphabet} />
        )}
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
      {showAlphabet && <AlphabetScroll onLetterChange={onLetterChange} />}
    </>
  );
};

const styles = StyleSheet.create({
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

export default SectionList;
