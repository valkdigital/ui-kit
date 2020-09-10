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

type Sizes = "large" | "small";

const MODAL_STYLE: { [key in Sizes]: ViewStyle } = {
  large: {
    top: 64,
    bottom: undefined,
    height: Dimensions.get("screen").height - 64,
  },
  small: {
    top: Dimensions.get("screen").height - 328,
    paddingTop: spacing.sp4,
    bottom: 0,
    height: 328,
  },
};

interface PickerProps {
  title: string;
  label: string;
  placeholder: string;
  options?: string[];
  value?: string;
  onValueChange: (value: string) => void;
  containerStyle?: ViewStyle;
  size?: Sizes;
}

const Picker: React.FC<PickerProps> = ({
  title,
  label,
  placeholder,
  options,
  value,
  onValueChange,
  containerStyle,
  size = "large",
}: PickerProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const selectItem = (item: string) => {
    onValueChange(item);
    toggleModal();
  };

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <Text type="subtextSemiBold" style={styles.label}>
          {label}
        </Text>
        <View style={styles.selectContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.select}>
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
          <View style={[styles.modal, MODAL_STYLE[size]]}>
            {size === "large" && (
              <>
                <View style={styles.handle} />
                <View style={styles.header}>
                  <View style={{ width: 16 }} />
                  <Text type="h4" textAlign="center">
                    {title}
                  </Text>
                  <TouchableOpacity onPress={toggleModal}>
                    <Image source={require("../icons/close.png")} />
                  </TouchableOpacity>
                </View>
              </>
            )}

            <FlatList
              data={options}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => selectItem(item)}
                >
                  <Text type="bodyRegular">{item}</Text>
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
    maxWidth: 328,
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
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 1,
  },
});

export default Picker;
