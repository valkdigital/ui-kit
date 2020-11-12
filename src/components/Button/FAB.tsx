import { Text } from "@valkdigital/ui-kit";
import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  ImageProps,
  ViewStyle,
  ImageStyle,
} from "react-native";
import spacing from "../../style/spacing";
import shadow from "../../style/shadow";

interface FABProps {
  label: string;
  backgroundColor: string;
  color: string;
  source: ImageProps["source"];
  imgStyle?: ImageStyle;
  style?: ViewStyle;
}

const FAB: React.FC<FABProps> = ({
  label,
  color,
  backgroundColor,
  source,
  style,
  imgStyle,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor },
        style,
        pressed && { opacity: 0.4 },
      ]}
    >
      <Text type="h5" color="white" style={styles.label}>
        {label}
      </Text>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Image source={source} style={[styles.img, imgStyle]} />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    flexDirection: "row",
    ...shadow({ x: 0, y: 4, blurRadius: 14, opacity: 0.24 }),
  },
  label: {
    marginHorizontal: spacing.sp2,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: spacing.sp3,
    justifyContent: "center",
  },
  img: {
    width: 24,
    height: 24,
    alignSelf: "center",
  },
});

export default FAB;
