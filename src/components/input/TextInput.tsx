import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput as RNTI,
} from "react-native";
import BaseInput from "./BaseInput";
import type { BaseInputProps } from "./BaseInput";
import { omit } from "lodash";
import { Spacing } from "@valkdigital/ui-kit";
import hitSlop from "../../style/hitSlop";
import ThemeContext from "../../style/ThemeContext";

interface TextInputProps
  extends Omit<BaseInputProps, "LeftIconComponent" | "RightIconComponent"> {
  type?: "password" | "search";
}

const TextInput = React.forwardRef<RNTI, TextInputProps>((props, ref) => {
  const { type } = props;
  const { typography } = useContext(ThemeContext);
  const [hideText, setHideText] = useState(type === "password");

  const passInputProps = omit(props, "type", "secureTextEntry");

  const toggleHideText = () => {
    setHideText(!hideText);
  };

  return (
    <BaseInput
      ref={ref}
      {...passInputProps}
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
            <Image style={styles.eye} source={require("../../media/eye.png")} />
          </TouchableOpacity>
        )
      }
    />
  );
});

const styles = StyleSheet.create({
  search: {
    width: 13,
    height: 13,
    alignSelf: "center",
    marginRight: Spacing.sp1,
  },
  eye: {
    marginLeft: Spacing.sp1,
    width: 16,
    height: 16,
  },
});

export default TextInput;
