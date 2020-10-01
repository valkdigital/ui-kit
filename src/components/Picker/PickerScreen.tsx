import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,
  SectionList,
  ViewStyle,
  Dimensions,
  PanResponderInstance,
  SectionListData,
} from "react-native";
import colors from "../../style/colors";
import shadow from "../../style/shadow";
import Spacing from "../../style/spacing";
import TextInput from "../input/TextInput";
import Modal from "../Modal";
import Text from "../Text";
import AlphabetScroll from "./AlphabetScroll";
import PickerRow from "./PickerRow";
import type {
  ModalSizes,
  Sizes,
  Option,
  Section,
  PickerContainerProps,
} from "./index";

const MODAL_STYLE: { [key in ModalSizes]: ViewStyle } = {
  responsive: {
    maxHeight: Dimensions.get("window").height - Spacing.sp8,
  },
  full: {
    top: Spacing.sp8,
  },
};

const SELECT_STYLE: { [key in Sizes]: ViewStyle } = {
  small: { width: 160 },
  medium: { width: 287 },
  large: {},
};

type InheritedProps = Omit<
  PickerContainerProps,
  "onSubmit" | "onSelectChange" | "favoriteOptions" | "size"
>;

interface PickerScreenProps extends InheritedProps {
  size: Sizes;
  hasError: boolean;
  showModal: boolean;
  toggleModal: (show: boolean) => void;
  translateY: Animated.Value;
  panResponder: PanResponderInstance;
  onSelectOption: (option: Option) => void;
  onSearchChange: (text: string) => void;
  sectionRef: React.RefObject<SectionList<any>>;
  sections: Section[];
  onLetterChange: (letter: string) => void;
  getItemLayout: (
    data: SectionListData<any>[] | null,
    index: number
  ) => {
    length: number;
    offset: number;
    index: number;
  };
}

const PickerScreen: React.FC<PickerScreenProps> = ({
  title,
  label,
  placeholder,
  size,
  options,
  selectedOption,
  containerStyle,
  disabled,
  searchPlaceholder,
  listEmptyText,
  error,
  modalSize,
  hasError,
  showModal,
  toggleModal,
  translateY,
  panResponder,
  onSelectOption,
  onSearchChange,
  sectionRef,
  sections,
  onLetterChange,
  getItemLayout,
}) => (
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
          SELECT_STYLE[size],
        ]}
      >
        <TouchableOpacity
          onPress={() => toggleModal(true)}
          style={styles.select}
          disabled={disabled}
        >
          <Text
            type="bodyRegular"
            numberOfLines={1}
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
        <Text style={styles.error} type="subtextRegular" color={colors.redDark}>
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
                <View>
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
                    getItemLayout={getItemLayout}
                  />
                  <AlphabetScroll onLetterChange={onLetterChange} />
                </View>
              </>
            )}
          </View>
        </Animated.View>
      </Modal>
    )}
  </>
);

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
    flex: 1,
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

export default PickerScreen;
