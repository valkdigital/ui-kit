import React, { ReactChild, useContext } from "react";
import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import Text from "./Text";
import Button from "./Button/Button";
import Spacing from "../style/spacing";
import shadow from "../style/shadow";
import LinearGradient from "../alias/LinearGradient";
import type { TypographyLiterals } from "../style/typography";
import ThemeContext from "../style/ThemeContext";

type Sizes = "large" | "medium" | "small" | "tiny" | "single";

const BODY_CONTAINER_STYLE: { [key in Sizes]: ViewStyle | undefined } = {
  large: undefined,
  medium: undefined,
  small: { flex: 1 },
  tiny: { flex: 1 },
  single: undefined,
};

const BODY_HEADER_TYPE: { [key in Sizes]: TypographyLiterals | undefined } = {
  large: "h5",
  medium: "h5",
  small: "bodySemiBold",
  tiny: "bodySemiBold",
  single: undefined,
};

const SUBHEADER_STYLE: { [key in Sizes]: TextStyle } = {
  large: { marginTop: Spacing["sp1/2"] },
  medium: { marginTop: Spacing["sp1/2"] },
  small: {},
  tiny: {},
  single: {},
};

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
  containerStyle?: StyleProp<ViewStyle>;
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
  containerStyle,
}) => {
  const { onBackground } = useContext(ThemeContext);

  const showBody = size !== "single";
  const showButton = !!buttonText && size === "large";
  const showElementsOnTopOfImage = !["small", "tiny"].includes(size);
  const imageHeaderTextType =
    imageHeader && imageHeader.length <= 24 ? "h4" : "h5";

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        disabled={showButton}
      >
        <View
          style={[
            styles.container,
            { backgroundColor: onBackground },
            CONTAINER_STYLE[size],
          ]}
        >
          <View>
            <Image source={image} style={[styles.image, IMAGE_STYLE[size]]} />
            {showElementsOnTopOfImage && (
              <>
                <View style={styles.imageOverlay}>
                  {imageOverlay && imageOverlay}
                </View>
                <View style={[styles.imageContainer, IMAGE_STYLE[size]]}>
                  {imageHeader && (
                    <Text
                      type={imageHeaderTextType}
                      color="#ffffff"
                      style={styles.imageHeader}
                      numberOfLines={2}
                    >
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
            <View
              style={[
                styles.bodyContainer,
                BODY_CONTAINER_STYLE[size],
                { backgroundColor: onBackground },
              ]}
            >
              {!!header && (
                <Text type={BODY_HEADER_TYPE[size]} numberOfLines={1}>
                  {header}
                </Text>
              )}
              {!!subHeader && (
                <Text
                  type="subtextRegular"
                  style={[styles.subHeader, SUBHEADER_STYLE[size]]}
                  numberOfLines={1}
                >
                  {subHeader}
                </Text>
              )}
              {!!supportiveText && (
                <Text type="bodyRegular" style={styles.supportive}>
                  {supportiveText}
                </Text>
              )}
              {assets && assets}
            </View>
          )}
          {showButton && (
            <Button
              label={buttonText ?? ""}
              onPress={onPress}
              size="full"
              containerStyle={styles.button}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: Spacing["sp1/2"],
    ...shadow({ x: 0, y: 2, opacity: 0.13, blurRadius: 8 }),
  },
  container: {
    borderRadius: Spacing["sp1/2"],
    overflow: "hidden",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: "flex-end",
    padding: Spacing.sp2,
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
    padding: Spacing.sp2,
    paddingBottom: Spacing.sp3,
    minHeight: Spacing.sp6,
    overflow: "hidden",
    borderBottomLeftRadius: Spacing["sp1/2"],
  },
  subHeader: {
    opacity: 0.4,
  },
  supportive: {
    marginTop: Spacing["sp1/2"],
  },
  button: {
    marginTop: Spacing.sp3,
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
