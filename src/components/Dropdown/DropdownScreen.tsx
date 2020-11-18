import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import shadow from "../../style/shadow";
import Spacing from "../../style/spacing";
import Modal from "../Modal";
import type {
  ListTypes,
  SelectSizes,
  Option,
  DropdownProps,
  ModalSizes,
} from ".";
import FlatList from "../Picker/FlatList";
import SectionList from "../Picker/SectionList";
import DismissKeyboard from "../Picker/DismissKeyboard";
import TextInput from "../input/TextInput";
import AddOption from "../Picker/AddOption";
import ThemeContext from "../../style/ThemeContext";
import Text from "../Text";

const SELECT_STYLE: { [key in SelectSizes]: ViewStyle } = {
  small: { width: 160 },
  medium: { width: 287 },
  large: {},
};

type InheritedProps = Omit<
  DropdownProps,
  "onClose" | "onSelectChange" | "onAddOptionPress"
>;

interface DropdownScreenProps extends InheritedProps {
  size: SelectSizes;
  modalSize: ModalSizes;
  listType: ListTypes;
  showDropdown: boolean;
  showOptions: () => void;
  hideOptions: () => void;
  onSelectOption: (option: Option) => void;
  search: string;
  onSearchChange: (search: string) => void;
  onAddOption: () => void;
}

const DropdownScreen: React.FC<DropdownScreenProps> = ({
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
  showDropdown,
  showOptions,
  hideOptions,
  onSelectOption,
  search,
  onSearchChange,
}) => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    pageX: number;
    pageY: number;
  }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const selectRef = useRef<View>(null);
  const dimensions = useWindowDimensions();
  const {
    border,
    error: { midDark },
    info,
    typography,
  } = useContext(ThemeContext);

  const borderColor = !!error ? midDark : showDropdown ? info.midDark : border;

  const { x, y, width, height, pageX, pageY } = position;

  useLayoutEffect(() => {
    selectRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setPosition({ x, y, width, height, pageX, pageY });
    });
  }, [dimensions]);

  return (
    <View
      style={[
        styles.container,
        selectContainerStyle,
        disabled && { opacity: 0.4 },
      ]}
    >
      <Text type="subtextSemiBold" style={styles.label}>
        {label}
      </Text>
      <View
        ref={selectRef}
        style={[styles.selectContainer, { borderColor }, SELECT_STYLE[size]]}
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
                selectedOption === undefined
                  ? [styles.placeholder, { color: typography.placeholder }]
                  : undefined
              }
            >
              {selectedOption?.label ?? placeholder}
            </Text>
          </View>
          <Image
            source={
              showDropdown
                ? require("../../media/arrow_down.png")
                : require("../../media/arrow_up.png")
            }
            style={[styles.chevron, { tintColor: typography.color }]}
          />
        </TouchableOpacity>
      </View>
      {!!error && (
        <Text style={styles.error} type="subtextRegular" color={midDark}>
          {error}
        </Text>
      )}
      {showDropdown && (
        <View
          style={[
            styles.modal,
            {
              top: height + y,
              left: x,
            },
            SELECT_STYLE[size],
            size === "large" && { width },
          ]}
        >
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
                  {addOptionEnabled && !!search && (
                    <AddOption
                      onAddOptionPress={onAddOption}
                      addOptionTitle={addOptionTitle}
                    />
                  )}
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    ...shadow({ x: 0, y: 0, opacity: 0.1, blurRadius: 14 }),
    zIndex: 200,
    flex: 1,
  },
  input: {
    paddingVertical: Spacing.sp3,
    paddingHorizontal: Spacing.sp3,
    backgroundColor: "#ffffff",
    zIndex: 10,
  },
  flex: { flex: 1, backgroundColor: "#ffffff", zIndex: 20 },
  container: {
    alignSelf: "stretch",
  },
  label: {
    marginBottom: Spacing["sp1/2"],
  },
  selectContainer: {
    borderWidth: 1,
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
  placeholder: {
    flex: 1,
  },
  error: { marginTop: Spacing["sp1/2"] },
});

export default DropdownScreen;
