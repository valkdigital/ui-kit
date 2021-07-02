import React, { useMemo, useRef, useState } from "react";
import {
  ViewStyle,
  Animated,
  PanResponder,
  Keyboard,
  StyleProp,
  LayoutAnimation,
  useWindowDimensions,
} from "react-native";
import PickerScreen from "./PickerScreen";

export type ListTypes = "flatList" | "sectionList";
export type ModalSizes = "responsive" | "fullscreen";
export type SelectSizes = "small" | "medium" | "large";

export interface Option {
  label: string;
  extraLabel?: string;
  value: any;
  leftComponent?: JSX.Element | null | boolean;
}

export interface SelectComponentProps {
  label?: string;
  placeholder?: string;
  selectedOption?: Option;
  disabled?: boolean;
  showOptions: () => void;
  isFocused?: boolean;
  error?: string;
}

export interface PickerProps {
  title: string;
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
   * leftComponent?: JSX.Element | null | boolean;
   * }`
   */
  options?: Option[];
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
   *  isFocused?: boolean;
   *  error?: boolean;}`
   */
  SelectComponent?: React.FC<SelectComponentProps>;

  /**
   * Custom sections instead of options. Available only when listType equals `"sectionList"`.
   */
  customSections?: { title: string; data: Option[] }[];
}

const Picker: React.FC<PickerProps> = ({
  title,
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
  addOptionEnabled,
  addOptionTitle,
  onAddOptionPress,
  alphabeticScrollEnabled,
  searchPlaceholder,
  listEmptyText,
  error,
  SelectComponent,
  customSections,
}) => {
  const [showModal, setShowModal] = useState(false);
  const modalHeight = useWindowDimensions().height;
  const translateY = useRef(new Animated.Value(modalHeight)).current;
  const [search, setSearch] = useState("");

  const overriddenListType: ListTypes =
    modalSize === "responsive" ? "flatList" : listType;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => {
          Keyboard.dismiss();
          return true;
        },
        onPanResponderMove: (_, gestureState) => {
          translateY.setValue(Math.max(0, 0 + gestureState.dy));
        },
        onPanResponderRelease: (_, gestureState) => {
          const shouldOpen = gestureState.vy <= 0;
          animateModal(shouldOpen, true);
        },
      }),
    [modalHeight]
  );

  const animateModal = (shouldOpen: boolean, isSwipeGesture?: boolean) => {
    if (shouldOpen) {
      if (!isSwipeGesture) {
        // set animation start to bottom
        translateY.setValue(modalHeight);
      }
      setShowModal(true);
    } else {
      Keyboard.dismiss();
    }

    Animated.timing(translateY, {
      toValue: shouldOpen ? 0 : modalHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (!shouldOpen) {
        setSearch("");
        setShowModal(false);
        if (onClose) onClose();
      }
    });
  };

  const onSelectOption = (option: Option) => {
    onSelectChange(option);
    animateModal(false);
  };

  const showOptions = () => {
    animateModal(true);
  };

  const hideOptions = () => {
    animateModal(false);
  };

  const onSearchChange = (text: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSearch(text);
  };

  const onAddOption = () => {
    onAddOptionPress && onAddOptionPress(search);
    animateModal(false);
  };

  return (
    <PickerScreen
      title={title}
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
      showModal={showModal}
      showOptions={showOptions}
      hideOptions={hideOptions}
      translateY={translateY}
      panResponder={panResponder}
      search={search}
      onSearchChange={onSearchChange}
      customSections={customSections}
    />
  );
};

export default Picker;
