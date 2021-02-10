import React, { useContext } from "react";
import { StyleSheet, ScrollView, ViewStyle, Pressable } from "react-native";
import ThemeContext from "../../style/ThemeContext";
import spacing from "../../style/spacing";
import Text from "../Text";

interface MultipleButtonsProps {
  containerStyle?: ViewStyle;
  onPress: (selectedLabel: string) => void;
  selectedLabel: string;
  labels: string[];
  activeColor?: string;
  inActiveColor?: string;
  disabled?: boolean;
}

const MultipleButtons: React.FC<MultipleButtonsProps> = ({
  labels,
  onPress,
  selectedLabel,
  activeColor,
  inActiveColor,
  containerStyle,
  disabled,
}) => {
  const { info, grey } = useContext(ThemeContext);

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={[styles.contentContainer, containerStyle]}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {labels.map((label, i) => (
        <Button
          key={i}
          isSelected={selectedLabel === label}
          onPress={onPress}
          activeColor={activeColor ?? info.primary}
          inActiveColor={inActiveColor ?? grey[0]}
          label={label}
          disabled={disabled}
        />
      ))}
    </ScrollView>
  );
};

interface ButtonProps {
  onPress: (selectedLabel: string) => void;
  activeColor: string;
  inActiveColor: string;
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
}) => {
  const onButtonPressed = () => {
    onPress(label);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        (pressed || disabled) && { opacity: 0.4 },
        { backgroundColor: isSelected ? activeColor : inActiveColor },
      ]}
      onPress={onButtonPressed}
    >
      <Text color={isSelected ? "white" : "black"} type="bodySemiBold">
        {label}
      </Text>
    </Pressable>
  );
};

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
