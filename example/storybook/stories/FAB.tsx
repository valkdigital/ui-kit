import { Fab, Spacing } from "@valkdigital/ui-kit";
import React from "react";
import { View } from "react-native";

interface FABProps {
  backgroundColor?: string;
  color?: string;
  iconColor?: string;
}

const AllFAB: React.FC<FABProps> = ({
  backgroundColor = "#2BB9F5",
  color = "#1AA0E2",
  iconColor = "white",
}) => {
  return (
    <View style={{ width: 300, paddingTop: Spacing.sp2, alignItems: "center" }}>
      <Fab
        label="Placeholder"
        backgroundColor={backgroundColor}
        color={color}
        source={require("../../src/media/plus.png")}
        imgStyle={{ tintColor: iconColor }}
      />
    </View>
  );
};

export default AllFAB;
