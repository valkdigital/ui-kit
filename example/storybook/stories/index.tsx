import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet } from "react-native";
import { Card, CardList, Text, Picker, Spacing } from "@valkdigital/ui-kit";

const action = (event: any) => (params: any) => {
  console.log(event, params);
};

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
          <Text type="subtextRegular" style={{ marginRight: Spacing.sp3 }}>
            2 persons
          </Text>
          <Text type="subtextRegular" style={{ marginLeft: Spacing.sp1 }}>
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
      containerStyle={{ paddingTop: Spacing.sp3 }}
    />
  </CenteredView>
));
storiesOf("Form elements", module).add("Picker", () => (
  <CenteredView>
    <Picker
      label="Picker"
      placeholder="Select an option"
      options={[
        { label: "option1", value: "1" },
        { label: "option2", value: "2" },
        { label: "option3", value: "3" },
        { label: "option4", value: "4" },
        { label: "option5", value: "5" },
        { label: "option6", value: "6" },
        { label: "option7", value: "7" },
        { label: "option8", value: "8" },
      ]}
      value={undefined}
      title="Title"
      onValueChange={action("onValueChange")}
      containerStyle={{ marginVertical: Spacing.sp2 }}
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
