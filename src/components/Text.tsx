import React, { ReactChild, useContext } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import Typography, { TypographyLiterals } from "../style/typography";
import ThemeContext from "../style/ThemeContext";
import { omit } from "lodash";

interface TextProps extends RNTextProps {
  type?: TypographyLiterals;
  textAlign?: "left" | "center" | "right";
  color?: string;
  style?: TextStyle | TextStyle[];
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
    >
      {children}
    </RNText>
  );
};

export default Text;
