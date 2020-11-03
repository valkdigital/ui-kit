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
  StyleProp,
} from "react-native";
import { omit } from "lodash";
import Spacing from "../../style/spacing";
import Text from "../Text";
import colors from "../../style/colors";
import useMergedRef from "../../hooks/useMergedRef";

export interface BaseInputProps extends TIP {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  size?: "small" | "medium" | "large";
  useFullHeight?: boolean;

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
  LeftIconComponent?: JSX.Element | null | boolean;
  RightIconComponent?: JSX.Element | null | boolean;
}
const MAX_HEIGHT = 160;
const SIZE: { [key: string]: ViewStyle } = {
  small: { width: 160 },
  medium: { width: 287 },
  large: {},
};

const BaseInput = React.forwardRef<RNTI, BaseInputProps>((props, ref) => {
  const {
    containerStyle,
    label,
    size = "large",
    useFullHeight = false,
    error,
    onFocus,
    onBlur,
    showCheckmark = false,
    editable = true,
    disabled,
    helperText,
    style,
    LeftIconComponent,
    RightIconComponent,
  } = props;
  //   remove custom props or overrided props
  const passInputProps = omit(
    props,
    "style",
    "containerStyle",
    "label",
    "size",
    "error",
    "onFocus",
    "onBlur",
    "showCheckmark",
    "disabled",
    "helperText",
    "useFullHeight"
  );

  const [borderColor, setBorderColor] = useState(colors.greyMidDark);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<RNTI>(null);
  const mergedRef = useMergedRef<RNTI>(ref, inputRef);

  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (disabled) return;
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const focusInputField = () => inputRef?.current?.focus();

  useEffect(() => {
    if (error) {
      setBorderColor(colors.redDark);
      return;
    }
    if (isFocused) {
      setBorderColor(colors.brandBluePrimary);
      return;
    }
    setBorderColor(colors.greyMidDark);
  }, [error, isFocused]);

  const showRightIcons = RightIconComponent || showCheckmark;

  return (
    <View
      style={[
        styles.container,
        { ...SIZE[size] },
        disabled && { opacity: 0.4 },
        containerStyle,
      ]}
    >
      {!!label && (
        <TouchableOpacity disabled={disabled} onPress={focusInputField}>
          <Text style={styles.label} type="subtextSemiBold">
            {label}
          </Text>
        </TouchableOpacity>
      )}

      <View style={[styles.inputWrapper, { borderColor }]}>
        {LeftIconComponent && LeftIconComponent}

        <RNTI
          key="baseInput"
          ref={mergedRef}
          textAlignVertical="center"
          style={[styles.input, useFullHeight && { height: MAX_HEIGHT }, style]}
          {...passInputProps}
          onFocus={_onFocus}
          onBlur={_onBlur}
          editable={!disabled && editable}
        />

        {showRightIcons && (
          <View style={styles.iconContainer}>
            {RightIconComponent && RightIconComponent}
            {showCheckmark && (
              <TouchableOpacity>
                <Image
                  style={styles.checkmark}
                  source={require("../../media/checkmark.png")}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
      {!!error && (
        <Text style={styles.error} type="subtextRegular" color={colors.redDark}>
          {error}
        </Text>
      )}
      {!error && helperText && (
        <Text type="subtextRegular" color={colors.greyDark}>
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
    minHeight: 40,
    maxHeight: MAX_HEIGHT,
    flex: 1,
    minWidth: 100,
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
    paddingHorizontal: Spacing.sp2,
  },
  label: {
    marginBottom: Spacing["sp1/2"],
  },
  error: { marginTop: Spacing["sp1/2"] },
  iconContainer: {
    flexDirection: "row",
  },
  checkmark: {
    marginLeft: Spacing.sp1,
    width: 16,
    height: 12,
  },
});

export default BaseInput;
