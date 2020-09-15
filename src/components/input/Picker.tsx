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
import spacing from "../../style/spacing";
import shadow from "../../style/shadow";
import Modal from "../Modal";
import colors from "../../style/colors";

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
            <View style={styles.modal}>
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
                style={styles.list}
              />
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
    marginBottom: spacing["sp1/2"],
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: colors.greyMidDark,
    borderRadius: spacing["sp1/2"],
  },
  select: {
    paddingHorizontal: spacing.sp2,
    paddingVertical: spacing.sp1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chevron: {
    marginLeft: spacing.sp2,
    width: 14,
    height: 8,
  },
  disabled: {
    color: colors.greyMidDark,
  },
  placeholder: {
    color: colors.greyDark,
  },
  error: { marginTop: spacing["sp1/2"] },
  modal: {
    position: "absolute",
    top: spacing.sp8,
    height: Dimensions.get("screen").height - spacing.sp8,
    left: 0,
    right: 0,
    flex: 1,
    borderTopLeftRadius: spacing.sp3,
    borderTopRightRadius: spacing.sp3,
    backgroundColor: "#ffffff",
    ...shadow({ x: 0, y: 2, opacity: 0.32, blurRadius: 24 }),
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: spacing.sp7,
    marginHorizontal: spacing.sp3,
    paddingVertical: spacing.sp2,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  list: { marginBottom: spacing.sp4 },
  handle: {
    width: spacing.sp4,
    height: spacing["sp1/2"],
    alignSelf: "center",
    marginTop: spacing.sp2,
    backgroundColor: colors.greyMidDark,
    borderRadius: spacing.sp2,
  },
  header: {
    paddingVertical: spacing.sp2,
    paddingHorizontal: spacing.sp3,
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
