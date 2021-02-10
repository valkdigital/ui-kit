import React, { useContext } from "react";
import { StyleSheet, ScrollView, ViewStyle, Pressable } from "react-native";
import ThemeContext from "../../style/ThemeContext";
import spacing from "../../style/spacing";
import Text from "../Text";

enum SegmentTypes {
  default = "default",
  text = "text",
}
interface SegmentControlProps {
  type?: keyof typeof SegmentTypes;
  value: string;
  segments: string[];
  onPress: (value: string) => void;
  backgroundColor?: string;
  activeColor?: string;
  style?: ViewStyle;
}

const SegmentControl: React.FC<SegmentControlProps> = ({
  type = SegmentTypes.default,
  value,
  segments,
  onPress,
  backgroundColor,
  style,
  activeColor,
}) => {
  const { background, grey } = useContext(ThemeContext);

  const styleBytype: { [key in SegmentTypes]: ViewStyle } = {
    [SegmentTypes.default]: {
      width: "100%",
      backgroundColor: backgroundColor ?? grey[2],
      borderWidth: 2,
      borderColor: grey[2],
      borderRadius: 4,
    },
    [SegmentTypes.text]: {
      flexGrow: 1,
      justifyContent: "center",
    },
  };

  const ACTIVE_COLOR: { [key in SegmentTypes]: string } = {
    [SegmentTypes.default]: background,
    [SegmentTypes.text]: "#D9AE5F",
  };

  return (
    <ScrollView
      horizontal={true}
      style={{
        flexGrow: 0,
      }}
      contentContainerStyle={[styles.scrollContainer, styleBytype[type], style]}
      scrollEnabled={type !== SegmentTypes.default}
      showsHorizontalScrollIndicator={false}
    >
      {segments.map((segment, idx) => {
        return (
          <Segment
            key={idx}
            label={segment}
            selected={value === segment}
            activeColor={activeColor ?? ACTIVE_COLOR[type]}
            onPress={onPress}
            type={type}
          />
        );
      })}
    </ScrollView>
  );
};

interface SegmentProps {
  label: string;
  selected: boolean;
  activeColor: string;
  onPress: (value: string) => void;
  type: keyof typeof SegmentTypes;
}
const Segment: React.FC<SegmentProps> = ({
  label,
  selected,
  activeColor,
  onPress,
  type,
}) => {
  const onSegmentPress = () => {
    onPress(label);
  };

  return (
    <Pressable
      style={
        type === SegmentTypes.default
          ? [
              styles.defaultSegment,
              selected && { backgroundColor: activeColor },
            ]
          : [
              styles.textSegment,
              selected && {
                borderColor: activeColor,
                borderBottomWidth: 2,
              },
            ]
      }
      onPress={onSegmentPress}
    >
      <Text type={selected ? "bodySemiBold" : "bodyRegular"}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
  },
  defaultSegment: {
    flex: 1,
    borderRadius: 4,
    alignItems: "center",
    paddingVertical: spacing.sp1,
  },
  textSegment: {
    paddingHorizontal: 6,
  },
});

export default SegmentControl;
