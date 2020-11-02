import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import Spacing from "../../style/spacing";
import Text from "../Text";
import type { Option } from ".";

interface PickerRowProps {
  option: Option;
  selectedOption?: Option;
  onSelectOption: (option: Option) => void;
  needsSpaceForAlphabet?: boolean;
  isFirstOption?: boolean;
}

const PickerRow: React.FC<PickerRowProps> = ({
  option,
  selectedOption,
  onSelectOption,
  needsSpaceForAlphabet,
  isFirstOption,
}) => {
  const { label, value, image } = option;
  return (
    <TouchableOpacity
      style={[
        styles.option,
        needsSpaceForAlphabet && styles.alphabetOffset,
        isFirstOption && { height: Spacing.sp5, paddingTop: 0 },
      ]}
      onPress={() => onSelectOption(option)}
    >
      {image && (
        <Image source={image} style={styles.optionImage} resizeMode="contain" />
      )}
      <Text type="bodyRegular" numberOfLines={1} style={styles.label}>
        {label}
      </Text>
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
    marginLeft: Spacing.sp2,
  },
  alphabetOffset: {
    marginRight: Spacing.sp5,
  },
  label: { flex: 1 },
});

export default PickerRow;
