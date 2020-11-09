import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Spacing from "../../style/spacing";
import colors from "../../style/colors";
import Text from "../Text";

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
      <Image source={require("../../media/add.png")} style={styles.add} />
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
    width: 24,
    height: 24,
    marginRight: Spacing.sp1,
  },
});

export default AddOption;
