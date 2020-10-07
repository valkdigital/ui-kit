import React, { useMemo, useRef, useState } from "react";
import {
  ViewStyle,
  Dimensions,
  Animated,
  PanResponder,
  Keyboard,
  ImageSourcePropType,
} from "react-native";
import PickerScreen from "./PickerScreen";

export type ListTypes = "plain" | "searchable";
export type Sizes = "small" | "medium" | "large";

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
}

export interface PickerProps {
  title: string;
  label?: string;
  placeholder?: string;
  size?: Sizes;
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
   * This prop is only available when listType equals `"searchable"`.
   */
  favoriteOptions?: Option[];
  selectedOption?: Option;
  onSelectChange: (option: Option) => void;
  listType?: ListTypes;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  onSubmit?: () => void;
  /**
   * This prop is only available when listType equals `"searchable"`.
   */
  searchPlaceholder?: string;
  /**
   * This prop is only available when listType equals `"searchable"`.
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
   *  showOptions: () => void;}`
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
  listType = "plain",
  containerStyle,
  disabled,
  onSubmit,
  searchPlaceholder,
  listEmptyText,
  error,
  SelectComponent,
}) => {
  const [showModal, setShowModal] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const modalHeight = Dimensions.get("window").height;

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
        if (onSubmit) onSubmit();
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
      containerStyle={containerStyle}
      searchPlaceholder={searchPlaceholder}
      listEmptyText={listEmptyText}
      error={error}
      listType={listType}
      showModal={showModal}
      showOptions={showOptions}
      hideOptions={hideOptions}
      translateY={translateY}
      panResponder={panResponder}
    />
  );
};

export default Picker;
