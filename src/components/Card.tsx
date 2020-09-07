import React, { ReactChild } from "react";
import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  useWindowDimensions,
} from "react-native";

import Text from "./Text";
import Button from "./Button";
import spacing from "../style/spacing";
import shadow from "../style/shadow";
import LinearGradient from "react-native-linear-gradient";
import Spacing from "../style/spacing";

type Sizes = "large" | "medium" | "small" | "tiny" | "single";

const IMAGE_STYLE: { [key in Sizes]: ImageStyle } = {
  large: {
    width: "100%",
    height: 160,
  },
  medium: {
    width: "100%",
    height: 120,
  },
  small: {
    width: 90,
    height: 90,
  },
  tiny: {
    width: 80,
    height: 80,
  },
  single: {
    width: "100%",
    height: 160,
  },
};

const CONTAINER_STYLE: { [key in Sizes]: ViewStyle } = {
  large: {
    flexDirection: "column",
  },
  medium: {
    flexDirection: "column",
  },
  small: {
    flexDirection: "row",
  },
  tiny: {
    flexDirection: "row",
  },
  single: {},
};

export interface CardProps {
  image: ImageSourcePropType;
  imageHeader?: string;
  imageOverlay?: ReactChild;
  header?: string;
  subHeader?: string;
  supportiveText?: string;
  assets?: ReactChild;
  buttonText?: string;
  onPress: () => void;
  size?: Sizes;
  wrapperStyle?: ViewStyle;
}
const Card: React.FC<CardProps> = ({
  image,
  imageHeader,
  imageOverlay,
  header,
  subHeader,
  supportiveText,
  assets,
  buttonText,
  onPress,
  size = "large",
  wrapperStyle,
}) => {
  const showBody = size !== "single";
  const showButton = !!buttonText && size === "large";
  const showElementsOnTopOfImage = !["small", "tiny"].includes(size);

  // Default size is full width minus the default 24 spacing each side ( 2 x Spacing.sp4).
  const width = useWindowDimensions().width - Spacing.sp6;

  return (
    <TouchableOpacity
      style={[styles.card, { width }, wrapperStyle]}
      onPress={onPress}
      disabled={showButton}
    >
      <View style={[styles.container, CONTAINER_STYLE[size]]}>
        <View>
          <Image source={image} style={[styles.image, IMAGE_STYLE[size]]} />
          {showElementsOnTopOfImage && (
            <>
              <View style={styles.imageOverlay}>
                {imageOverlay && imageOverlay}
              </View>
              <View style={[styles.imageContainer, IMAGE_STYLE[size]]}>
                {imageHeader && (
                  <Text type="h4" color="#ffffff" style={styles.imageHeader}>
                    {imageHeader}
                  </Text>
                )}
              </View>
              <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.4)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradient}
              />
            </>
          )}
        </View>

        {showBody && (
          <View style={styles.bodyContainer}>
            {header && <Text type="h5">{header}</Text>}
            {subHeader && (
              <Text type="subtextRegular" style={styles.subHeader}>
                {subHeader}
              </Text>
            )}
            {supportiveText && (
              <Text type="bodyRegular" style={styles.supportive}>
                {supportiveText}
              </Text>
            )}
            {assets && assets}
          </View>
        )}
        {showButton && (
          <Button
            title={buttonText!}
            onPress={onPress}
            size="large"
            style={styles.button}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    ...shadow({ x: 0, y: 2, opacity: 0.13, blurRadius: 8 }),
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: spacing["sp1/2"],
    overflow: "hidden",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: "flex-end",
    padding: spacing.sp2,
    zIndex: 10,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  imageHeader: {
    zIndex: 10,
  },
  image: {
    resizeMode: "cover",
  },
  bodyContainer: {
    padding: spacing.sp2,
    minHeight: spacing.sp6,
    backgroundColor: "white",
    overflow: "hidden",
  },
  subHeader: {
    marginTop: 4,
  },
  supportive: {
    marginTop: spacing["sp1/2"],
  },
  button: {
    marginTop: spacing.sp3,
    borderRadius: 0,
  },
  gradient: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
  },
});
