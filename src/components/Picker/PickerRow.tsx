import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Spacing from "../../style/spacing";
import Text from "../Text";
import type { Option, ListTypes } from ".";

interface PickerRowProps {
  option: Option;
  selectedOption?: Option;
  onSelectOption: (option: Option) => void;
  listType: ListTypes;
}

const PickerRow: React.FC<PickerRowProps> = ({
  option,
  selectedOption,
  onSelectOption,
  listType,
}) => {
  const { label, value, image } = option;
  return (
    <TouchableOpacity
      style={[
        styles.option,
        listType === "searchable" && styles.alphabetOffset,
      ]}
      onPress={() => onSelectOption(option)}
    >
      <View style={styles.row}>
        {image && (
          <Image
            source={image}
            style={styles.optionImage}
            resizeMode="contain"
          />
        )}
        <Text type="bodyRegular" numberOfLines={1}>
          {label}
        </Text>
      </View>
      {selectedOption?.value === value && (
        <Image
          source={require("../../media/checkmark.png")}
          style={styles.checkmark}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Spacing.sp7,
    marginHorizontal: Spacing.sp3,
    paddingVertical: Spacing.sp2,
  },
  optionImage: {
    width: Spacing.sp3,
    height: Spacing.sp3,
    alignSelf: "center",
    marginRight: Spacing.sp1,
  },
  checkmark: {
    width: 16,
    height: 11.61,
  },
  row: {
    flexDirection: "row",
  },
  alphabetOffset: {
    marginRight: Spacing.sp5,
  },
});

export default PickerRow;
