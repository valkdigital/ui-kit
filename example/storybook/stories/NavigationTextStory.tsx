import React from "react";
import { View } from "react-native";
import { Text, NavigationTextButton } from "@valkdigital/ui-kit";
interface NavigationTextStoryProps {
  onPress: () => void;
}

const NavigationTextStory: React.FC<NavigationTextStoryProps> = ({
  onPress,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationTextButton
        showTopBorder={true}
        label="Label"
        onPress={onPress}
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
                style={{ marginHorizontal: 8 }}
              >
                New!
              </Text>
            </View>
          </View>
        }
        onPress={onPress}
      />
    </View>
  );
};

export default NavigationTextStory;
