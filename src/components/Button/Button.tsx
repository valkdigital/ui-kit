import React, { useContext } from "react";
import {
  StyleSheet,
  Pressable,
  ViewStyle,
  View,
  ActivityIndicator,
  Platform,
  StyleProp,
  PressableProps,
  LayoutChangeEvent,
} from "react-native";
import shadow from "../../style/shadow";
import Text from "../Text";
import Icon, { IconNames } from "../Icon";
import ThemeContext from "../../style/ThemeContext";
import Spacing from "../../style/spacing";
import { isIphoneX } from "../helpers";
import { omit } from "lodash";
import IconSet from "../../style/iconSet";

enum ButtonTypes {
  default = "default",
  ghost = "ghost",
  progressbar = "progressbar",
}

enum ButtonSizes {
  small = "small",
  medium = "medium",
  auto = "auto",
  full = "full",
}

export interface ButtonProps extends Omit<PressableProps, "children"> {
  label: string;
  labelColor?: string;
  color?: string;
  type?: keyof typeof ButtonTypes;
  size?: keyof typeof ButtonSizes;
  buttonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
  currentProgress?: string | number;
  icon?: IconNames;
  iconOpposite?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
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
    marginHorizontal: Spacing.sp2,
  },
};
const styleBySize: { [key in ButtonSizes]: ViewStyle } = {
  [ButtonSizes.small]: {
    width: 164,
  },
  [ButtonSizes.medium]: {
    alignSelf: "stretch",
  },
  [ButtonSizes.auto]: {
    alignSelf: "flex-start",
  },
  [ButtonSizes.full]: {
    marginHorizontal: Spacing.sp2,
  },
};

const Button: React.FC<ButtonProps> = (props) => {
  const { onBackground, cta } = useContext(ThemeContext);

  const {
    color = cta.primary,
    label,
    labelColor = "white",
    size = ButtonSizes.medium,
    type = ButtonTypes.default,
    buttonStyle,
    containerStyle,
    children,
    disabled,
    loading,
    currentProgress,
    icon,
    iconOpposite = false,
    onLayout,
  } = props;
  // remove custom props or overrided props
  const passButtonProps = omit(
    props,
    "color",
    "label",
    "labelColor",
    "size",
    "type",
    "buttonStyle",
    "containerStyle",
    "children",
    "disabled",
    "loading",
    "currentProgress",
    "icon",
    "iconOpposite",
    "onLayout"
  );

  const buttonLabelColor = type === ButtonTypes.ghost ? color : labelColor;

  const defaultStyle: ViewStyle = {
    backgroundColor: color,
    borderColor: color,
    alignItems: "center",
    justifyContent: icon ? "space-between" : "center",
    flexDirection: "row",
    borderRadius: 4,
    paddingHorizontal: Spacing.sp1,
    height: 48,
    ...styleBySize[size],
    ...styleByType[type],
  };

  const showFullWidthContainer =
    size === ButtonSizes.full || type === ButtonTypes.progressbar;

  return (
    <View
      style={[
        showFullWidthContainer && styles.fullWidthContainer,
        showFullWidthContainer && { backgroundColor: onBackground },
        containerStyle,
      ]}
      onLayout={onLayout}
    >
      {children}
      {currentProgress && type === ButtonTypes.progressbar && (
        <Progressbar currentProgress={currentProgress} />
      )}
      <Pressable
        style={({ pressed }) => [
          defaultStyle,
          buttonStyle,
          (pressed || disabled) && { opacity: 0.4 },
        ]}
        disabled={disabled}
        {...passButtonProps}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={buttonLabelColor}
            style={styles.label}
          />
        ) : (
          <IconWrapper
            icon={icon}
            iconOpposite={iconOpposite}
            buttonLabelColor={buttonLabelColor}
          >
            <Text
              type="h6"
              textAlign="center"
              color={buttonLabelColor}
              numberOfLines={1}
              style={styles.label}
            >
              {label}
            </Text>
          </IconWrapper>
        )}
      </Pressable>
    </View>
  );
};

const Progressbar: React.FC<Pick<ButtonProps, "currentProgress">> = ({
  currentProgress,
}) => {
  const {
    info: { primary },
    grey,
  } = useContext(ThemeContext);

  return (
    <View style={[styles.progressbarContainer, { backgroundColor: grey[0] }]}>
      <View
        style={[
          styles.progress,
          { backgroundColor: primary, width: `${currentProgress}%` },
        ]}
      />
    </View>
  );
};

interface IconWrapperProps extends Pick<ButtonProps, "icon" | "iconOpposite"> {
  buttonLabelColor: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  icon,
  iconOpposite,
  buttonLabelColor,
}) => {
  if (icon) {
    return (
      <>
        {iconOpposite ? (
          <Icon name={icon} solid={true} color={buttonLabelColor} />
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
        {children}
        {!iconOpposite ? (
          <Icon name={icon} solid={true} color={buttonLabelColor} />
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </>
    );
  }
  return <>{children}</>;
};

const styles = StyleSheet.create({
  fullWidthContainer: {
    ...shadow({
      x: 0,
      y: Platform.OS === "android" ? 2 : -2,
      opacity: 0.4,
      blurRadius: 16,
    }),
    paddingTop: Spacing.sp2,
    paddingBottom: isIphoneX ? Spacing.sp2 + Spacing["sp1/2"] : Spacing.sp2,
  },

  iconPlaceholder: {
    width: IconSet.sizes.medium,
  },

  label: {
    paddingHorizontal: Spacing.sp1,
  },

  progressbarContainer: {
    alignSelf: "stretch",
    height: 4,
    marginHorizontal: Spacing.sp2,
  },

  progress: {
    height: 4,
  },
});

export default Button;
