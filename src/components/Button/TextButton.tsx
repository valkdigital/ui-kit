import type { TypographyLiterals } from "../../style/typography";
import React, { useContext } from "react";
import { StyleSheet, Pressable, ViewStyle } from "react-native";
import hitSlop from "../../style/hitSlop";
import ThemeContext from "../../style/ThemeContext";
import Text from "../Text";

interface TextButtonProps {
  color?: string;
  label: string;
  textType?: TypographyLiterals;
  style?: ViewStyle;
  onPress: () => void;
}

const TextButton: React.FC<TextButtonProps> = (props) => {
  const {
    info: { midDark },
  } = useContext(ThemeContext);
  const {
    color = midDark,
    textType = "bodyRegular",
    style,
    label,
    onPress,
  } = props;
  return (
    <Pressable
      style={({ pressed }) => [style, pressed && { opacity: 0.4 }]}
      onPress={onPress}
      hitSlop={hitSlop}
    >
      <Text style={styles.link} color={color} type={textType}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  link: {
    flexWrap: "wrap",
    textDecorationLine: "underline",
  },
});

export default TextButton;
