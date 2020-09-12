import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  Image,
  Dimensions,
} from "react-native";
import Text from "./Text";
import spacing from "../style/spacing";
import shadow from "../style/shadow";
import Modal from "./Modal";

interface PickerProps {
  ref?: React.MutableRefObject<View>;
  title: string;
  label: string;
  placeholder: string;
  options?: { label: string; value: string }[];
  value?: string;
  onValueChange: (value: string) => void;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  onSubmit?: () => void;
}

const Picker: React.FC<PickerProps> = ({
  ref,
  title,
  label,
  placeholder,
  options,
  value,
  onValueChange,
  containerStyle,
  disabled,
  onSubmit,
}: PickerProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if (onSubmit && showModal) onSubmit();
    setShowModal(!showModal);
  };

  const selectItem = (item: string) => {
    onValueChange(item);
    toggleModal();
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
        <View style={styles.selectContainer}>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.select}
            disabled={disabled}
          >
            <Text
              type="bodyRegular"
              style={value === undefined ? styles.placeholder : undefined}
            >
              {value === undefined ? placeholder : value}
            </Text>
            <Image
              source={require("../icons/arrow_down.png")}
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showModal && (
        <Modal
          animationType="fade"
          onClose={toggleModal}
          backgroundColor="rgba(0,0,0,0.3)"
        >
          <View style={styles.modal}>
            <View style={styles.handle} />
            <View style={styles.header}>
              <View style={{ width: 16 }} />
              <Text type="h4" textAlign="center">
                {title}
              </Text>
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={require("../icons/close.png")}
                  style={styles.close}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={options}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => selectItem(item.value)}
                >
                  <Text type="bodyRegular">{item.label}</Text>
                </TouchableOpacity>
              )}
              style={styles.list}
            />
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sp2,
    width: "100%",
    maxWidth: 400,
  },
  label: {
    marginBottom: spacing.sp1,
  },
  selectContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: spacing["sp1/2"],
  },
  focusedSelectContainer: {
    borderColor: "#498FA7",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
    color: "#C4C4C4",
  },
  placeholder: {
    color: "#ACACAC",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
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
    height: spacing.sp7,
    marginHorizontal: spacing.sp3,
    paddingVertical: spacing.sp2,
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 1,
  },
  list: { marginBottom: spacing.sp4 },
  handle: {
    width: spacing.sp4,
    height: spacing["sp1/2"],
    alignSelf: "center",
    marginTop: spacing.sp2,
    backgroundColor: "#C4C4C4",
    borderRadius: 16,
  },
  header: {
    paddingVertical: spacing.sp2,
    paddingHorizontal: spacing.sp3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 1,
  },
  close: {
    width: 16,
    height: 16,
  },
});

export default Picker;
