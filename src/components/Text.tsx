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
  /**
   * Color overrides theme color, so it will break dark/light mode color change.
   */
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = (props) => {
  const { type = "bodyRegular", textAlign, color, style, children } = props;
  const { typography } = useContext(ThemeContext);

  const colorByType = (type: TypographyLiterals) => {
    if (type.includes.length === 2 || type === "subHeading")
      return typography.heading;
    if (type.includes("body")) return typography.body;
    return typography.color;
  };

  const passTextProps = omit(props, "type", "textAlign", "color", "style");
  const textColor = color ? color : colorByType(type);

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
