import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  ViewStyle,
  Dimensions,
  PanResponderInstance,
} from "react-native";
import colors from "../../style/colors";
import shadow from "../../style/shadow";
import Spacing from "../../style/spacing";
import hitSlop from "../../style/hitSlop";
import Modal from "../Modal";
import Text from "../Text";
import type { ListTypes, Sizes, Option, PickerProps } from ".";
import PlainList from "./PlainList";
import SearchableList from "./SearchableList";
import DismissKeyboard from "./DismissKeyboard";

const MODAL_STYLE: { [key in ListTypes]: ViewStyle } = {
  plain: {
    maxHeight: Dimensions.get("window").height - Spacing.sp8,
  },
  searchable: {
    top: Spacing.sp8,
  },
};

const SELECT_STYLE: { [key in Sizes]: ViewStyle } = {
  small: { width: 160 },
  medium: { width: 287 },
  large: {},
};

type InheritedProps = Omit<
  PickerProps,
  "onSubmit" | "onSelectChange" | "size" | "listType"
>;

interface PickerScreenProps extends InheritedProps {
  size: Sizes;
  listType: ListTypes;
  showModal: boolean;
  showOptions: () => void;
  hideOptions: () => void;
  translateY: Animated.Value;
  panResponder: PanResponderInstance;
  onSelectOption: (option: Option) => void;
}

const PickerScreen: React.FC<PickerScreenProps> = ({
  title,
  label,
  placeholder,
  size,
  options,
  favoriteOptions,
  selectedOption,
  SelectComponent,
  containerStyle,
  disabled,
  searchPlaceholder,
  listEmptyText,
  error,
  listType,
  showModal,
  showOptions,
  hideOptions,
  translateY,
  panResponder,
  onSelectOption,
}) => (
  <>
    {SelectComponent ? (
      SelectComponent({
        label,
        placeholder,
        selectedOption,
        showOptions,
        disabled,
      })
    ) : (
      <View
        style={[styles.container, containerStyle, disabled && { opacity: 0.4 }]}
      >
        <Text type="subtextSemiBold" style={styles.label}>
          {label}
        </Text>
        <View
          style={[
            styles.selectContainer,
            !!error && { borderColor: colors.redDark },
            SELECT_STYLE[size],
          ]}
        >
          <TouchableOpacity
            onPress={showOptions}
            style={styles.select}
            disabled={disabled}
          >
            <View style={styles.row}>
              {selectedOption?.image && (
                <Image
                  source={selectedOption?.image}
                  style={styles.optionImage}
                  resizeMode="contain"
                />
              )}
              <Text
                type="bodyRegular"
                numberOfLines={1}
                style={
                  selectedOption === undefined ? styles.placeholder : undefined
                }
              >
                {selectedOption?.label ?? placeholder}
              </Text>
            </View>
            <Image
              source={require("../../media/arrow_down.png")}
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
        {!!error && (
          <Text
            style={styles.error}
            type="subtextRegular"
            color={colors.redDark}
          >
            {error}
          </Text>
        )}
      </View>
    )}
    {showModal && (
      <Modal
        animationType="none"
        onClose={hideOptions}
        backgroundColor="transparent"
      >
        <Animated.View
          style={[
            styles.modal,
            MODAL_STYLE[listType],
            { transform: [{ translateY }] },
          ]}
        >
          <View {...panResponder.panHandlers}>
            <View style={styles.handle} />
            <View style={styles.header}>
              <View style={styles.headerLeft} />
              <Text type="h6" textAlign="center">
                {title}
              </Text>
              <TouchableOpacity onPress={hideOptions} hitSlop={hitSlop}>
                <Image
                  source={require("../../media/close.png")}
                  style={styles.headerRight}
                />
              </TouchableOpacity>
            </View>
          </View>

          <DismissKeyboard>
            <View style={styles.content}>
              {listType === "plain" && (
                <PlainList
                  options={options}
                  selectedOption={selectedOption}
                  onSelectOption={onSelectOption}
                  listType={listType}
                />
              )}

              {listType === "searchable" && (
                <SearchableList
                  options={options}
                  favoriteOptions={favoriteOptions}
                  selectedOption={selectedOption}
                  onSelectOption={onSelectOption}
                  listType={listType}
                  searchPlaceholder={searchPlaceholder}
                  listEmptyText={listEmptyText}
                />
              )}
            </View>
          </DismissKeyboard>
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
    height: 40,
    paddingHorizontal: Spacing.sp2,
    paddingVertical: Spacing.sp1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  optionImage: {
    width: Spacing.sp3,
    height: Spacing.sp3,
    alignSelf: "center",
    marginRight: Spacing.sp1,
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
  headerLeft: {
    width: 16,
  },
  headerRight: {
    width: 12,
    height: 12,
  },
});

export default PickerScreen;
