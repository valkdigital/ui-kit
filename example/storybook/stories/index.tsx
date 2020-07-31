import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet } from "react-native";
import { Card, CardList, Text } from "@valkdigital/vex-ui";

const CenteredView: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

storiesOf("Cards", module).add("Single card", () => (
  <CenteredView>
    <Card
      id="1"
      image={{
        uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
      }}
      imageHeader="Diner"
      size="large"
      onPress={() => null}
      assets={
        <View style={{ flexDirection: "row" }}>
          <Text type="subtextRegular" style={{ marginRight: 24 }}>
            2 personen
          </Text>
          <Text type="subtextRegular" style={{ marginLeft: 8 }}>
            18:00
          </Text>
        </View>
      }
    />
  </CenteredView>
));
storiesOf("Cards", module).add("Card list", () => (
  <CenteredView>
    <CardList
      direction="horizontal"
      size="large"
      onPress={() => null}
      data={[
        {
          id: "1",
          image: {
            uri:
              "https://mediabank.valkenhorst.nl/imagebank/images/263/image86596/c789x2500.png",
          },
          imageHeader: "Header tekst",
          header: "Vrolijk voorjaar",
          subHeader: "Beschikbaar voor 37 hotels",
        },
        {
          id: "2",
          image: {
            uri:
              "https://mediabank.valkenhorst.nl/imagebank/images/263/image86596/c789x2500.png",
          },
          imageHeader: "Header tekst",
          header: "Vrolijk voorjaar",
          subHeader: "Beschikbaar voor 37 hotels",
        },
        {
          id: "3",
          image: {
            uri:
              "https://mediabank.valkenhorst.nl/imagebank/images/263/image86596/c789x2500.png",
          },
          imageHeader: "Header tekst",
          header: "Vrolijk voorjaar",
          subHeader: "Beschikbaar voor 37 hotels",
        },
      ]}
    />
  </CenteredView>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
});
