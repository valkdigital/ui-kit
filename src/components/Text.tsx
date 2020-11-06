import React, { useContext } from "react";
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import Typography, {
  MaxFontSizeMultiplier,
  TypographyLiterals,
} from "../style/typography";
import ThemeContext from "../style/ThemeContext";
import { omit } from "lodash";

interface TextProps extends RNTextProps {
  type?: TypographyLiterals;
  textAlign?: "left" | "center" | "right";
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = (props) => {
  const { typography } = useContext(ThemeContext);

  const { type = "bodyRegular", textAlign, color, style, children } = props;
  const passTextProps = omit(props, "type", "textAlign", "color", "style");
  const textColor = color ? color : typography.color;

  return (
    <RNText
      {...passTextProps}
      style={[Typography[type], { color: textColor, textAlign }, style]}
      maxFontSizeMultiplier={MaxFontSizeMultiplier[type]}
    >
      {children}
    </RNText>
  );
};

export default Text;
