import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacing from "../../style/spacing";
import Text from "../Text";
import Icon from "../Icon";
import ThemeContext from "../../style/ThemeContext";

interface AddOptionProps {
  onAddOptionPress?: () => void;
  addOptionTitle?: string;
}

const AddOption: React.FC<AddOptionProps> = ({
  onAddOptionPress,
  addOptionTitle,
}) => {
  const { grey } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: grey[0] }]}
      onPress={onAddOptionPress}
    >
      <Icon name="plus" style={styles.add} />
      {addOptionTitle && <Text type="bodyRegular">{addOptionTitle}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
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
