import { action } from "@storybook/addon-actions";
import { color } from "@storybook/addon-knobs";
import { Fab, Spacing } from "@valkdigital/ui-kit";
import React from "react";
import { View } from "react-native";

interface FABProps {}

const AllFAB: React.FC<FABProps> = () => {
  return (
    <View style={{ width: 300, paddingTop: Spacing.sp2, alignItems: "center" }}>
      <Fab
        label="Placeholder"
        backgroundColor={color("background color", "#2BB9F5", "fab")}
        color={color("color", "#1AA0E2", "fab")}
        icon="plus"
        onPress={action("pressed")}
      />
    </View>
  );
};

export default AllFAB;
