import React, { useContext } from "react";
import { StyleSheet, Pressable, ViewStyle } from "react-native";
import hitSlop from "../../style/hitSlop";
import ThemeContext from "../../style/ThemeContext";
import Text from "../Text";

interface TextButtonProps {
  color?: string;
  label: string;
  style?: ViewStyle;
}

const TextButton: React.FC<TextButtonProps> = (props) => {
  const {
    info: { midDark },
  } = useContext(ThemeContext);
  const { color = midDark, style, label } = props;
  return (
    <Pressable
      style={({ pressed }) => [style, pressed && { opacity: 0.4 }]}
      hitSlop={hitSlop}
    >
      <Text style={styles.link} color={color}>
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
