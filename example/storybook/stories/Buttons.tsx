import * as React from "react";
import { Button, MultipleButtons, Spacing, Text } from "@valkdigital/ui-kit";
import { ScrollView } from "react-native";
import { boolean } from "@storybook/addon-knobs";

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
        containerStyle={{ marginBottom: Spacing.sp2 }}
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
        containerStyle={{ marginBottom: Spacing.sp2 }}
      >
        <Text style={{ marginLeft: Spacing.sp2 }} color="#C2C2C2">
          Select a date of stay
        </Text>
        <MultipleButtons
          selectedLabel="Exact date"
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
        containerStyle={{ marginBottom: Spacing.sp2 }}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Medium button"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Small button"
        size="small"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Ghost button"
        type="ghost"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Ghost button with icon"
        type="ghost"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        image={require("../../src/media/plus.png")}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Icon button"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        icon="chevron-right"
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Icon opposite button"
        loading={boolean("loading", false, "cta")}
        disabled={boolean("disabled", false, "cta")}
        containerStyle={{ marginBottom: Spacing.sp2 }}
        icon="chevron-left"
        iconOpposite={true}
      />
    </ScrollView>
  );
};

export default Buttons;
