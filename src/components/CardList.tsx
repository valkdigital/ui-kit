import React, { useContext } from "react";
import { FlatList, View, ViewStyle, StyleSheet } from "react-native";
import Card, { CardProps } from "./Card";
import spacing from "../style/spacing";
import ThemeContext from "../style/ThemeContext";

type Directions = "horizontal" | "vertical";

interface CardListProps {
  data: Omit<CardProps, "size" | "onPress">[];
  direction: Directions;
  size: CardProps["size"];
  onPress: CardProps["onPress"];
  style: ViewStyle;
}

const SEPARATOR_STYLE: { [key in Directions]: ViewStyle } = {
  horizontal: {
    marginLeft: -spacing.sp2,
  },
  vertical: {
    marginBottom: spacing.sp1,
  },
};

export default ({ data, direction, size, onPress, style }: CardListProps) => {
  const {
    spacing: { sp3 },
  } = useContext(ThemeContext);

  const horizontal = direction === "horizontal";

  const getSeparatorStyle = () => {
    return SEPARATOR_STYLE[direction];
  };

  return (
    <FlatList
      style={styles.overflow}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={horizontal}
      renderItem={({ item }) => (
        <Card {...item} size={size} onPress={onPress} />
      )}
      ItemSeparatorComponent={() => <View style={getSeparatorStyle()} />}
      contentContainerStyle={[
        styles.overflow,
        horizontal && { paddingRight: sp3 },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  overflow: {
    overflow: "visible",
  },
});
