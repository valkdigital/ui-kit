import React from "react";
import { TextInput as RNTI, StyleSheet } from "react-native";
import BaseInput from "./BaseInput";
import type { BaseInputProps } from "./BaseInput";
import Typography from "../../style/typography";
import { omit } from "lodash";
import Spacing from "../../style/spacing";

type XLTextInputProps = Omit<
  BaseInputProps,
  "LeftIconComponent" | "RightIconComponent"
>;

const XLTextInput = React.forwardRef<RNTI, XLTextInputProps>((props, ref) => {
  const passInputProps = omit(props, "labelStyle");

  return (
    <BaseInput
      ref={ref}
      {...passInputProps}
      style={styles.input}
      labelStyle={styles.label}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    minHeight: 60,
    ...Typography.subHeading,
  },
  label: {
    marginBottom: Spacing.sp1,
  },
});

export default XLTextInput;
