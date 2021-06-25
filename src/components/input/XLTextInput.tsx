import React from "react";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import BaseInput from "./BaseInput";
import type { BaseInputProps, TextInputType } from "./BaseInput";
import Typography from "../../style/typography";
import { omit } from "lodash";
import Spacing from "../../style/spacing";

type Sizes = "small" | "large";

const SIZE: { [key in Sizes]: ViewStyle } = {
  small: { width: 135 },
  large: {},
};

const TEXTSTYLE: { [key in Sizes]: TextStyle } = {
  small: {
    ...Typography.XLBodyText,
    lineHeight: undefined,
  },
  large: {
    ...Typography.subHeading,
    lineHeight: undefined,
  },
};

interface XLTextInputProps extends Omit<BaseInputProps, "size"> {
  size?: Sizes;
}

const XLTextInput = React.forwardRef<TextInputType, XLTextInputProps>(
  (props, ref) => {
    const { size = "large", style, containerStyle } = props;
    const passInputProps = omit(props, "labelStyle");

    return (
      <BaseInput
        ref={ref}
        {...passInputProps}
        style={[style, styles.input, TEXTSTYLE[size]]}
        containerStyle={[containerStyle, SIZE[size]]}
        labelStyle={styles.label}
      />
    );
  }
);

const styles = StyleSheet.create({
  input: {
    minHeight: 60,
  },
  label: {
    ...Typography.bodySemiBold,
    marginBottom: Spacing.sp1,
  },
});

export default XLTextInput;
