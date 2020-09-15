import React, { useContext } from "react";
import { FlatList, View, ViewStyle } from "react-native";
import Card, { CardProps } from "./Card";
import spacing from "../style/spacing";
import ThemeContext from "../style/ThemeContext";

type Directions = "horizontal" | "vertical";

interface CardItem extends Omit<CardProps, "size" | "onPress"> {}

interface CardListProps {
  data: CardItem[];
  direction: Directions;
  size: CardProps["size"];
  onItemPress: (item: CardItem) => void;
  containerStyle?: ViewStyle;
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
  const {
    spacing: { sp1 },
  } = useContext(ThemeContext);

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
        horizontal && { paddingBottom: sp1 },
        containerStyle,
      ]}
    />
  );
};

export default CardList;
