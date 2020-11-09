import React, { useContext, useEffect, useRef, useState } from "react";
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
import ListEmpty from "./ListEmpty";
import ThemeContext from "../../style/ThemeContext";

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
      .replace(/[éèëê]/gi, "e")
      .replace(/[íìïî]/gi, "i")
      .replace(/[óòöôõ]/gi, "o")
      .replace(/[úùüû]/gi, "u")
      .replace(/[çč]/gi, "c")
      .replace(/[ñ]/gi, "n")
      .replace(/[^a-zA-Z]/g, " ");
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
        if (stringA[0] === " " || stringB[0] === " ") {
          if (stringA[0] === stringB[0]) {
            return stringA.localeCompare(stringB, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          }
          return stringA[0] === " " ? 1 : -1;
        }
        return stringA.localeCompare(stringB, undefined, {
          numeric: true,
          sensitivity: "base",
        });
      })
      .filter((option) => {
        return removeAccents(option.label)
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      })
      .reduce((result: Section[], option) => {
        let firstLetter = removeAccents(option.label[0]);
        if (firstLetter === " ") firstLetter = "#";

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

  const {
    list: { sectionBackground },
    background,
  } = useContext(ThemeContext);
  return (
    <>
      <RNSectionList
        ref={sectionListRef}
        sections={sections}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ backgroundColor: background }}
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
              style={[
                styles.sectionHeader,
                { backgroundColor: sectionBackground },
              ]}
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
        ListEmptyComponent={<ListEmpty listEmptyText={listEmptyText} />}
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
});

export default SectionList;
