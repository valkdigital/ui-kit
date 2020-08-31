import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet } from "react-native";
import { Card, CardList, Text } from "@valkdigital/ui-kit";

const CenteredView: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

storiesOf("Cards", module).add("Large card", () => (
  <CenteredView>
    <Card
      image={{
        uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
      }}
      imageHeader="Diner"
      size="large"
      onPress={() => null}
      assets={
        <View style={{ flexDirection: "row" }}>
          <Text type="subtextRegular" style={{ marginRight: 24 }}>
            2 persons
          </Text>
          <Text type="subtextRegular" style={{ marginLeft: 8 }}>
            18:00
          </Text>
        </View>
      }
      buttonText="Button"
    />
  </CenteredView>
));
storiesOf("Cards", module).add("Medium card", () => (
  <CenteredView>
    <Card
      image={{
        uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
      }}
      imageHeader="Diner"
      size="medium"
      onPress={() => null}
      assets={
        <View style={{ flexDirection: "row" }}>
          <Text type="subtextRegular" style={{ marginRight: 24 }}>
            2 persons
          </Text>
          <Text type="subtextRegular" style={{ marginLeft: 8 }}>
            18:00
          </Text>
        </View>
      }
    />
  </CenteredView>
));
storiesOf("Cards", module).add("Small card", () => (
  <CenteredView>
    <Card
      image={{
        uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
      }}
      header="Diner"
      subHeader="From €89,- per person"
      size="small"
      onPress={() => null}
    />
  </CenteredView>
));
storiesOf("Cards", module).add("Tiny card", () => (
  <CenteredView>
    <Card
      image={{
        uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
      }}
      header="Diner"
      subHeader="From €89,- per person"
      size="tiny"
      onPress={() => null}
    />
  </CenteredView>
));
storiesOf("Cards", module).add("Single card", () => (
  <CenteredView>
    <Card
      image={{
        uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
      }}
      imageHeader="Diner"
      size="single"
      onPress={() => null}
    />
  </CenteredView>
));
storiesOf("Cards", module).add("Card list", () => (
  <CenteredView>
    <CardList
      direction="horizontal"
      size="large"
      onItemPress={() => null}
      data={[
        {
          image: {
            uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
          },
          imageHeader: "Header text",
          header: "Sprightly Spring",
          subHeader: "Available for 37 hotels",
        },
        {
          image: {
            uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
          },
          imageHeader: "Header text",
          header: "Sprightly Spring",
          subHeader: "Available for 37 hotels",
        },
        {
          image: {
            uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
          },
          imageHeader: "Header text",
          header: "Sprightly Spring",
          subHeader: "Available for 37 hotels",
        },
      ]}
      containerStyle={{ paddingTop: 24 }}
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
