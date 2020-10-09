import React, { useMemo, useRef, useState } from "react";
import {
  ViewStyle,
  Dimensions,
  Animated,
  PanResponder,
  Keyboard,
  ImageSourcePropType,
  StyleProp,
} from "react-native";
import PickerScreen from "./PickerScreen";

export type ListTypes = "flatList" | "sectionList";
export type ModalSizes = "responsive" | "fullscreen";
export type SelectSizes = "small" | "medium" | "large";

export interface Option {
  label: string;
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
   *  error?: boolean;}`
   */
  SelectComponent?: React.FC<SelectComponentProps>;
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
  alphabeticScrollEnabled = true,
  searchPlaceholder,
  listEmptyText,
  error,
  SelectComponent,
}) => {
  const [showModal, setShowModal] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  const [search, setSearch] = useState("");

  const modalHeight = Dimensions.get("window").height;
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

    Animated.spring(translateY, {
      toValue: shouldOpen ? 0 : modalHeight,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start(() => {
      if (!shouldOpen) {
        if (onClose) onClose();
        setSearch("");
        setShowModal(false);
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
    setSearch(text);
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
    />
  );
};

export default Picker;
