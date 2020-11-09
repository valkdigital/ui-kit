import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../style/colors";
import Spacing from "../../style/spacing";

interface ItemSeparatorProps {
  needsSpaceForAlphabet?: boolean;
}

export default ({ needsSpaceForAlphabet }: ItemSeparatorProps) => (
  <View
    style={[
      styles.itemSeparator,
      needsSpaceForAlphabet && styles.alphabetOffset,
    ]}
  />
);

const styles = StyleSheet.create({
  itemSeparator: {
    marginHorizontal: Spacing.sp3,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  alphabetOffset: {
    marginRight: Spacing.sp5,
  },
});
