import React, { useState, useEffect, ReactNode } from "react";
import { View, Animated, ViewStyle, Dimensions } from "react-native";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

const animSwitch: {
  [key: string]: { start: number; end: number };
} = {
  fade: {
    start: 0,
    end: 1,
  },
  slide: {
    start: Dimensions.get("screen").height,
    end: 0,
  },
};

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
  animationType = "fade",
  backgroundColor = "transparent",
  style,
}: ModalProps) => {
  const [value] = useState<Animated.Value>(
    new Animated.Value(animSwitch[animationType].start)
  );

  const closeModal = () => {
    if (!onClose) return;
    if (animationType === "none") {
      onClose();
      return;
    }
    Animated.timing(value, {
      toValue: animSwitch[animationType].start,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  useEffect(() => {
    if (animationType === "none") return;

    Animated.timing(value, {
      toValue: animSwitch[animationType].end,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  if (animationType === "none") {
    return (
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.overlay, { backgroundColor }, style]}>
          <TouchableWithoutFeedback onPress={() => {}}>
            {typeof children === "function" ? children(closeModal) : children}
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={closeModal}>
      <Animated.View
        style={[
          styles.overlay,
          animationType === "fade" && { opacity: value },
          animationType === "slide" && { transform: [{ translateY: value }] },
          {
            backgroundColor,
          },
          style,
        ]}
      >
        <TouchableWithoutFeedback onPress={() => {}}>
          {typeof children === "function" ? children(closeModal) : children}
        </TouchableWithoutFeedback>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    zIndex: 10,
  },
});
