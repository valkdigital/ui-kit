import React, { useContext, useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import BaseInput from "./BaseInput";
import type { BaseInputProps, TextInputType } from "./BaseInput";
import { omit } from "lodash";
import hitSlop from "../../style/hitSlop";
import ThemeContext from "../../style/ThemeContext";
import spacing from "../../style/spacing";

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
            <Image
              source={require("../../media/search.png")}
              style={[styles.search, { tintColor: typography.color }]}
            />
          )
        }
        RightIconComponent={
          type === "password" && (
            <TouchableOpacity onPress={toggleHideText} hitSlop={hitSlop}>
              <Image
                style={styles.eye}
                source={require("../../media/eye.png")}
              />
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
    width: 13,
    height: 13,
    alignSelf: "center",
    marginRight: spacing.sp1,
  },
  eye: {
    marginLeft: spacing.sp1,
    width: 16,
    height: 16,
  },
});

export default TextInput;
