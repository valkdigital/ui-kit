import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../style/colors";
import Spacing from "../../style/spacing";
import type { ListTypes } from ".";

interface ItemSeparatorProps {
  listType: ListTypes;
}

export default ({ listType }: ItemSeparatorProps) => (
  <View
    style={[
      styles.itemSeparator,
      listType === "searchable" && styles.alphabetOffset,
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
