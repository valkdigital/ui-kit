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

export type ModalSizes = "responsive" | "full";
export type Sizes = "small" | "medium" | "large";

export interface Option {
  label: string;
  value: any;
  image?: ImageSourcePropType;
}

export interface PickerContainerProps {
  title: string;
  label: string;
  placeholder: string;
  size?: Sizes;
  options: Option[];
  favoriteOptions?: Option[];
  selectedOption?: Option;
  onSelectChange: (option: Option) => void;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  onSubmit?: () => void;
  searchPlaceholder?: string;
  listEmptyText?: string;
  error?: string;
  modalSize: ModalSizes;
}

const PickerContainer: React.FC<PickerContainerProps> = ({
  title,
  label,
  placeholder,
  size = "large",
  options,
  favoriteOptions,
  selectedOption,
  onSelectChange,
  containerStyle,
  disabled,
  onSubmit,
  searchPlaceholder,
  listEmptyText,
  error,
  modalSize,
}) => {
  const [showModal, setShowModal] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const modalHeight = Dimensions.get("window").height;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => {
          return true;
        },
        onPanResponderMove: (_, gestureState) => {
          translateY.setValue(Math.max(0, 0 + gestureState.dy));
        },
        onPanResponderRelease: (_, gestureState) => {
          const shouldOpen = gestureState.vy <= 0;
          toggleModal(shouldOpen, true);
        },
      }),
    [modalHeight]
  );

  const toggleModal = (shouldOpen: boolean, isSwipeGesture?: boolean) => {
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
    toggleModal(false);
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
      disabled={disabled}
      containerStyle={containerStyle}
      searchPlaceholder={searchPlaceholder}
      listEmptyText={listEmptyText}
      error={error}
      modalSize={modalSize}
      showModal={showModal}
      toggleModal={toggleModal}
      translateY={translateY}
      panResponder={panResponder}
    />
  );
};

export default PickerContainer;
