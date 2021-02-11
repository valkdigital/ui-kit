import React from "react";
import { View, StyleSheet } from "react-native";
import Spacing from "../../style/spacing";

const ListFooter: React.FC = () => {
  return <View style={styles.listFooter} />;
};

const styles = StyleSheet.create({
  listFooter: {
    paddingBottom: Spacing.sp2,
  },
});

export default ListFooter;
