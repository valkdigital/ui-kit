import React, { useState } from "react";
import { StyleSheet, ScrollView, ViewStyle, Pressable } from "react-native";
import colors from "../../style/colors";
import spacing from "../../style/spacing";
import Text from "../Text";
enum SegmentTypes {
  default = "default",
  text = "text",
}
interface SegmentControlProps {
  type?: keyof typeof SegmentTypes;
  segments: string[];
  onPress: (idx: number) => void;
  selectedBackgroundColor?: string;
  backgroundColor?: string;
  activeIndicatorColor?: string;
  style?: ViewStyle;
}

const SegmentControl: React.FC<SegmentControlProps> = ({
  type = SegmentTypes.default,
  segments,
  onPress,
  backgroundColor = colors.grey2,
  selectedBackgroundColor = colors.white,
  style,
  activeIndicatorColor = "#D9AE5F",
}) => {
  const [index, setIndex] = useState(0);

  const onSegmentPressed = (idx: number) => {
    setIndex(idx);
    onPress(idx);
  };

  const styleBytype: { [key in SegmentTypes]: ViewStyle } = {
    [SegmentTypes.default]: {
      width: "100%",
      backgroundColor: backgroundColor,
      borderWidth: 2,
      borderColor: colors.grey2,
      borderRadius: 4,
    },
    [SegmentTypes.text]: {
      flexGrow: 1,
      justifyContent: "center",
    },
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
        const selected = idx === index;
        if (type === SegmentTypes.default)
          return (
            <DefaultSegment
              key={idx}
              label={segment}
              selected={selected}
              selectedBackgroundColor={selectedBackgroundColor}
              onPress={() => onSegmentPressed(idx)}
            />
          );
        return (
          <TextSegment
            key={idx}
            label={segment}
            selected={selected}
            onPress={() => onSegmentPressed(idx)}
            activeIndicatorColor={activeIndicatorColor}
          />
        );
      })}
    </ScrollView>
  );
};
interface SegmentPops {
  label: string;
  selected: boolean;
  selectedBackgroundColor?: string;
  activeIndicatorColor?: string;
  onPress: () => void;
}
const DefaultSegment: React.FC<SegmentPops> = ({
  label,
  selected,
  selectedBackgroundColor,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.defaultSegment,
        selected && { backgroundColor: selectedBackgroundColor },
      ]}
      onPress={onPress}
    >
      <Text type={selected ? "bodySemiBold" : "bodyRegular"}>{label}</Text>
    </Pressable>
  );
};

const TextSegment: React.FC<SegmentPops> = ({
  label,
  selected,
  onPress,
  activeIndicatorColor,
}) => {
  return (
    <Pressable
      style={[
        styles.textSegment,
        selected && {
          borderColor: activeIndicatorColor,
          borderBottomWidth: 2,
        },
      ]}
      onPress={onPress}
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
