import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import Spacing from "../../style/spacing";
import Text from "../Text";
import ThemeContext from "../../style/ThemeContext";

interface ListEmptyProps {
  listEmptyText?: string;
}

const ListEmpty: React.FC<ListEmptyProps> = ({ listEmptyText }) => {
  const { grey } = useContext(ThemeContext);

  return (
    <Text type="subtextRegular" color={grey[4]} style={styles.listEmpty}>
      {listEmptyText}
    </Text>
  );
};

const styles = StyleSheet.create({
  listEmpty: {
    paddingHorizontal: Spacing.sp3,
  },
});

export default ListEmpty;
