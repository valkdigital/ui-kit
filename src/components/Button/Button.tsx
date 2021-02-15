import React, { useContext } from "react";
import {
  StyleSheet,
  Pressable,
  ViewStyle,
  View,
  ActivityIndicator,
  ImageProps,
  Image,
  ImageStyle,
  Platform,
  StyleProp,
  PressableProps,
  LayoutChangeEvent,
} from "react-native";
import shadow from "../../style/shadow";
import colors from "../../style/colors";
import Text from "../Text";
import ThemeContext from "../../style/ThemeContext";
import Spacing from "../../style/spacing";
import { isIphoneX } from "../helpers";
import { omit } from "lodash";

enum ButtonTypes {
  default = "default",
  ghost = "ghost",
  progressbar = "progressbar",
}
enum ButtonSizes {
  small = "small",
  medium = "medium",
  full = "full",
}

interface ButtonProps extends Omit<PressableProps, "children"> {
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
  image?: ImageProps["source"];
  imageStyle?: StyleProp<ImageStyle>;
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
  [ButtonSizes.full]: {
    marginHorizontal: Spacing.sp2,
  },
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    color = colors.orangePrimary,
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
    image,
    imageStyle,
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
    "image",
    "imageStyle",
    "onLayout"
  );

  const { onBackground } = useContext(ThemeContext);

  const buttonLabelColor = type === ButtonTypes.ghost ? color : labelColor;

  const defaultStyle: ViewStyle = {
    backgroundColor: color,
    borderColor: color,
    alignItems: "center",
    justifyContent:
      image && type === ButtonTypes.ghost && !loading ? "flex-start" : "center",
    flexDirection: "row",
    borderRadius: 4,
    marginHorizontal: Spacing.sp2,
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
          <ActivityIndicator size="small" color={buttonLabelColor} />
        ) : (
          <>
            {image && (
              <Image
                style={[styles.img, { tintColor: color }, imageStyle]}
                source={image}
              />
            )}
            <Text type="h6" color={buttonLabelColor}>
              {label}
            </Text>
          </>
        )}
      </Pressable>
    </View>
  );
};

const Progressbar: React.FC<{ currentProgress: string | number }> = ({
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
    ...shadow({
      x: 0,
      y: Platform.OS === "android" ? 2 : -2,
      opacity: 0.4,
      blurRadius: 16,
    }),
    paddingTop: Spacing.sp2,
    paddingBottom: isIphoneX ? Spacing.sp2 + Spacing["sp1/2"] : Spacing.sp2,
  },

  img: {
    marginLeft: Spacing.sp2,
    marginRight: Spacing.sp1,
    width: 24,
    height: 24,
  },

  progressbarContainer: {
    alignSelf: "stretch",
    height: 4,
    backgroundColor: colors.grey0,
    marginHorizontal: Spacing.sp2,
  },

  progress: {
    height: 4,
  },
});

export default Button;
