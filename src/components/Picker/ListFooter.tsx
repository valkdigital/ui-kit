import React from "react";
import { View, StyleSheet } from "react-native";
import Spacing from "../../style/spacing";

export default () => <View style={styles.listFooter} />;

const styles = StyleSheet.create({
  listFooter: {
    paddingBottom: Spacing.sp3,
  },
});
