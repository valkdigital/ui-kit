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
import type {
  ListTypes,
  SelectSizes,
  Option,
  PickerProps,
  ModalSizes,
} from ".";
import FlatList from "./FlatList";
import SectionList from "./SectionList";
import DismissKeyboard from "./DismissKeyboard";
import TextInput from "../input/TextInput";
import Select from "./Select";

const MODAL_STYLE: { [key in ModalSizes]: ViewStyle } = {
  responsive: {
    maxHeight: Dimensions.get("window").height - Spacing.sp8,
  },
  fullscreen: {
    top: Spacing.sp8,
  },
};

type InheritedProps = Omit<PickerProps, "onClose" | "onSelectChange">;

interface PickerScreenProps extends InheritedProps {
  size: SelectSizes;
  modalSize: ModalSizes;
  listType: ListTypes;
  showModal: boolean;
  showOptions: () => void;
  hideOptions: () => void;
  translateY: Animated.Value;
  panResponder: PanResponderInstance;
  onSelectOption: (option: Option) => void;
  search: string;
  onSearchChange: (search: string) => void;
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
  selectContainerStyle,
  disabled,
  alphabeticScrollEnabled,
  searchPlaceholder,
  listEmptyText,
  error,
  modalSize,
  listType,
  showModal,
  showOptions,
  hideOptions,
  translateY,
  panResponder,
  onSelectOption,
  search,
  onSearchChange,
}) => (
  <>
    {SelectComponent ? (
      SelectComponent({
        label,
        placeholder,
        selectedOption,
        showOptions,
        disabled,
        error,
      })
    ) : (
      <Select
        label={label}
        placeholder={placeholder}
        selectContainerStyle={selectContainerStyle}
        disabled={disabled}
        error={error}
        size={size}
        showOptions={showOptions}
        selectedOption={selectedOption}
      />
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
            MODAL_STYLE[modalSize],
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
            <>
              {modalSize === "responsive" && (
                <FlatList
                  options={options}
                  selectedOption={selectedOption}
                  onSelectOption={onSelectOption}
                  listEmptyText={listEmptyText}
                  search={search}
                  needsPaddingTop={true}
                />
              )}
              {modalSize === "fullscreen" && (
                <View style={styles.flex}>
                  <TextInput
                    containerStyle={styles.input}
                    placeholder={searchPlaceholder}
                    onChangeText={onSearchChange}
                    type="search"
                  />
                  <View style={styles.flex}>
                    {listType === "flatList" && (
                      <FlatList
                        options={options}
                        selectedOption={selectedOption}
                        onSelectOption={onSelectOption}
                        listEmptyText={listEmptyText}
                        search={search}
                      />
                    )}
                    {listType === "sectionList" && (
                      <SectionList
                        options={options}
                        favoriteOptions={favoriteOptions}
                        selectedOption={selectedOption}
                        onSelectOption={onSelectOption}
                        listEmptyText={listEmptyText}
                        search={search}
                        alphabeticScrollEnabled={alphabeticScrollEnabled}
                      />
                    )}
                  </View>
                </View>
              )}
            </>
          </DismissKeyboard>
        </Animated.View>
      </Modal>
    )}
  </>
);

const styles = StyleSheet.create({
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
  input: {
    paddingVertical: Spacing.sp3,
    paddingHorizontal: Spacing.sp3,
    backgroundColor: "#ffffff",
    zIndex: 10,
  },
  flex: { flex: 1 },
});

export default PickerScreen;
