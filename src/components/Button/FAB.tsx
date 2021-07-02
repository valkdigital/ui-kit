import Text from "../Text";
import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import Icon, { IconNames } from "../Icon";
import spacing from "../../style/spacing";
import shadow from "../../style/shadow";
import ThemeContext from "../../style/ThemeContext";
import { omit } from "lodash";

interface FABProps extends Omit<PressableProps, "style"> {
  label: string;
  backgroundColor: string;
  color: string;
  icon: IconNames;
  style?: StyleProp<ViewStyle>;
}

const Fab: React.FC<FABProps> = (props) => {
  const { typography } = useContext(ThemeContext);

  const passFabProps = omit(
    props,
    "label",
    "backgroundColor",
    "color",
    "icon",
    "style"
  );

  const { label, backgroundColor, color, icon, style } = props;

  return (
    <Pressable
      {...passFabProps}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor },
        style,
        pressed && { opacity: 0.4 },
      ]}
    >
      <Text type="h6" color={typography.inverted} style={styles.label}>
        {label}
      </Text>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Icon name={icon} color={typography.inverted} style={styles.icon} />
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
    textAlignVertical: "bottom",
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: spacing.sp3,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
});

export default Fab;
