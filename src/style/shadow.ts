import { Platform, ViewStyle } from "react-native";

const shadow = ({
  x,
  y,
  opacity,
  blurRadius,
}: {
  x: number;
  y: number;
  opacity: number;
  blurRadius: number;
}): ViewStyle => ({
  ...Platform.select({
    default: {
      shadowColor: "#000",
      shadowOffset: {
        width: x,
        height: y,
      },
      shadowOpacity: opacity,
      shadowRadius: blurRadius,
    },
    android: {
      elevation: y * 2,
    },
  }),
});

export default shadow;
