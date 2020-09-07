import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Text from "./Text";
import spacing from "../style/spacing";

interface DropdownProps {
  label: string;
  placeholder: string;
  value?: string | number;
  style?: ViewStyle;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,

  style,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState<number | string>();

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const selectItem = (item: any) => {
    setValue(item);
    toggleDropdown();
  };

  return (
    <View style={[styles.container, style]}>
      <Text type="subtextSemiBold" style={styles.label}>
        {label}
      </Text>
      <View style={[styles.selectContainer, isActive && styles.focused]}>
        <TouchableWithoutFeedback onPress={toggleDropdown}>
          <View style={[styles.select, isActive && styles.focusedSelect]}>
            <Text
              type="bodyRegular"
              style={value === undefined ? styles.placeholder : undefined}
            >
              {value === undefined ? placeholder : value}
            </Text>
            <Image
              source={
                isActive
                  ? require("../icons/arrow_up.png")
                  : require("../icons/arrow_down.png")
              }
              style={styles.chevron}
            />
          </View>
        </TouchableWithoutFeedback>
        {isActive && (
          <FlatList
            data={["option 1", "option 2", "option 3"]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => selectItem(item)}
              >
                <Text type="bodyRegular">{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sp2,
    maxWidth: 328,
  },
  label: {
    marginBottom: spacing.sp1,
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: spacing["sp1/2"],
    overflow: "hidden",
  },
  select: {
    paddingHorizontal: spacing.sp2,
    paddingVertical: spacing.sp1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chevron: {
    width: 14,
    height: 8,
  },
  option: {
    padding: spacing.sp2,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  placeholder: {
    color: "#ACACAC",
  },
  focused: {
    borderColor: "#498FA7",
  },
  focusedSelect: {
    borderBottomWidth: 1,
    borderBottomColor: "#498FA7",
  },
});

export default Dropdown;
