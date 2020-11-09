import React from "react";
import { StyleSheet } from "react-native";
import Spacing from "../../style/spacing";
import colors from "../../style/colors";
import Text from "../Text";

interface ListEmptyProps {
  listEmptyText?: string;
}

const ListEmpty: React.FC<ListEmptyProps> = ({ listEmptyText }) => (
  <Text type="subtextRegular" color={colors.greyDark} style={styles.listEmpty}>
    {listEmptyText}
  </Text>
);

const styles = StyleSheet.create({
  listEmpty: {
    paddingHorizontal: Spacing.sp3,
  },
});

export default ListEmpty;
