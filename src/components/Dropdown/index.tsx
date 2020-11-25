import React, { useState } from "react";
import { LayoutAnimation, LayoutChangeEvent } from "react-native";
import type {
  PickerProps,
  SelectComponentProps as PSelectComponentProps,
  Option,
} from "../Picker";
import DropdownScreen from "./DropdownScreen";

interface SelectComponentProps extends PSelectComponentProps {
  onLayout?: (event: LayoutChangeEvent) => void;
  DropdownComponent?: React.FC;
}

export interface DropdownProps
  extends Omit<PickerProps, "title" | "modalSize"> {
  searchEnabled?: boolean;
  maxListHeight?: number;
  SelectComponent?: React.FC<SelectComponentProps>;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  size = "large",
  options,
  favoriteOptions,
  selectedOption,
  onSelectChange,
  listType = "sectionList",
  selectContainerStyle,
  disabled,
  onClose,
  addOptionEnabled = false,
  addOptionTitle,
  onAddOptionPress,
  alphabeticScrollEnabled = true,
  searchPlaceholder,
  listEmptyText,
  error,
  customSections,
  searchEnabled,
  maxListHeight,
  SelectComponent,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");

  const onSelectOption = (option: Option) => {
    onSelectChange(option);
    hideOptions();
  };

  const showOptions = () => {
    setShowDropdown(true);
  };

  const hideOptions = () => {
    setShowDropdown(false);
    setSearch("");
    onClose && onClose();
  };

  const onSearchChange = (text: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSearch(text);
  };

  const onAddOption = () => {
    onAddOptionPress && onAddOptionPress(search);
    hideOptions();
  };

  return (
    <DropdownScreen
      label={label}
      placeholder={placeholder}
      size={size}
      options={options}
      selectedOption={selectedOption}
      favoriteOptions={favoriteOptions}
      onSelectOption={onSelectOption}
      SelectComponent={SelectComponent}
      disabled={disabled}
      selectContainerStyle={selectContainerStyle}
      searchPlaceholder={searchPlaceholder}
      addOptionEnabled={addOptionEnabled}
      addOptionTitle={addOptionTitle}
      onAddOption={onAddOption}
      alphabeticScrollEnabled={alphabeticScrollEnabled}
      listEmptyText={listEmptyText}
      error={error}
      listType={listType}
      showDropdown={showDropdown}
      showOptions={showOptions}
      hideOptions={hideOptions}
      search={search}
      onSearchChange={onSearchChange}
      searchEnabled={searchEnabled}
      customSections={customSections}
      maxListHeight={maxListHeight}
    />
  );
};

export default Dropdown;
