import React, { useContext } from "react";
import {
  StyleSheet,
  Pressable,
  ViewStyle,
  View,
  ActivityIndicator,
} from "react-native";
import shadow from "../../style/shadow";
import colors from "../../style/colors";
import Text from "../Text";
import ThemeContext from "../../style/ThemeContext";
import Spacing from "../../style/spacing";
import { isIphoneX } from "../helpers";

enum ButtonTypes {
  default = "default",
  ghost = "ghost",
  progressbar = "progressbar",
}
enum ButtonSizes {
  small = "small",
  medium = "medium",
  mediumCard = "medium-card",
  full = "full",
}

interface BaseButtonProps {
  onPress: () => void;
  label: string;
  labelColor?: string;
  color?: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  buttonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  helperText?: string;
  loading?: boolean;
  disabled?: boolean;
  currentProgress?: string;
}

const styleByType: { [key in ButtonTypes]: ViewStyle } = {
  [ButtonTypes.default]: {},
  [ButtonTypes.ghost]: {
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  [ButtonTypes.progressbar]: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: "auto",
    alignSelf: "stretch",
  },
};
const styleBySize: { [key in ButtonSizes]: ViewStyle } = {
  [ButtonSizes.small]: {
    width: 156,
  },
  [ButtonSizes.medium]: {
    alignSelf: "stretch",
  },
  [ButtonSizes.mediumCard]: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    alignSelf: "stretch",
  },
  [ButtonSizes.full]: {},
};

const BaseButton: React.FC<BaseButtonProps> = ({
  color = colors.orangePrimary,
  label,
  labelColor = "white",
  size = ButtonSizes.medium,
  type = ButtonTypes.default,
  onPress,
  buttonStyle,
  containerStyle,
  helperText,
  disabled,
  loading,
  currentProgress,
}) => {
  const { onBackground } = useContext(ThemeContext);

  const buttonLabelColor = type === ButtonTypes.ghost ? color : labelColor;
  const onPressButton = () => {
    if (!disabled) onPress();
  };

  const defaultStyle: ViewStyle = {
    backgroundColor: color,
    borderColor: color,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    height: 48,
    ...styleBySize[size],
    ...styleByType[type],
  };

  const showFullWidthContainer =
    size === ButtonSizes.full || type === ButtonTypes.progressbar;

  return (
    <Pressable
      onPress={onPressButton}
      style={({ pressed }) => [
        showFullWidthContainer && styles.fullWidthContainer,
        size === ButtonSizes.full && { backgroundColor: onBackground },
        containerStyle,
        (pressed || disabled) && { opacity: 0.4 },
      ]}
    >
      {helperText && (
        <Text color={colors.grey3} style={styles.helperText}>
          {helperText}
        </Text>
      )}
      {currentProgress && type === ButtonTypes.progressbar && (
        <Progressbar currentProgress={currentProgress} />
      )}
      <View style={[defaultStyle, buttonStyle]}>
        {loading ? (
          <ActivityIndicator size="large" color={buttonLabelColor} />
        ) : (
          <Text type="h6" color={buttonLabelColor}>
            {label}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const Progressbar: React.FC<{ currentProgress: string }> = ({
  currentProgress,
}) => {
  const {
    info: { primary },
  } = useContext(ThemeContext);

  return (
    <View style={[styles.progressbarContainer]}>
      <View
        style={[
          styles.progress,
          { backgroundColor: primary, width: `${currentProgress}%` },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidthContainer: {
    ...shadow({ x: 0, y: -2, opacity: 0.4, blurRadius: 16 }),
    paddingTop: Spacing.sp2,
    paddingHorizontal: Spacing.sp2,
    paddingBottom: isIphoneX ? Spacing.sp2 + Spacing["sp1/2"] : Spacing.sp2,
  },
  helperText: {
    marginBottom: Spacing["sp1/2"],
  },
  progressbarContainer: {
    alignSelf: "stretch",
    height: 4,
    backgroundColor: colors.grey0,
  },
  progress: {
    height: 4,
  },
});

export default BaseButton;
