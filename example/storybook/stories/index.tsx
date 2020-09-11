import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Card, CardList, Text, TextInput } from "@valkdigital/ui-kit";

const CenteredView: React.FC<{ style?: ViewStyle }> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
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

const inputStories = storiesOf("InputFields", module);

inputStories.add("Text Input", () => (
  <CenteredView>
    <View style={{ width: "100%", paddingHorizontal: 20 }}>
      <TextInput
        label="Label"
        containerStyle={{ marginBottom: 16 }}
        placeholder="Placeholder"
        error="Invalid input"
      />
      <TextInput
        label="Label"
        containerStyle={{ marginBottom: 16 }}
        placeholder="Placeholder"
        disabled={true}
      />
      <TextInput
        label="Label"
        containerStyle={{ marginBottom: 16 }}
        placeholder="Placeholder"
        size="medium"
        showCheckmark={true}
      />

      <TextInput
        label="Label"
        containerStyle={{ marginBottom: 16 }}
        placeholder="Placeholder"
        size="small"
        helperText="Helper text"
      />
    </View>
  </CenteredView>
));

inputStories.add("Password", () => (
  <CenteredView style={{ paddingHorizontal: 32 }}>
    <TextInput
      label="Password"
      placeholder="Placeholder"
      secureTextEntry={true}
      value="password 123"
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
