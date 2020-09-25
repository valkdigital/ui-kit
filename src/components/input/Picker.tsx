import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  Image,
  Dimensions,
} from "react-native";
import Text from "../Text";
import Spacing from "../../style/spacing";
import shadow from "../../style/shadow";
import Modal from "../Modal";
import colors from "../../style/colors";
import TextInput from "./TextInput";

type Sizes = "responsive" | "full";

const MODAL_STYLE: { [key in Sizes]: ViewStyle } = {
  responsive: {
    maxHeight: Dimensions.get("window").height - Spacing.sp8,
  },
  full: {
    top: Spacing.sp8,
  },
};

interface Option {
  label: string;
  value: any;
}

interface PickerProps {
  title: string;
  label: string;
  placeholder: string;
  options?: Option[];
  selectedOption?: Option;
  onSelectChange: (option: Option) => void;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  onSubmit?: () => void;
  error?: string;
  size: Sizes;
}

const Picker = React.forwardRef<View, PickerProps>((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const pickerRef = useRef<View>(null);
  if (ref) {
    ref = pickerRef;
  }

  const {
    title,
    label,
    placeholder,
    options,
    selectedOption,
    onSelectChange,
    containerStyle,
    disabled,
    onSubmit,
    error,
    size,
  } = props;
  const hasError = !!error;

  const toggleModal = () => {
    if (onSubmit && showModal) onSubmit();
    setShowModal(!showModal);
  };

  const selectOption = (option: Option) => {
    onSelectChange(option);
    setShowModal(false);
  };

  return (
    <>
      <View
        ref={ref}
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
            onPress={toggleModal}
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
          animationType="slide"
          onClose={toggleModal}
          backgroundColor="transparent"
        >
          {(closeModal: () => void) => (
            <View style={[styles.modal, MODAL_STYLE[size]]}>
              <View style={styles.handle} />
              <View style={styles.header}>
                <View style={styles.headerLeft} />
                <Text type="h4" textAlign="center">
                  {title}
                </Text>
                <TouchableOpacity onPress={closeModal}>
                  <Image
                    source={require("../../media/close.png")}
                    style={styles.headerRight}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.content}>
                {size === "full" && (
                  <TextInput
                    label="none"
                    containerStyle={styles.input}
                    placeholder="Zoeken"
                  />
                )}

                <FlatList
                  data={options}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.option}
                      onPress={() => selectOption(item)}
                    >
                      <Text type="bodyRegular">{item.label}</Text>
                      {selectedOption?.value === item.value && (
                        <Image source={require("../../media/checkmark.png")} />
                      )}
                    </TouchableOpacity>
                  )}
                  contentContainerStyle={styles.list}
                />
              </View>
            </View>
          )}
        </Modal>
      )}
    </>
  );
});

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
    ...shadow({ x: 0, y: 2, opacity: 0.32, blurRadius: 24 }),
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Spacing.sp7,
    paddingVertical: Spacing.sp2,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  content: { padding: Spacing.sp3 },
  list: { marginTop: -Spacing.sp2 },
  input: { marginBottom: Spacing.sp3 },
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
    width: 16,
    height: 16,
  },
});

export default Picker;
