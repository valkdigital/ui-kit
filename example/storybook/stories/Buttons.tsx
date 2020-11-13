import * as React from "react";
import { Button, MultipleButtons, Spacing, Text } from "@valkdigital/ui-kit";
import { ScrollView } from "react-native";

export default ({
  loading,
  disabled,
  labelColor,
  color,
}: {
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  labelColor?: string;
}) => {
  const { sp2, sp3 } = Spacing;
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: sp2,
        paddingTop: sp3,
      }}
    >
      <Button
        onPress={() => console.log("pressed")}
        size="full"
        label="Full button"
        loading={loading}
        disabled={disabled}
        labelColor={labelColor}
        containerStyle={{ marginBottom: sp2 }}
        color={color}
      >
        <Text style={{ marginLeft: sp2 }} color="#C2C2C2">
          helper text
        </Text>
      </Button>
      <Button
        onPress={() => console.log("pressed")}
        size="full"
        label="Full button"
        loading={loading}
        disabled={disabled}
        labelColor={labelColor}
        containerStyle={{ marginBottom: sp2 }}
        color={color}
      >
        <Text style={{ marginLeft: sp2 }} color="#C2C2C2">
          Select a date of stay
        </Text>

        <MultipleButtons
          labels={["Exact date", "± 1 dag", "± 2 dagen", "± 3 dagen"]}
          onPress={(i: number) => console.log(i)}
          disabled={disabled}
          containerStyle={{
            marginBottom: sp2,
            marginTop: Spacing["sp1/2"],
            paddingLeft: sp2,
          }}
        />
      </Button>
      <Button
        onPress={() => console.log("pressed")}
        type="progressbar"
        currentProgress="50"
        label="Full button progressbar"
        loading={loading}
        disabled={disabled}
        labelColor={labelColor}
        containerStyle={{ marginBottom: sp2 }}
        color={color}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Medium button"
        loading={loading}
        disabled={disabled}
        labelColor={labelColor}
        containerStyle={{ marginBottom: sp2 }}
        color={color}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Small button"
        size="small"
        loading={loading}
        disabled={disabled}
        labelColor={labelColor}
        containerStyle={{ marginBottom: sp2 }}
        color={color}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Ghost button"
        type="ghost"
        loading={loading}
        disabled={disabled}
        labelColor={labelColor}
        containerStyle={{ marginBottom: sp2 }}
        color={color}
      />
      <Button
        onPress={() => console.log("pressed")}
        label="Ghost button with icon"
        type="ghost"
        loading={loading}
        disabled={disabled}
        labelColor={labelColor}
        containerStyle={{ marginBottom: sp2 }}
        color={color}
        image={require("../../src/media/plus.png")}
      />
    </ScrollView>
  );
};
