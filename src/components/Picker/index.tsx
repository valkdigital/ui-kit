import { Spacing } from "@valkdigital/ui-kit";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ViewStyle,
  Dimensions,
  Animated,
  PanResponder,
  Keyboard,
  ImageSourcePropType,
  SectionList,
  LayoutAnimation,
} from "react-native";
import getSectionItemLayout from "./getSectionItemLayout";
import PickerScreen from "./PickerScreen";

export type ModalSizes = "responsive" | "full";
export type Sizes = "small" | "medium" | "large";

export interface Option {
  label: string;
  value: any;
  image?: ImageSourcePropType;
}

export interface Section {
  title?: string;
  data: Option[];
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
  const [search, setSearch] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const translateY = useRef(new Animated.Value(0)).current;
  const sectionRef = useRef<SectionList>(null);

  const hasError = !!error;
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
        setSearch("");
      }
    });
  };

  const onSelectOption = (option: Option) => {
    onSelectChange(option);
    toggleModal(false);
  };

  const onSearchChange = (text: string) => {
    setSearch(text);
  };

  const onLetterChange = (letter: string) => {
    const sectionIndex = sections?.findIndex(
      (section) => section.title === letter
    );
    if (sectionIndex < 0) return;
    sectionRef.current?.scrollToLocation({
      sectionIndex,
      itemIndex: 1,
      viewOffset: 0,
      viewPosition: 0,
      animated: true,
    });
  };

  const getItemLayout = getSectionItemLayout({
    getItemHeight: () => Spacing.sp7,
    getSeparatorHeight: () => 1,
    getSectionHeaderHeight: () => Spacing.sp3,
  });

  const removeAccents = (text: string) => {
    const removedAccents = text
      .replace(/[áàãâäÅ]/gi, "a")
      .replace(/[éè¨ê]/gi, "e")
      .replace(/[íìïî]/gi, "i")
      .replace(/[óòöôõ]/gi, "o")
      .replace(/[úùüû]/gi, "u")
      .replace(/[ç]/gi, "c")
      .replace(/[ñ]/gi, "n")
      .replace(/[^a-zA-Z0-9]/g, " ");
    return removedAccents[0].toUpperCase() + removedAccents.slice(1);
  };

  useEffect(() => {
    const initialSections =
      favoriteOptions && !search
        ? [{ title: undefined, data: favoriteOptions }]
        : [];

    const sections = Object.values(options)
      .sort((a, b) =>
        removeAccents(a.label) < removeAccents(b.label) ? -1 : 1
      )
      .filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
      .reduce((result: Section[], option) => {
        const firstLetter = removeAccents(option.label[0]);
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
    if (
      modalSize !== "full" ||
      !showModal ||
      !selectedOption?.label ||
      !sections?.length
    ) {
      return;
    }

    let timeout = setTimeout(() => {
      const { label } = selectedOption;
      const sectionIndex = sections.findIndex(
        (section) => section.title === label[0].toUpperCase()
      );
      if (sectionIndex < 0) return;
      const itemIndex = sections[sectionIndex].data.findIndex(
        (data) => data.label === label
      );
      if (itemIndex < 0) return;
      sectionRef.current?.scrollToLocation({
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
  }, [showModal]);

  return (
    <PickerScreen
      title={title}
      label={label}
      placeholder={placeholder}
      size={size}
      options={options}
      selectedOption={selectedOption}
      containerStyle={containerStyle}
      disabled={disabled}
      searchPlaceholder={searchPlaceholder}
      listEmptyText={listEmptyText}
      error={error}
      modalSize={modalSize}
      hasError={hasError}
      showModal={showModal}
      toggleModal={toggleModal}
      translateY={translateY}
      panResponder={panResponder}
      onSelectOption={onSelectOption}
      onSearchChange={onSearchChange}
      sectionRef={sectionRef}
      sections={sections}
      onLetterChange={onLetterChange}
      getItemLayout={getItemLayout}
    />
  );
};

export default PickerContainer;
