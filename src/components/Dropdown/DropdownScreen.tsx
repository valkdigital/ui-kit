import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Pressable,
  LayoutChangeEvent,
} from "react-native";
import shadow from "../../style/shadow";
import Spacing from "../../style/spacing";
import type { ListTypes, SelectSizes, Option } from "../Picker";
import type { DropdownProps } from ".";
import Select from "../Picker/Select";
import PickerList from "../Picker/PickerList";

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
  selectContainerStyle,
  disabled,
  addOptionEnabled,
  addOptionTitle,
  onAddOption,
  alphabeticScrollEnabled,
  searchEnabled,
  searchPlaceholder,
  listEmptyText,
  error,
  listType,
  showDropdown,
  showOptions,
  hideOptions,
  onSelectOption,
  search,
  onSearchChange,
  customSections,
  maxListHeight,
}) => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const { x, y, width, height } = position;

  const onLayout = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setPosition({ x, y, width, height });
  };

  return (
    <>
      <Select
        label={label}
        placeholder={placeholder}
        selectContainerStyle={selectContainerStyle}
        disabled={disabled}
        error={error}
        size={size}
        showOptions={showOptions}
        isFocused={showDropdown}
        selectedOption={selectedOption}
        onLayout={onLayout}
        DropdownComponent={
          <View
            style={[
              styles.dropdown,
              {
                top: height + y,
                left: x,
              },
              SELECT_STYLE[size],
              !!maxListHeight && { maxHeight: maxListHeight },
              size === "large" && { width },
            ]}
          >
            <PickerList
              options={options}
              favoriteOptions={favoriteOptions}
              selectedOption={selectedOption}
              modalSize={searchEnabled ? "fullscreen" : "responsive"}
              onSelectOption={onSelectOption}
              listEmptyText={listEmptyText}
              search={search}
              searchPlaceholder={searchPlaceholder}
              onSearchChange={onSearchChange}
              addOptionEnabled={addOptionEnabled}
              addOptionTitle={addOptionTitle}
              onAddOption={onAddOption}
              listType={listType}
              alphabeticScrollEnabled={alphabeticScrollEnabled}
              customSections={customSections}
            />
          </View>
        }
      />

      {showDropdown && (
        <Pressable onPress={hideOptions} style={styles.overlay} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  dropdown: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    ...shadow({ x: 0, y: 0, opacity: 0.1, blurRadius: 14 }),
    zIndex: 20,
    flex: 1,
    marginBottom: Spacing.sp3,
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
