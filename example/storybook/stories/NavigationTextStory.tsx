import React from "react";
import { View } from "react-native";
import { Text, NavigationTextButton, Spacing } from "@valkdigital/ui-kit";
import { action } from "@storybook/addon-actions";

interface NavigationTextStoryProps {}

const NavigationTextStory: React.FC<NavigationTextStoryProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationTextButton
        showTopBorder={true}
        label="Label"
        onPress={action("NavigationTextButton pressed")}
      />
      <NavigationTextButton
        customLabel={
          <View style={{ flexDirection: "row" }}>
            <Text type="bodySemiBold">Custom label</Text>
            <View
              style={{
                borderRadius: 4,
                backgroundColor: "blue",
                marginLeft: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                type="subtextBold"
                color="white"
                style={{ marginHorizontal: Spacing.sp1 }}
              >
                New!
              </Text>
            </View>
          </View>
        }
        onPress={action("NavigationTextButton pressed")}
      />
    </View>
  );
};

export default NavigationTextStory;
