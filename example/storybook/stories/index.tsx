import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet, ViewStyle } from "react-native";
import {
  Card,
  CardList,
  Text,
  TextInput,
  Picker,
  Spacing,
} from "@valkdigital/ui-kit";

const action = (event: any) => (params: any) => {
  console.log(event, params);
};

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
          <Text type="subtextRegular" style={{ marginRight: Spacing.sp3 }}>
            2 persons
          </Text>
          <Text type="subtextRegular" style={{ marginLeft: Spacing.sp1 }}>
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
          header: "Longer text will trigger ellipsis mode",
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

const inputStories = storiesOf("InputFields", module);

inputStories.add("Text Input", () => (
  <CenteredView>
    <View style={{ width: "100%", paddingHorizontal: Spacing.sp2 }}>
      <TextInput
        label="Label"
        containerStyle={{ marginBottom: Spacing.sp2 }}
        placeholder="Placeholder"
        error="Invalid input"
      />
      <TextInput
        label="Label"
        containerStyle={{ marginBottom: Spacing.sp2 }}
        placeholder="Placeholder"
        disabled={true}
      />
      <TextInput
        label="Label"
        containerStyle={{ marginBottom: Spacing.sp2 }}
        placeholder="Placeholder"
        size="medium"
        showCheckmark={true}
      />

      <TextInput
        label="Label"
        containerStyle={{ marginBottom: Spacing.sp2 }}
        placeholder="Placeholder"
        size="small"
        helperText="Helper text"
      />
    </View>
  </CenteredView>
));

inputStories.add("Password", () => (
  <CenteredView style={{ paddingHorizontal: Spacing.sp4 }}>
    <TextInput
      label="Password"
      placeholder="Placeholder"
      secureTextEntry={true}
      value="password 123"
    />
  </CenteredView>
));

inputStories.add("Picker", () => (
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
      selectedOption={undefined}
      title="Title"
      onSelectChange={action("onSelectChange")}
      containerStyle={{ paddingHorizontal: Spacing.sp3 }}
    />
  </CenteredView>
));

storiesOf("Text").add("All Text", () => (
  <CenteredView>
    <Text type="h1">Heading 1</Text>
    <Text type="h2">Heading 2</Text>
    <Text type="h3">Heading 3</Text>
    <Text type="h4">Heading 4</Text>
    <Text type="h5">Heading 5</Text>
    <Text type="h6">Heading 6</Text>
    <Text type="subHeading">Sub Heading</Text>
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    <Text type="bodyRegular">Body - Regular</Text>
    <Text type="bodySemiBold">Body Semi - Bold</Text>
    <Text type="bodyItalic">Body Italic</Text>
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    <Text type="subtextRegular">Subtext - Regular</Text>
    <Text type="subtextSemiBold">Subtext - Semibold</Text>
    <Text type="subtextBold">subtextBold - Bold</Text>
    <Text type="label">Label</Text>
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
