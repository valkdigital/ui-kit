import React, { useState } from "react";
import {
  ViewStyle,
  ImageSourcePropType,
  StyleProp,
  LayoutAnimation,
  View,
} from "react-native";
import DropdownScreen from "./DropdownScreen";

export type ListTypes = "flatList" | "sectionList";
export type ModalSizes = "responsive" | "fullscreen";
export type SelectSizes = "small" | "medium" | "large";

export interface Option {
  label: string;
  extraLabel?: string;
  value: any;
  image?: ImageSourcePropType;
}

interface SelectComponentProps {
  label?: string;
  placeholder?: string;
  selectedOption?: Option;
  disabled?: boolean;
  showOptions: () => void;
  error?: string;
}

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  size?: SelectSizes;
  /**
   * Option type is:
   *
   * `{
   * label: string;
   * extraLabel?: string;
   * value: any;
   * image?: ImageSourcePropType;
   * }`
   */
  options: Option[];
  /**
   * This prop is only active if listType equals `"sectionList"`.
   */
  favoriteOptions?: Option[];
  selectedOption?: Option;
  onSelectChange: (option: Option) => void;
  modalSize?: ModalSizes;
  /**
   * This prop is only active if modalSize equals `"fullscreen"`.
   */
  listType?: ListTypes;
  selectContainerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onClose?: () => void;
  /**
   * This prop is only active if modalSize equals `"fullscreen"`.
   */
  addOptionEnabled?: boolean;
  /**
   * This prop is only active if modalSize equals `"fullscreen"`.
   */
  addOptionTitle?: string;
  /**
   * This prop is only active if modalSize equals `"fullscreen"`.
   */
  onAddOptionPress?: (searchInput: string) => void;
  /**
   * This prop is only active if modalSize equals `"fullscreen"`.
   */
  alphabeticScrollEnabled?: boolean;
  /**
   * This prop is only active if modalSize equals `"fullscreen"`.
   */
  searchPlaceholder?: string;
  /**
   * This prop is only active if modalSize equals `"fullscreen"`.
   */
  listEmptyText?: string;
  error?: string;
  /**
   * Override internal select component with a custom component.
   *
   * SelectComponentProps type is:
   * `{
   *  label?: string;
   *  placeholder?: string;
   *  selectedOption?: Option;
   *  disabled?: boolean;
   *  showOptions: () => void;
   *  error?: boolean;`
   */
  SelectComponent?: React.ForwardRefExoticComponent<
    SelectComponentProps & React.RefAttributes<View>
  >;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  size = "large",
  options,
  favoriteOptions,
  selectedOption,
  onSelectChange,
  modalSize = "fullscreen",
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
  SelectComponent,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");

  const overriddenListType: ListTypes =
    modalSize === "responsive" ? "flatList" : listType;

  const onSelectOption = (option: Option) => {
    onSelectChange(option);
    hideOptions();
  };

  const showOptions = () => {
    setShowDropdown(true);
  };

  const hideOptions = () => {
    setShowDropdown(false);
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
      modalSize={modalSize}
      listType={overriddenListType}
      showDropdown={showDropdown}
      showOptions={showOptions}
      hideOptions={hideOptions}
      search={search}
      onSearchChange={onSearchChange}
    />
  );
};

export default Dropdown;
