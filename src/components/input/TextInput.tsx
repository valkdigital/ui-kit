import React, { useRef, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  TextInput as RNTI,
  TextInputProps as TIP,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { omit } from "lodash";
import Spacing from "../../style/spacing";
import Text from "../Text";

interface TextInputProps extends TIP {
  label: string;
  containerStyle?: ViewStyle;
  size?: "small" | "medium" | "large";

  /**
   * If error is set, the border will be red and the message will be shown below the inputfield.
   */
  error?: string;
  showCheckmark?: boolean;
  disabled?: boolean;
  /**
   * won't be shown when there is an error.
   */
  helperText?: string;
}

const SIZE: { [key: string]: ViewStyle } = {
  small: { width: 160 },
  medium: { width: 287 },
  large: { width: 328 },
};

const INACTIVE_BORDER_COLOR = "#C4C4C4";
const ERROR_COLOR = "#DE0A12";
const ACTIVE_BORDER_COLOR = "#498FA7";

const TextInput = React.forwardRef<RNTI, TextInputProps>((props, ref) => {
  const {
    containerStyle,
    label,
    size = "large",
    error,
    onFocus,
    onBlur,
    secureTextEntry,
    showCheckmark = false,
    disabled,
    helperText,
  } = props;
  //   remove custom props or overrided props
  const passInputPros = omit(
    props,
    "containerStyle",
    "label",
    "size",
    "error",
    "onFocus",
    "onBlur",
    "secureTextEntry",
    "showCheckmark",
    "disabled",
    "helperText"
  );

  const [hideText, setHideText] = useState(secureTextEntry);
  const [borderColor, setBorderColor] = useState(INACTIVE_BORDER_COLOR);

  const inputRef = useRef<RNTI>(null);
  if (ref) {
    ref = inputRef;
  }
  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (!error) setBorderColor(ACTIVE_BORDER_COLOR);
    onFocus && onFocus(e);
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (!error) setBorderColor(INACTIVE_BORDER_COLOR);
    onBlur && onBlur(e);
  };

  useEffect(() => {
    if (error) setBorderColor(ERROR_COLOR);
  }, [error]);

  const toggleHideText = () => {
    setHideText(!hideText);
  };
  const showIcons = secureTextEntry || showCheckmark;

  const focusInputField = () => inputRef?.current?.focus();

  return (
    <View
      style={[
        styles.container,
        { ...SIZE[size] },
        disabled && { opacity: 0.4 },
        containerStyle,
      ]}
    >
      <TouchableOpacity disabled={disabled} onPress={focusInputField}>
        <Text style={styles.label} type="subtextSemiBold">
          {label}
        </Text>
        <View style={[styles.inputWrapper, { borderColor }]}>
          <RNTI
            ref={inputRef}
            textAlignVertical="center"
            style={styles.input}
            {...passInputPros}
            onFocus={_onFocus}
            onBlur={_onBlur}
            secureTextEntry={hideText}
            editable={!disabled}
          />
          {showIcons && (
            <View style={styles.iconContainer}>
              {secureTextEntry && (
                <TouchableOpacity onPress={toggleHideText}>
                  <Image
                    style={styles.icon}
                    source={require("../../media/eye.png")}
                  />
                </TouchableOpacity>
              )}
              {showCheckmark && (
                <TouchableOpacity onPress={toggleHideText}>
                  <Image
                    style={styles.icon}
                    source={require("../../media/checkmark.png")}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
      {error && (
        <Text style={styles.error} type="subtextRegular" color={ERROR_COLOR}>
          {error}
        </Text>
      )}
      {!error && helperText && (
        <Text type="subtextRegular" color="#ACACAC">
          {helperText}
        </Text>
      )}
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  input: {
    textAlignVertical: "center",
    minHeight: 40,
    maxHeight: 160,
    flex: 1,
    paddingLeft: Spacing.sp1,
    fontSize: 16,
    borderWidth: 0,
    ...Platform.select({ web: { outlineWidth: 0 } }),
  },
  inputWrapper: {
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    marginBottom: Spacing["sp1/2"],
  },
  error: { marginTop: Spacing["sp1/2"] },
  icon: {
    marginHorizontal: Spacing["sp1/2"],
  },
  iconContainer: {
    flexDirection: "row",
    paddingHorizontal: Spacing["sp1/2"],
  },
});

export default TextInput;
