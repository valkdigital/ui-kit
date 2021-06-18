import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BaseInput from "./BaseInput";
import type { BaseInputProps, TextInputType } from "./BaseInput";
import { omit } from "lodash";
import hitSlop from "../../style/hitSlop";
import ThemeContext from "../../style/ThemeContext";
import spacing from "../../style/spacing";
import Icon from "../Icon";

interface TextInputProps
  extends Omit<BaseInputProps, "textAlign" | "labelStyle" | "secureTextEntry"> {
  type?: "password" | "search";
}

const TextInput = React.forwardRef<TextInputType, TextInputProps>(
  (props, ref) => {
    const { type } = props;
    const { typography } = useContext(ThemeContext);
    const [hideText, setHideText] = useState(type === "password");

    const passInputProps = omit(
      props,
      "type",
      "textAlign",
      "labelStyle",
      "secureTextEntry"
    );

    const toggleHideText = () => {
      setHideText(!hideText);
    };

    return (
      <BaseInput
        ref={ref}
        secureTextEntry={hideText}
        LeftIconComponent={
          type === "search" && (
            <Icon
              name="search"
              style={[styles.search, { color: typography.color }]}
            />
          )
        }
        RightIconComponent={
          type === "password" && (
            <TouchableOpacity onPress={toggleHideText} hitSlop={hitSlop}>
              <Icon name="show" style={styles.show} />
            </TouchableOpacity>
          )
        }
        {...passInputProps}
      />
    );
  }
);

const styles = StyleSheet.create({
  search: {
    fontSize: 16,
    alignSelf: "center",
    marginRight: spacing.sp1,
  },
  show: {
    marginLeft: spacing.sp1,
    width: 24,
    height: 24,
  },
});

export default TextInput;
