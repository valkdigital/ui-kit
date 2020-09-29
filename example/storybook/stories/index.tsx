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
storiesOf("Cards", module).add("Card list horizontal", () => (
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
          header: "Ellipsis mode for text that no longer fits on the screen",
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

storiesOf("Cards", module).add("Card vertical list", () => (
  <CenteredView>
    <CardList
      direction="vertical"
      size="small"
      onItemPress={() => null}
      data={[
        {
          image: {
            uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
          },
          imageHeader: "Header text",
          header: "Ellipsis mode for text that no longer fits on the screen",
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
      containerStyle={{ paddingTop: Spacing.sp3, paddingHorizontal: 16 }}
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
        editable={false}
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
      label="Picker (responsive size)"
      placeholder="Select an option"
      options={[
        { label: "option1", value: "1" },
        { label: "option2", value: "2" },
        { label: "option3", value: "3" },
      ]}
      selectedOption={undefined}
      title="Title"
      onSelectChange={action("onSelectChange")}
      containerStyle={{
        paddingHorizontal: Spacing.sp3,
        marginBottom: Spacing.sp2,
      }}
      size="responsive"
    />
    <Picker
      label="Picker (responsive size)"
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
      containerStyle={{
        paddingHorizontal: Spacing.sp3,
        marginBottom: Spacing.sp2,
      }}
      size="responsive"
    />
    <Picker
      label="Picker (full size)"
      placeholder="Select an option"
      options={[
        {
          label: "Belgium",
          value: "be",
          image: { uri: "https://www.countryflags.io/be/flat/64.png" },
        },
        {
          label: "Netherlands",
          value: "nl",
          image: { uri: "https://www.countryflags.io/nl/flat/64.png" },
        },
        {
          label: "United Kingdom",
          value: "gb",
          image: { uri: "https://www.countryflags.io/gb/flat/64.png" },
        },
        {
          label: "Germany",
          value: "de",
          image: { uri: "https://www.countryflags.io/de/flat/64.png" },
        },
        {
          label: "Barbados",
          value: "BB",
          image: { uri: "https://www.countryflags.io/bb/flat/64.png" },
        },
        {
          label: "Bangladesh",
          value: "BD",
          image: { uri: "https://www.countryflags.io/bd/flat/64.png" },
        },
        {
          label: "Burkina Faso",
          value: "BF",
          image: { uri: "https://www.countryflags.io/bf/flat/64.png" },
        },
        {
          label: "Bulgaria",
          value: "BG",
          image: { uri: "https://www.countryflags.io/bg/flat/64.png" },
        },
        {
          label: "Bahrain",
          value: "BH",
          image: { uri: "https://www.countryflags.io/bh/flat/64.png" },
        },
        {
          label: "Burundi",
          value: "BI",
          image: { uri: "https://www.countryflags.io/bi/flat/64.png" },
        },
        {
          label: "Benin",
          value: "BJ",
          image: { uri: "https://www.countryflags.io/bj/flat/64.png" },
        },
        {
          label: "Saint Barthelemy",
          value: "BL",
          image: { uri: "https://www.countryflags.io/bl/flat/64.png" },
        },
        {
          label: "Bermuda",
          value: "BM",
          image: { uri: "https://www.countryflags.io/bm/flat/64.png" },
        },
        {
          label: "Brunei Darussalam",
          value: "BN",
          image: { uri: "https://www.countryflags.io/bn/flat/64.png" },
        },
        {
          label: "Congo",
          value: "CG",
          image: { uri: "https://countryflag.io/cg/flat/64.png" },
        },
        {
          label: "Switzerland",
          value: "CH",
          image: { uri: "https://countryflag.io/ch/flat/64.png" },
        },
        {
          label: "Cote d'Ivoire",
          value: "CI",
          image: { uri: "https://countryflag.io/ci/flat/64.png" },
        },
        {
          label: "Cook Islands",
          value: "CK",
          image: { uri: "https://countryflag.io/ck/flat/64.png" },
        },
        {
          label: "Chile",
          value: "CL",
          image: { uri: "https://countryflag.io/cl/flat/64.png" },
        },
        {
          label: "Cameroon",
          value: "CM",
          image: { uri: "https://countryflag.io/cm/flat/64.png" },
        },
        {
          label: "China",
          value: "CN",
          image: { uri: "https://countryflag.io/cn/flat/64.png" },
        },
        {
          label: "Colombia",
          value: "CO",
          image: { uri: "https://countryflag.io/co/flat/64.png" },
        },
        {
          label: "Costa Rica",
          value: "CR",
          image: { uri: "https://countryflag.io/cr/flat/64.png" },
        },
        {
          label: "Cuba",
          value: "CU",
          image: { uri: "https://countryflag.io/cu/flat/64.png" },
        },
        {
          label: "Cape Verde",
          value: "CV",
          image: { uri: "https://countryflag.io/cv/flat/64.png" },
        },
        {
          label: "Christmas Island",
          value: "CX",
          image: { uri: "https://countryflag.io/cx/flat/64.png" },
        },
        {
          label: "Cyprus",
          value: "CY",
          image: { uri: "https://countryflag.io/cy/flat/64.png" },
        },
        {
          label: "Czech Republic",
          value: "CZ",
          image: { uri: "https://countryflag.io/cz/flat/64.png" },
        },
        {
          label: "Djibouti",
          value: "DJ",
          image: { uri: "https://countryflag.io/dj/flat/64.png" },
        },
        {
          label: "Denmark",
          value: "DK",
          image: { uri: "https://countryflag.io/dk/flat/64.png" },
        },
        {
          label: "Dominica",
          value: "DM",
          image: { uri: "https://countryflag.io/dm/flat/64.png" },
        },
        {
          label: "Dominican Republic",
          value: "DO",
          image: { uri: "https://countryflag.io/do/flat/64.png" },
        },
        {
          label: "Algeria",
          value: "DZ",
          image: { uri: "https://countryflag.io/dz/flat/64.png" },
        },
        {
          label: "Ecuador",
          value: "EC",
          image: { uri: "https://countryflag.io/ec/flat/64.png" },
        },
        {
          label: "Estonia",
          value: "EE",
          image: { uri: "https://countryflag.io/ee/flat/64.png" },
        },
        {
          label: "Egypt",
          value: "EG",
          image: { uri: "https://countryflag.io/eg/flat/64.png" },
        },
        {
          label: "Eritrea",
          value: "ER",
          image: { uri: "https://countryflag.io/er/flat/64.png" },
        },
        {
          label: "Spain",
          value: "ES",
          image: { uri: "https://countryflag.io/es/flat/64.png" },
        },
        {
          label: "Ethiopia",
          value: "ET",
          image: { uri: "https://countryflag.io/et/flat/64.png" },
        },
        {
          label: "Finland",
          value: "FI",
          image: { uri: "https://countryflag.io/fi/flat/64.png" },
        },
        {
          label: "Fiji",
          value: "FJ",
          image: { uri: "https://countryflag.io/fj/flat/64.png" },
        },
      ]}
      selectedOption={{
        label: "Netherlands",
        value: "nl",
        image: { uri: "https://www.countryflags.io/nl/flat/64.png" },
      }}
      title="Country"
      onSelectChange={action("onSelectChange")}
      searchPlaceholder="Search"
      listEmptyText="Unfortunately, no results were found for the entered search keywords. Try again please!"
      containerStyle={{ paddingHorizontal: Spacing.sp3 }}
      size="full"
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
