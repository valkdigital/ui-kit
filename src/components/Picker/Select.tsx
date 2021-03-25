import React, { useContext, useLayoutEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Image,
  StyleProp,
  ImageStyle,
  Platform,
} from "react-native";
import colors from "../../style/colors";
import Spacing from "../../style/spacing";
import type { Option, SelectSizes } from ".";
import Text from "../Text";
import ThemeContext from "../../style/ThemeContext";

export interface MeasuredLayout {
  width: number;
  height: number;
  px: number;
  py: number;
}

const SELECT_STYLE: { [key in SelectSizes]: ViewStyle } = {
  small: { width: 160 },
  medium: { width: 287 },
  large: {},
};

interface SelectProps {
  label?: string;
  placeholder?: string;
  selectContainerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: string;
  size: SelectSizes;
  showOptions: () => void;
  isFocused?: boolean;
  selectedOption?: Option;
  onLayout?: (event: MeasuredLayout) => void;
  DropdownComponent?: JSX.Element;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  selectContainerStyle,
  disabled,
  error,
  size,
  showOptions,
  isFocused,
  selectedOption,
  onLayout,
  DropdownComponent,
}) => {
  const {
    border,
    error: { midDark },
    info,
    typography,
  } = useContext(ThemeContext);
  const viewRef = useRef<View>(null);

  const borderColor = !!error ? midDark : isFocused ? info.midDark : border;

  useLayoutEffect(() => {
    if (onLayout && viewRef.current)
      viewRef.current.measure((_x, _y, width, height, px, py) => {
        onLayout({ width, height, px, py });
      });
  }, []);

  return (
    <View
      style={[
        styles.container,
        selectContainerStyle,
        disabled && { opacity: 0.4 },
        // @ts-ignore
        isFocused &&
          DropdownComponent &&
          Platform.OS === "web" && { zIndex: "unset" },
      ]}
    >
      <Text type="subtextSemiBold" style={styles.label}>
        {label}
      </Text>
      <View
        ref={viewRef}
        style={[styles.selectContainer, { borderColor }, SELECT_STYLE[size]]}
      >
        <TouchableOpacity
          onPress={showOptions}
          style={styles.select}
          disabled={disabled}
        >
          <View style={styles.row}>
            {selectedOption?.image && (
              <Image
                source={selectedOption?.image}
                style={styles.optionImage as StyleProp<ImageStyle>}
                resizeMode="contain"
              />
            )}
            <Text
              type="bodyRegular"
              numberOfLines={1}
              style={
                selectedOption === undefined
                  ? [styles.placeholder, { color: typography.placeholder }]
                  : undefined
              }
            >
              {selectedOption?.label ?? placeholder}
            </Text>
          </View>
          <Image
            source={
              isFocused
                ? require("../../media/arrow_up.png")
                : require("../../media/arrow_down.png")
            }
            style={[
              styles.chevron as StyleProp<ImageStyle>,
              { tintColor: typography.color },
            ]}
          />
        </TouchableOpacity>
      </View>
      {!!error && (
        <Text style={styles.error} type="subtextRegular" color={colors.redDark}>
          {error}
        </Text>
      )}
      {DropdownComponent && isFocused && DropdownComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  label: {
    marginBottom: Spacing["sp1/2"],
  },
  selectContainer: {
    borderWidth: 1,
    borderRadius: Spacing["sp1/2"],
  },
  select: {
    height: 40,
    paddingHorizontal: Spacing.sp2,
    paddingVertical: Spacing.sp1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  optionImage: {
    width: Spacing.sp3,
    height: Spacing.sp3,
    alignSelf: "center",
    marginRight: Spacing.sp1,
  },
  chevron: {
    marginLeft: Spacing.sp2,
    width: 14,
    height: 8,
  },
  placeholder: {
    flex: 1,
  },
  error: { marginTop: Spacing["sp1/2"] },
});

export default Select;
