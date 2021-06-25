import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacing from "../../style/spacing";
import colors from "../../style/colors";
import Text from "../Text";
import Icon from "../Icon";

interface AddOptionProps {
  onAddOptionPress?: () => void;
  addOptionTitle?: string;
}

const AddOption: React.FC<AddOptionProps> = ({
  onAddOptionPress,
  addOptionTitle,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onAddOptionPress}>
      <Icon name="plus" style={styles.add} />
      {addOptionTitle && <Text type="bodyRegular">{addOptionTitle}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.greyLight,
    height: Spacing.sp6,
    paddingHorizontal: Spacing.sp2,
    marginHorizontal: Spacing.sp3,
    marginBottom: Spacing.sp3,
  },
  add: {
    marginRight: Spacing.sp1,
  },
});

export default AddOption;
