import React, { useRef, useEffect, useState, useContext } from "react";
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
import useMergedRef from "../../hooks/useMergedRef";
import Typography, { MaxFontSizeMultiplier } from "../../style/typography";
import ThemeContext from "../../style/ThemeContext";

type Sizes = "small" | "medium" | "large";

export interface BaseInputProps extends TIP {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  size?: Sizes;
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
  textAlign?: "center" | "left";
  labelStyle?: StyleProp<ViewStyle>;
  LeftIconComponent?: JSX.Element | null | boolean;
  RightIconComponent?: JSX.Element | null | boolean;
}
const MAX_HEIGHT = 160;
const SIZE: { [key in Sizes]: ViewStyle } = {
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
    textAlign = "left",
    labelStyle,
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
  const {
    error: { primary },
    info,
    border,
    typography,
  } = useContext(ThemeContext);
  const [borderColor, setBorderColor] = useState(border);
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
      setBorderColor(primary);
      return;
    }
    if (isFocused) {
      setBorderColor(info.midDark);
      return;
    }
    setBorderColor(border);
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
          <Text
            style={[styles.label, labelStyle]}
            textAlign={textAlign}
            type="subtextSemiBold"
          >
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
          style={[
            styles.input,
            { color: typography.color, textAlign },
            useFullHeight && {
              height: MAX_HEIGHT,
              textAlignVertical: "top",
              paddingTop: Spacing.sp1,
            },
            style,
          ]}
          {...passInputProps}
          onFocus={_onFocus}
          onBlur={_onBlur}
          placeholderTextColor={typography.placeholder}
          editable={!disabled && editable}
          maxFontSizeMultiplier={MaxFontSizeMultiplier.bodyRegular}
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
        <Text
          textAlign={textAlign}
          style={styles.error}
          type="subtextRegular"
          color={primary}
        >
          {error}
        </Text>
      )}
      {!error && helperText && (
        <Text
          textAlign={textAlign}
          type="subtextRegular"
          color={typography.placeholder}
          style={styles.error}
        >
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
    borderWidth: 0,
    ...Typography.bodyRegular,
    lineHeight: undefined,
    ...Platform.select({ web: { outlineWidth: 0 } }),
  },
  inputWrapper: {
    borderRadius: Spacing["sp1/2"],
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
    alignItems: "center",
  },
  checkmark: {
    marginLeft: Spacing.sp1,
    width: 16,
    height: 12,
  },
});

export default BaseInput;
export type { RNTI as TextInputType };
