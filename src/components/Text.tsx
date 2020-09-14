import React, { useContext } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import Typography, { TypographyLiterals } from "../style/typography";
import ThemeContext from "../style/ThemeContext";

interface TextProps extends RNTextProps {
  type?: TypographyLiterals;
  textAlign?: "left" | "center" | "right";
  color?: string;
  style?: TextStyle;
}

const Text: React.FC<TextProps> = ({
  children,
  type = "bodyRegular",
  textAlign,
  style,
  color,
}) => {
  const { typography } = useContext(ThemeContext);
  const textColor = color ? color : typography.color;
  return (
    <RNText style={[Typography[type], { color: textColor, textAlign }, style]}>
      {children}
    </RNText>
  );
};

export default Text;
