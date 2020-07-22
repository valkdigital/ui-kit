import React, { ReactChild } from "react";
import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  Dimensions,
} from "react-native";
import Text from "./Text";
import Button from "./Button";
import spacing from "../style/spacing";
import shadow from "../style/shadow";
import { LinearGradient } from "expo-linear-gradient";

type Sizes = "large" | "medium" | "small" | "tiny";

const IMAGE_STYLE: { [key in Sizes]: ViewStyle & ImageStyle } = {
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
};

export interface CardProps {
  id: string;
  image: ImageSourcePropType;
  imageHeader?: string;
  imageOverlay?: ReactChild;
  header?: string;
  subHeader?: string;
  supportiveText?: string;
  assets?: ReactChild;
  buttonText?: string;
  onPress: (id?: string) => void;
  size: Sizes;
}
const Card: React.FC<CardProps> = ({
  id,
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
}) => {
  const getImageStyle = (): ViewStyle & ImageStyle => {
    return IMAGE_STYLE[size];
  };
  const getContainerStyle = (): ViewStyle => {
    return CONTAINER_STYLE[size];
  };

  return (
    <TouchableOpacity
      style={[styles.container, getContainerStyle()]}
      onPress={() => onPress(id)}
      disabled={!!buttonText}
    >
      <View>
        <Image source={image} style={[styles.image, getImageStyle()]} />
        {size !== "small" && size !== "tiny" && (
          <>
            <View style={styles.imageOverlay}>
              {imageOverlay && imageOverlay}
            </View>
            <View style={[styles.imageContainer, getImageStyle()]}>
              {imageHeader && (
                <Text type="h4" color="#ffffff" style={styles.imageHeader}>
                  {imageHeader}
                </Text>
              )}
            </View>
            <LinearGradient
              colors={["rgba(0,0,0,0.4)", "transparent"]}
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: (getImageStyle().height as number) * 0.5,
              }}
              start={[0, 1]}
              end={[0, 0]}
            />
          </>
        )}
      </View>

      <View style={[styles.bodyContainer, { height: getImageStyle().height }]}>
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
        {assets && <View style={styles.space24}>{assets}</View>}
      </View>
      {!!buttonText && (
        <Button
          title={buttonText}
          onPress={() => onPress(id)}
          size="large"
          style={styles.space24}
        />
      )}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: spacing.sp3,
    width: Dimensions.get("window").width - spacing.sp6,
    ...shadow({ x: 0, y: 2, opacity: 0.13, blurRadius: 8 }),
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  imageHeader: {
    zIndex: 10,
  },
  image: {
    resizeMode: "cover",
  },
  bodyContainer: {
    flex: 1,
    padding: spacing.sp2,
    minHeight: spacing.sp8,
    backgroundColor: "white",
    overflow: "hidden",
  },
  subHeader: {
    marginTop: 4,
  },
  supportive: {
    marginTop: spacing["sp1/2"],
  },
  space24: {
    marginTop: spacing.sp3,
  },
});
