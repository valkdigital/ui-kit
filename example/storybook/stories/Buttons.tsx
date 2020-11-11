import * as React from "react";
import { Button } from "@valkdigital/ui-kit";
import { View } from "react-native";

export default () => (
  <View
    style={{
      height: 600,
      marginBottom: 200,
      justifyContent: "space-evenly",
      minWidth: 400,
      borderWidth: 2,
      borderColor: "grey",
      paddingHorizontal: 16,
    }}
  >
    <Button
      onPress={() => console.log("pressed")}
      size="full"
      helperText="Helper text"
      label="Full button"
    />
    <Button
      onPress={() => console.log("pressed")}
      type="progressbar"
      currentProgress="50"
      label="Full button progressbar"
    />
    <Button onPress={() => console.log("pressed")} label="Medium button" />
    <Button
      onPress={() => console.log("pressed")}
      label="Small button"
      type="ghost"
    />
    <Button
      onPress={() => console.log("pressed")}
      label="Small button"
      size="small"
    />
  </View>
);
