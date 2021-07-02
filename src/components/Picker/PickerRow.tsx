import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacing from "../../style/spacing";
import Text from "../Text";
import type { Option } from ".";
import { isEqual } from "lodash";
import { Icon } from "@valkdigital/ui-kit";
import ThemeContext from "../../style/ThemeContext";

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
  const { success, grey } = useContext(ThemeContext);

  const { label, extraLabel, leftComponent } = option;

  const onPress = () => {
    onSelectOption(option);
  };

  return (
    <TouchableOpacity
      style={[
        styles.option,
        needsSpaceForAlphabet && styles.alphabetOffset,
        isFirstOption && { height: Spacing.sp5, paddingTop: 0 },
      ]}
      onPress={onPress}
    >
      {leftComponent && leftComponent}

      <Text type="bodyRegular" numberOfLines={2} style={styles.label}>
        {label}
        {extraLabel && (
          <Text type="bodyRegular" color={grey[4]} style={styles.extraLabel}>
            {extraLabel}
          </Text>
        )}
      </Text>

      {isEqual(selectedOption, option) && (
        <Icon
          style={styles.checkmark}
          name="checkmark"
          color={success.primary}
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
  checkmark: {
    marginLeft: Spacing.sp1,
  },
  alphabetOffset: {
    marginRight: Spacing.sp5,
  },
  label: { flex: 1 },
  extraLabel: {
    marginLeft: Spacing["sp1/2"],
  },
});

const propsAreEqual = (
  prevProps: PickerRowProps,
  nextProps: PickerRowProps
) => {
  return isEqual(prevProps, nextProps);
};

export default React.memo(PickerRow, propsAreEqual);
