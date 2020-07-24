import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet } from "react-native";
import { Card } from "vex-ui";

const CenteredView: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

storiesOf("CenteredView", module).add("default view", () => (
  <CenteredView>
    <Card
      id="1"
      image={{
        uri:
          "https://mediabank.valkenhorst.nl/imagebank/images/263/image86596/c789x2500.png",
      }}
      imageHeader="Header tekst"
      header="Vrolijk voorjaar"
      subHeader="Beschikbaar voor 37 hotels"
      size="large"
      onPress={() => {}}
    />
  </CenteredView>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
