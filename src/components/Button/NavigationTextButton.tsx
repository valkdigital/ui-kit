import React, { useContext } from "react";
import { StyleSheet, Pressable, ViewStyle } from "react-native";
import spacing from "../../style/spacing";
import ThemeContext from "../../style/ThemeContext";
import Text from "../Text";
import Icon from "../Icon";

interface NavigationTextButtonProps {
  label?: string;
  onPress: () => void;
  style?: ViewStyle;
  customLabel?: React.ReactNode;
  showTopBorder?: boolean;
}

const NavigationTextButton: React.FC<NavigationTextButtonProps> = ({
  label,
  onPress,
  style,
  customLabel,
  showTopBorder,
}) => {
  const { border } = useContext(ThemeContext);
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { borderColor: border },
        showTopBorder && { borderTopWidth: 1 },
        style,

        pressed && { opacity: 0.4 },
      ]}
      onPress={onPress}
    >
      {customLabel ? customLabel : <Text type="bodySemiBold">{label}</Text>}
      <Icon name="chevron-right" style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    padding: spacing.sp2,
  },
  childrenContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default NavigationTextButton;
