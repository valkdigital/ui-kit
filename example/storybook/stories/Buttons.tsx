import * as React from "react";
import { Button, MultipleButtons, Spacing, Text } from "@valkdigital/ui-kit";
import { ScrollView } from "react-native";
import { boolean, color } from "@storybook/addon-knobs";

interface ButtonsProps {}

const Buttons: React.FC<ButtonsProps> = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: Spacing.sp2,
        paddingTop: Spacing.sp3,
      }}
    >
      <Button
        onPress={() => console.log("pressed")}
        size="full"
        label="Full button"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        labelColor={color("label color", "#FFFFFF", "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        color={color("color", "#FF8100", "cta")}
      >
        <Text style={{ marginLeft: Spacing.sp2 }} color="#C2C2C2">
          helper text
        </Text>
      </Button>
      <Button
        onPress={() => console.log("pressed")}
        size="full"
        label="Full button"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        labelColor={color("label color", "#FFFFFF", "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        color={color("color", "#FF8100", "cta")}
      >
        <Text style={{ marginLeft: Spacing.sp2 }} color="#C2C2C2">
          Select a date of stay
        </Text>
        <MultipleButtons
          labels={["Exact date", "± 1 day", "± 2 days", "± 3 days"]}
          onPress={(i) => console.log(i)}
          disabled={boolean("disabled", false, "cta")}
          containerStyle={{
            marginBottom: Spacing.sp2,
            marginTop: Spacing["sp1/2"],
            paddingLeft: Spacing.sp2,
          }}
        />
      </Button>
      <Button
        onPress={() => console.log("pressed")}
        type="progressbar"
        currentProgress="50"
        label="Full button progressbar"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        labelColor={color("label color", "#FFFFFF", "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        color={color("color", "#FF8100", "cta")}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Medium button"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        labelColor={color("label color", "#FFFFFF", "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        color={color("color", "#FF8100", "cta")}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Small button"
        size="small"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        labelColor={color("label color", "#FFFFFF", "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        color={color("color", "#FF8100", "cta")}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Ghost button"
        type="ghost"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        labelColor={color("label color", "#FFFFFF", "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        color={color("color", "#FF8100", "cta")}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Ghost button with icon"
        type="ghost"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        labelColor={color("label color", "#FFFFFF", "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        color={color("color", "#FF8100", "cta")}
        image={require("../../src/media/plus.png")}
      />
    </ScrollView>
  );
};

export default Buttons;
