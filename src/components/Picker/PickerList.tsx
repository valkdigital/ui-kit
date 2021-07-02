import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Spacing from "../../style/spacing";
import ThemeContext from "../../style/ThemeContext";
import TextInput from "../input/TextInput";
import AddOption from "./AddOption";
import DismissKeyboard from "./DismissKeyboard";
import FlatList from "./FlatList";
import type { PickerScreenProps } from "./PickerScreen";
import SectionList from "./SectionList";

type PickerListProps = Pick<
  PickerScreenProps,
  | "options"
  | "favoriteOptions"
  | "selectedOption"
  | "modalSize"
  | "onSelectOption"
  | "listEmptyText"
  | "search"
  | "searchPlaceholder"
  | "onSearchChange"
  | "addOptionEnabled"
  | "addOptionTitle"
  | "onAddOption"
  | "listType"
  | "alphabeticScrollEnabled"
  | "customSections"
>;

const PickerList: React.FC<PickerListProps> = ({
  options,
  favoriteOptions,
  selectedOption,
  modalSize,
  onSelectOption,
  listEmptyText,
  search,
  searchPlaceholder,
  onSearchChange,
  addOptionEnabled,
  addOptionTitle,
  onAddOption,
  listType,
  alphabeticScrollEnabled,
  customSections,
}) => {
  const { onBackground } = useContext(ThemeContext);

  return (
    <DismissKeyboard>
      <>
        {modalSize === "responsive" && (
          <FlatList
            options={options}
            selectedOption={selectedOption}
            onSelectOption={onSelectOption}
            listEmptyText={listEmptyText}
            search={search}
            needsPaddingTop={true}
          />
        )}
        {modalSize === "fullscreen" && (
          <View style={styles.flex}>
            <TextInput
              autoCorrect={false}
              containerStyle={[styles.input, { backgroundColor: onBackground }]}
              placeholder={searchPlaceholder}
              onChangeText={onSearchChange}
              type="search"
            />
            {addOptionEnabled && !!search && (
              <AddOption
                onAddOptionPress={onAddOption}
                addOptionTitle={addOptionTitle}
              />
            )}
            <View style={styles.flex}>
              {listType === "flatList" && (
                <FlatList
                  options={options}
                  selectedOption={selectedOption}
                  onSelectOption={onSelectOption}
                  listEmptyText={listEmptyText}
                  search={search}
                />
              )}
              {listType === "sectionList" && (
                <SectionList
                  options={options}
                  favoriteOptions={favoriteOptions}
                  selectedOption={selectedOption}
                  onSelectOption={onSelectOption}
                  listEmptyText={listEmptyText}
                  search={search}
                  alphabeticScrollEnabled={alphabeticScrollEnabled}
                  customSections={customSections}
                />
              )}
            </View>
          </View>
        )}
      </>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: Spacing.sp3,
    paddingHorizontal: Spacing.sp3,
    backgroundColor: "#ffffff",
    zIndex: 10,
  },
  flex: { flex: 1 },
});

export default PickerList;
