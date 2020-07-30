import React, { useContext } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  ActivityIndicator,
} from "react-native";
import ThemeContext from "../style/ThemeContext";
import Text from "./Text";

type Sizes = "medium" | "large" | "full";

const CONTAINER_STYLE: { [key in Sizes]: ViewStyle } = {
  medium: {
    height: 50,
    paddingHorizontal: 18,
  },
  large: {
    width: "100%",
    height: 50,
  },
  full: {
    borderRadius: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
  },
};
interface TestProps {
  title: string;
  onPress: () => void;
  color?: string;
  titleColor?: string;
  type?: "skeleton" | "filled"; // -> backgroundColor, borderColor, textColor

  /**
   * Possible values for `sizes` are:
   *
   * - `'medium'`
   * - `'large'`
   * - `'full'`
   */
  size?: Sizes; // -> width, height, fontType
  loading?: boolean;
  disabled?: boolean;
  iconSource?: object | number | Function;
  iconStyle?: ImageStyle;
  style?: ViewStyle | ViewStyle[];
}

export const Button: React.FC<TestProps> = ({
  title,
  size = "large",
  type = "filled",
  titleColor,
  color,
  disabled,
  style,
  onPress,
  loading,
}) => {
  const {
    cta: { primary, secondary, primaryLabel },
  } = useContext(ThemeContext);

  const getFilledStyle = (): ViewStyle => {
    if (type !== "filled") return {};
    const backgroundColor = color ? color : primary;
    return {
      backgroundColor,
    };
  };

  const getBorderStyle = (): ViewStyle => {
    if (type !== "skeleton") return {};

    const backgroundColor = "transparent";
    const borderColor = color ? color : secondary;

    return {
      backgroundColor,
      borderColor,
      borderWidth: 2,
    };
  };

  const getTitleColor = () => {
    if (titleColor) return titleColor;
    if (color && type === "skeleton") return color;
    return type === "filled" ? primaryLabel : secondary;
  };

  const getContainerStyle = (): ViewStyle => {
    const borderRadius = 2;
    const opacity = disabled ? 0.6 : 1;

    return { borderRadius, opacity, ...CONTAINER_STYLE[size] };
  };

  const getIndicatorStyle = (): ViewStyle => {
    if (size === "medium") return {};
    return {
      position: "absolute",
      right: 16,
      marginLeft: 16,
    };
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        getContainerStyle(),
        getFilledStyle(),
        getBorderStyle(),
        style,
      ]}
    >
      <Label
        title={title}
        color={getTitleColor()}
        loading={loading}
        buttonSize={size}
      />
      {loading && (
        <ActivityIndicator
          color={getTitleColor()}
          size="small"
          style={getIndicatorStyle()}
        />
      )}
    </TouchableOpacity>
  );
};
export default Button;

const Label: React.FC<{
  title: string;
  color: string;
  loading?: boolean;
  buttonSize: Sizes;
}> = ({ title, color, loading, buttonSize }) => {
  // Medium button show only loading indicator, when loading.
  if (loading && buttonSize === "medium") return null;
  return (
    <Text type="h6" textAlign="center" color={color} style={styles.title}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E08F3B",
    minWidth: 100,
  },

  title: {
    fontWeight: "600",
    color: "white",
    lineHeight: 26,
    fontSize: 17,
  },
});
