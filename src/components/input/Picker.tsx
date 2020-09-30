import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  Image,
  Dimensions,
  Animated,
  PanResponder,
  Keyboard,
  ImageSourcePropType,
  SectionList,
  LayoutAnimation,
} from "react-native";
import Text from "../Text";
import Spacing from "../../style/spacing";
import shadow from "../../style/shadow";
import Modal from "../Modal";
import colors from "../../style/colors";
import TextInput from "./TextInput";
import AlphabetScroll from "./AlphabetScroll";
import PickerRow from "./PickerRow";

export type ModalSizes = "responsive" | "full";

const MODAL_STYLE: { [key in ModalSizes]: ViewStyle } = {
  responsive: {
    maxHeight: Dimensions.get("window").height - Spacing.sp8,
  },
  full: {
    top: Spacing.sp8,
  },
};

export interface Option {
  label: string;
  value: any;
  image?: ImageSourcePropType;
}

interface Section {
  title?: string;
  data: Option[];
}

interface PickerProps {
  title: string;
  label: string;
  placeholder: string;
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

const Picker: React.FC<PickerProps> = ({
  title,
  label,
  placeholder,
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
      itemIndex: 0,
      viewOffset: 0,
      viewPosition: 0,
      animated: true,
    });
  };

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

  const onScrollToIndexFailed = () => {
    sectionRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      viewOffset: 0,
      viewPosition: 0,
      animated: true,
    });
  };

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
        itemIndex,
        viewOffset: 0,
        viewPosition: 0,
        animated: true,
      });
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);

  return (
    <>
      <View
        style={[styles.container, containerStyle, disabled && { opacity: 0.4 }]}
      >
        <Text type="subtextSemiBold" style={styles.label}>
          {label}
        </Text>
        <View
          style={[
            styles.selectContainer,
            hasError && { borderColor: colors.redDark },
          ]}
        >
          <TouchableOpacity
            onPress={() => toggleModal(true)}
            style={styles.select}
            disabled={disabled}
          >
            <Text
              type="bodyRegular"
              style={
                selectedOption === undefined ? styles.placeholder : undefined
              }
            >
              {selectedOption?.label ?? placeholder}
            </Text>
            <Image
              source={require("../../media/arrow_down.png")}
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
        {hasError && (
          <Text
            style={styles.error}
            type="subtextRegular"
            color={colors.redDark}
          >
            {error}
          </Text>
        )}
      </View>
      {showModal && (
        <Modal
          animationType="none"
          onClose={() => toggleModal(false)}
          backgroundColor="transparent"
        >
          <Animated.View
            style={[
              styles.modal,
              MODAL_STYLE[modalSize],
              { transform: [{ translateY }] },
            ]}
          >
            <View {...panResponder.panHandlers}>
              <View style={styles.handle} />
              <View style={styles.header}>
                <View style={styles.headerLeft} />
                <Text type="h4" textAlign="center">
                  {title}
                </Text>
                <TouchableOpacity onPress={() => toggleModal(false)}>
                  <Image
                    source={require("../../media/close.png")}
                    style={styles.headerRight}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.content}>
              {modalSize === "responsive" && (
                <FlatList
                  data={options}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item }) => (
                    <PickerRow
                      option={item}
                      selectedOption={selectedOption}
                      onSelectOption={onSelectOption}
                      size={modalSize}
                    />
                  )}
                  ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                  )}
                  ListHeaderComponent={() => <View style={styles.listHeader} />}
                  ListFooterComponent={() => <View style={styles.listFooter} />}
                  contentContainerStyle={styles.list}
                />
              )}

              {modalSize === "full" && (
                <>
                  <TextInput
                    containerStyle={styles.input}
                    placeholder={searchPlaceholder}
                    onChangeText={onSearchChange}
                    type="search"
                  />
                  <SectionList
                    ref={sectionRef}
                    sections={sections}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                      <PickerRow
                        option={item}
                        selectedOption={selectedOption}
                        onSelectOption={onSelectOption}
                        size={modalSize}
                      />
                    )}
                    renderSectionHeader={({ section: { title } }) => {
                      if (!title) return null;
                      return (
                        <View style={styles.sectionHeader}>
                          <Text type="h6" textAlign="left">
                            {title}
                          </Text>
                        </View>
                      );
                    }}
                    ItemSeparatorComponent={() => (
                      <View
                        style={[styles.itemSeparator, styles.alphabetOffset]}
                      />
                    )}
                    ListEmptyComponent={() => (
                      <Text
                        type="subtextRegular"
                        color={colors.greyDark}
                        style={styles.listEmpty}
                      >
                        {listEmptyText}
                      </Text>
                    )}
                    ListFooterComponent={() => (
                      <View style={styles.listFooter} />
                    )}
                    stickySectionHeadersEnabled={true}
                    onScrollToIndexFailed={onScrollToIndexFailed}
                  />
                  <AlphabetScroll onLetterChange={onLetterChange} />
                </>
              )}
            </View>
          </Animated.View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  label: {
    marginBottom: Spacing["sp1/2"],
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: colors.greyMidDark,
    borderRadius: Spacing["sp1/2"],
  },
  select: {
    paddingHorizontal: Spacing.sp2,
    paddingVertical: Spacing.sp1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chevron: {
    marginLeft: Spacing.sp2,
    width: 14,
    height: 8,
  },
  disabled: {
    color: colors.greyMidDark,
  },
  placeholder: {
    color: colors.greyDark,
  },
  error: { marginTop: Spacing["sp1/2"] },
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: Spacing.sp3,
    borderTopRightRadius: Spacing.sp3,
    backgroundColor: "#ffffff",
    ...shadow({ x: 0, y: 2, opacity: 0.4, blurRadius: 48 }),
  },
  content: { flex: 1 },
  list: { marginTop: -Spacing.sp2 },
  input: { marginVertical: Spacing.sp3, marginHorizontal: Spacing.sp3 },
  handle: {
    width: Spacing.sp4,
    height: Spacing["sp1/2"],
    alignSelf: "center",
    marginTop: Spacing.sp2,
    backgroundColor: colors.greyMidDark,
    borderRadius: Spacing.sp2,
  },
  header: {
    paddingVertical: Spacing.sp2,
    paddingHorizontal: Spacing.sp3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  sectionHeader: {
    justifyContent: "center",
    height: Spacing.sp3,
    backgroundColor: colors.greyLight,
    paddingHorizontal: Spacing.sp3,
  },
  itemSeparator: {
    marginHorizontal: Spacing.sp3,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  listEmpty: {
    paddingHorizontal: Spacing.sp3,
  },
  listHeader: {
    paddingTop: Spacing.sp3,
  },
  listFooter: {
    paddingBottom: Spacing.sp3,
  },
  alphabetOffset: {
    marginRight: Spacing.sp5,
  },
  headerLeft: {
    width: 16,
  },
  headerRight: {
    width: 16,
    height: 16,
  },
});

export default Picker;
