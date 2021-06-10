import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacing from "../../style/spacing";
import Text from "../Text";
import type { Option } from ".";
import colors from "../../style/colors";
import { isEqual } from "lodash";
import { Icon } from "@valkdigital/ui-kit";

interface PickerRowProps {
  option: Option;
  selectedOption?: Option;
  onSelectOption: (option: Option) => void;
  needsSpaceForAlphabet?: boolean;
  isFirstOption?: boolean;
}

class PickerRow extends React.PureComponent<PickerRowProps> {
  render() {
    const {
      option,
      selectedOption,
      onSelectOption,
      needsSpaceForAlphabet,
      isFirstOption,
    } = this.props;
    const { label, extraLabel, leftComponent } = option;
    return (
      <TouchableOpacity
        style={[
          styles.option,
          needsSpaceForAlphabet && styles.alphabetOffset,
          isFirstOption && { height: Spacing.sp5, paddingTop: 0 },
        ]}
        onPress={() => onSelectOption(option)}
      >
        {leftComponent && leftComponent}

        <Text type="bodyRegular" numberOfLines={2} style={styles.label}>
          {label}
          {extraLabel && (
            <Text
              type="bodyRegular"
              color={colors.greyDark}
              style={styles.extraLabel}
            >
              {extraLabel}
            </Text>
          )}
        </Text>

        {isEqual(selectedOption, option) && (
          <Icon style={styles.checkmark} name="checkmark" />
        )}
      </TouchableOpacity>
    );
  }
}

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
    color: colors.greenPrimary,
  },
  alphabetOffset: {
    marginRight: Spacing.sp5,
  },
  label: { flex: 1 },
  extraLabel: {
    marginLeft: Spacing["sp1/2"],
  },
});

export default PickerRow;
