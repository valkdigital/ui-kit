import { FAB, Spacing } from "@valkdigital/ui-kit";
import React from "react";
import { View } from "react-native";

interface FABProps {}

const AllFAB: React.FC<FABProps> = () => {
  return (
    <View style={{ width: 300, paddingTop: Spacing.sp2, alignItems: "center" }}>
      <FAB
        label="Placeholder"
        backgroundColor="#2BB9F5"
        color="#1AA0E2"
        source={require("../../src/media/plus.png")}
      />
    </View>
  );
};

export default AllFAB;
