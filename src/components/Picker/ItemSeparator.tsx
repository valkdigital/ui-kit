import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Spacing from "../../style/spacing";
import ThemeContext from "../../style/ThemeContext";

interface ItemSeparatorProps {
  needsSpaceForAlphabet?: boolean;
}

const ItemSeparator: React.FC<ItemSeparatorProps> = ({
  needsSpaceForAlphabet,
}) => {
  const { border } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.itemSeparator,
        { borderColor: border },
        needsSpaceForAlphabet && styles.alphabetOffset,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    marginHorizontal: Spacing.sp3,
    borderBottomWidth: 1,
  },
  alphabetOffset: {
    marginRight: Spacing.sp5,
  },
});

export default ItemSeparator;
