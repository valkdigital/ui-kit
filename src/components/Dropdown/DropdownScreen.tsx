import React, { useLayoutEffect, useRef, useState } from "react";
import { View, StyleSheet, ViewStyle, useWindowDimensions } from "react-native";
import shadow from "../../style/shadow";
import Spacing from "../../style/spacing";
import Modal from "../Modal";
import type {
  ListTypes,
  SelectSizes,
  Option,
  DropdownProps,
  ModalSizes,
} from ".";
import FlatList from "../Picker/FlatList";
import SectionList from "../Picker/SectionList";
import DismissKeyboard from "../Picker/DismissKeyboard";
import TextInput from "../input/TextInput";
import Select from "../Picker/Select";
import AddOption from "../Picker/AddOption";

const SELECT_STYLE: { [key in SelectSizes]: ViewStyle } = {
  small: { width: 160 },
  medium: { width: 287 },
  large: {},
};

type InheritedProps = Omit<
  DropdownProps,
  "onClose" | "onSelectChange" | "onAddOptionPress"
>;

interface DropdownScreenProps extends InheritedProps {
  size: SelectSizes;
  modalSize: ModalSizes;
  listType: ListTypes;
  showDropdown: boolean;
  showOptions: () => void;
  hideOptions: () => void;
  onSelectOption: (option: Option) => void;
  search: string;
  onSearchChange: (search: string) => void;
  onAddOption: () => void;
}

const DropdownScreen: React.FC<DropdownScreenProps> = ({
  label,
  placeholder,
  size,
  options,
  favoriteOptions,
  selectedOption,
  SelectComponent,
  selectContainerStyle,
  disabled,
  addOptionEnabled,
  addOptionTitle,
  onAddOption,
  alphabeticScrollEnabled,
  searchPlaceholder,
  listEmptyText,
  error,
  modalSize,
  listType,
  showDropdown,
  showOptions,
  hideOptions,
  onSelectOption,
  search,
  onSearchChange,
}) => {
  const [position, setPosition] = useState<{
    width: number;
    height: number;
    pageX: number;
    pageY: number;
  }>({
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const selectRef = useRef<View>(null);
  const dimensions = useWindowDimensions();

  const { width, height, pageX, pageY } = position;

  useLayoutEffect(() => {
    selectRef.current?.measure((_1, _2, width, height, pageX, pageY) => {
      setPosition({ width, height, pageX, pageY });
    });
  }, [dimensions]);

  return (
    <>
      {SelectComponent ? (
        SelectComponent({
          label,
          placeholder,
          selectedOption,
          showOptions,
          disabled,
          error,
          ref: selectRef,
        })
      ) : (
        <Select
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          size={size}
          showOptions={showOptions}
          selectedOption={selectedOption}
          selectContainerStyle={selectContainerStyle}
          ref={selectRef}
        />
      )}

      {showDropdown && (
        <Modal
          animationType="none"
          onClose={hideOptions}
          backgroundColor="transparent"
        >
          <View
            style={[
              styles.modal,
              {
                top: pageY + height,
                left: pageX,
                maxHeight: dimensions.height - pageY - height,
              },
              SELECT_STYLE[size],
              size === "large" && { width },
            ]}
          >
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
                      containerStyle={styles.input}
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
                        />
                      )}
                    </View>
                  </View>
                )}
              </>
            </DismissKeyboard>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    ...shadow({ x: 0, y: 0, opacity: 0.1, blurRadius: 14 }),
    zIndex: 200,
    flex: 1,
  },
  input: {
    paddingVertical: Spacing.sp3,
    paddingHorizontal: Spacing.sp3,
    backgroundColor: "#ffffff",
    zIndex: 10,
  },
  flex: { flex: 1 },
});

export default DropdownScreen;
