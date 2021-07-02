import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ViewStyle,
  Dimensions,
  PanResponderInstance,
} from "react-native";
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
import Select from "./Select";
import ThemeContext from "../../style/ThemeContext";
import PickerList from "./PickerList";
import Icon from "../Icon";

const MODAL_STYLE: { [key in ModalSizes]: ViewStyle } = {
  responsive: {
    maxHeight: Dimensions.get("window").height - Spacing.sp8,
  },
  fullscreen: {
    top: Spacing.sp8,
  },
};

type InheritedProps = Omit<
  PickerProps,
  "onClose" | "onSelectChange" | "onAddOptionPress"
>;

export interface PickerScreenProps extends InheritedProps {
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
  onAddOption: () => void;
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
  addOptionEnabled,
  addOptionTitle,
  onAddOption,
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
  customSections,
}) => {
  const { background, typography, border, grey } = useContext(ThemeContext);
  return (
    <>
      {SelectComponent ? (
        SelectComponent({
          label,
          placeholder,
          selectedOption,
          showOptions,
          isFocused: showModal,
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
          isFocused={showModal}
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
              { backgroundColor: background },
              MODAL_STYLE[modalSize],
              { transform: [{ translateY }] },
            ]}
          >
            <View {...panResponder.panHandlers}>
              <View style={[styles.handle, { backgroundColor: grey[3] }]} />
              <View style={[styles.header, { borderBottomColor: border }]}>
                <View style={styles.headerLeft} />
                <Text type="h6" textAlign="center">
                  {title}
                </Text>
                <TouchableOpacity onPress={hideOptions} hitSlop={hitSlop}>
                  <Icon
                    name="close"
                    style={[styles.headerRight, { color: typography.color }]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <PickerList
              options={options}
              favoriteOptions={favoriteOptions}
              selectedOption={selectedOption}
              modalSize={modalSize}
              onSelectOption={onSelectOption}
              listEmptyText={listEmptyText}
              search={search}
              searchPlaceholder={searchPlaceholder}
              onSearchChange={onSearchChange}
              addOptionEnabled={addOptionEnabled}
              addOptionTitle={addOptionTitle}
              onAddOption={onAddOption}
              listType={listType}
              alphabeticScrollEnabled={alphabeticScrollEnabled}
              customSections={customSections}
            />
          </Animated.View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: Spacing.sp3,
    borderTopRightRadius: Spacing.sp3,
    ...shadow({ x: 0, y: 2, opacity: 0.4, blurRadius: 48 }),
    zIndex: 1,
  },
  handle: {
    width: Spacing.sp4,
    height: Spacing["sp1/2"],
    alignSelf: "center",
    marginTop: Spacing.sp2,
    borderRadius: Spacing.sp2,
  },
  header: {
    paddingVertical: Spacing.sp2,
    paddingHorizontal: Spacing.sp3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  headerLeft: {
    width: 24,
  },
  headerRight: {
    width: 24,
  },
});

export default PickerScreen;
