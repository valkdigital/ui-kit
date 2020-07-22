import React, { useContext } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import Typography, { TypographyLiterals } from "../style/typography";
import ThemeContext from "../style/ThemeContext";

interface TextProps extends RNTextProps {
  type: TypographyLiterals;
  textAlign?: "left" | "center" | "right";
  color?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  type,
  textAlign,
  style,
  color,
}) => {
  const { typography } = useContext(ThemeContext);
  const textColor = color ? color : typography.color;
  return (
    <RNText style={[style, Typography[type], { color: textColor, textAlign }]}>
      {children}
    </RNText>
  );
};

export default Text;
