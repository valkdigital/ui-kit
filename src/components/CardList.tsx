import React from "react";
import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import Card, { CardProps } from "./Card";
import spacing from "../style/spacing";

type Directions = "horizontal" | "vertical";

interface CardItem extends Omit<CardProps, "size" | "onPress"> {}

interface CardListProps {
  data: CardItem[];
  direction: Directions;
  size: CardProps["size"];
  onItemPress: (item: CardItem) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const SEPARATOR_STYLE: { [key in Directions]: ViewStyle } = {
  horizontal: {
    width: spacing.sp1,
  },
  vertical: {
    height: spacing.sp1,
  },
};

const CardList: React.FC<CardListProps> = ({
  data,
  direction,
  size,
  onItemPress,
  containerStyle,
}) => {
  const horizontal = direction === "horizontal";

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      horizontal={horizontal}
      renderItem={({ item }) => (
        <Card {...item} size={size} onPress={() => onItemPress(item)} />
      )}
      ItemSeparatorComponent={() => <View style={SEPARATOR_STYLE[direction]} />}
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0 }}
      contentContainerStyle={[
        horizontal && { paddingBottom: spacing.sp1 },
        containerStyle,
      ]}
    />
  );
};

export default CardList;
