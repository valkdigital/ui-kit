import React, { useState } from "react";
import { StyleSheet, ScrollView, ViewStyle, Pressable } from "react-native";
import spacing from "../../style/spacing";
import Text from "../Text";

interface MultipleButtonsProps {
  containerStyle?: ViewStyle;
  onPress: (idx: number) => void;
  labels: string[];
  activeColor?: string;
  inActiveColor?: string;
  disabled?: boolean;
}

const MultipleButtons: React.FC<MultipleButtonsProps> = ({
  labels,
  onPress,
  activeColor = "#2BB9F5",
  inActiveColor = "#EFEFEF",
  containerStyle,
  disabled,
}) => {
  const [index, setIndex] = useState(0);

  const onButtonPressed = (i: number) => {
    if (disabled) return;
    setIndex(i);
    onPress(i);
  };

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={[styles.contentContainer, containerStyle]}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {labels.map((l, i) => (
        <Button
          isSelected={index === i}
          onPress={() => onButtonPressed(i)}
          activeColor={activeColor}
          inActiveColor={inActiveColor}
          label={l}
          disabled={disabled}
        />
      ))}
    </ScrollView>
  );
};

interface ButtonProps {
  onPress: () => void;
  activeColor?: string;
  inActiveColor?: string;
  isSelected: boolean;
  label: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  activeColor,
  inActiveColor,
  isSelected,
  label,
  disabled,
}) => (
  <Pressable
    style={({ pressed }) => [
      styles.button,
      (pressed || disabled) && { opacity: 0.4 },
      { backgroundColor: isSelected ? activeColor : inActiveColor },
    ]}
    onPress={onPress}
  >
    <Text color={isSelected ? "white" : "black"} type="bodySemiBold">
      {label}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  contentContainer: {
    height: 40,
  },
  button: {
    borderRadius: 4,
    paddingHorizontal: spacing.sp2,
    paddingVertical: spacing.sp1,
    marginRight: spacing.sp1,
  },
});

export default MultipleButtons;
