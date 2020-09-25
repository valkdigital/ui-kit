import React, { ReactNode } from "react";
import { View, Modal, ViewStyle } from "react-native";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
  animationType?: "none" | "slide" | "fade";
  backgroundColor?: string;
  style?: ViewStyle | ViewStyle[];
}

export default ({
  children,
  onClose,
  animationType = "none",
  backgroundColor = "transparent",
  style,
}: ModalProps) => (
  <Modal visible={true} transparent={true} animationType={animationType}>
    <TouchableWithoutFeedback onPress={onClose}>
      <View
        style={[
          styles.overlay,
          {
            backgroundColor,
          },
          style,
        ]}
      >
        <TouchableWithoutFeedback>
          {typeof children === "function" ? children(onClose) : children}
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    zIndex: 100,
  },
});
