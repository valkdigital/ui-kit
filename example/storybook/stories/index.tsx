import React, { useRef } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet, ViewStyle } from "react-native";
import {
  Card,
  CardList,
  Text,
  TextInput,
  Picker,
  Spacing,
  PhoneInput,
  countries,
} from "@valkdigital/ui-kit";
import data from "../data";
import Buttons from "./Buttons";

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

const Fields: React.FC = () => {
  const ref = useRef<any>(null);
  return (
    <CenteredView>
      <View style={{ width: "100%", paddingHorizontal: Spacing.sp2 }}>
        <TextInput
          label="Label"
          containerStyle={{ marginBottom: Spacing.sp2 }}
          placeholder="Placeholder"
          error="Invalid input"
          onSubmitEditing={() => {
            console.log(ref?.current);
            ref?.current?.focus();
          }}
        />
        <TextInput
          label="Label"
          containerStyle={{ marginBottom: Spacing.sp2 }}
          placeholder="Placeholder"
          disabled={true}
        />
        <TextInput
          ref={ref}
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
  );
};

inputStories.add("Text Input", () => {
  return <Fields />;
});

inputStories.add("Password", () => (
  <CenteredView style={{ paddingHorizontal: Spacing.sp4 }}>
    <TextInput
      label="Password"
      placeholder="Placeholder"
      type="password"
      value="password 123"
    />
  </CenteredView>
));

inputStories.add("Picker", () => (
  <CenteredView>
    <Picker
      label="Salutation"
      placeholder="Select an option"
      size="small"
      options={[
        { label: "Sir", value: "Dhr." },
        { label: "Madame", value: "Mevr." },
      ]}
      selectedOption={{ label: "Sir", value: "Dhr." }}
      title="Salutation"
      onSelectChange={action("onSelectChange")}
      selectContainerStyle={{
        paddingHorizontal: Spacing.sp3,
        marginBottom: Spacing.sp2,
      }}
      modalSize="responsive"
    />
    <Picker
      label="Picker (responsive)"
      placeholder="Select an option"
      options={[...Array(3).keys()].map((_, i) => {
        const value = (i + 1).toString();
        return { label: `option ${value}`, value };
      })}
      selectedOption={undefined}
      title="Title"
      onSelectChange={action("onSelectChange")}
      selectContainerStyle={{
        paddingHorizontal: Spacing.sp3,
        marginBottom: Spacing.sp2,
      }}
      modalSize="responsive"
    />
    <Picker
      label="Picker (fullscreen flatList)"
      placeholder="Select an option"
      options={[...Array(30).keys()].map((_, i) => {
        const value = (i + 1).toString();
        return { label: `option ${value}`, value };
      })}
      selectedOption={{ label: "option 15", value: "15" }}
      addOptionEnabled={true}
      addOptionTitle="Add search input as option"
      title="Title"
      onSelectChange={action("onSelectChange")}
      selectContainerStyle={{
        paddingHorizontal: Spacing.sp3,
        marginBottom: Spacing.sp2,
      }}
      searchPlaceholder="Search"
      listEmptyText="Unfortunately, no results were found for the entered search keywords. Try again please!"
      listType="flatList"
      modalSize="fullscreen"
    />
    <Picker
      label="Picker (fullscreen sectionList)"
      placeholder="Select an option"
      options={data.countries}
      selectedOption={data.countries[9]}
      favoriteOptions={[
        data.countries[0],
        data.countries[11],
        data.countries[9],
      ]}
      title="Country"
      onSelectChange={action("onSelectChange")}
      searchPlaceholder="Search"
      listEmptyText="Unfortunately, no results were found for the entered search keywords. Try again please!"
      selectContainerStyle={{ paddingHorizontal: Spacing.sp3 }}
      listType="sectionList"
      modalSize="fullscreen"
    />
  </CenteredView>
));

inputStories.add("PhoneInput", () => (
  <CenteredView style={{ paddingHorizontal: Spacing.sp2 }}>
    <PhoneInput
      label="Phone"
      containerStyle={{ marginBottom: Spacing.sp2 }}
      countries={countries.en}
      favoriteCountries={["NL", "BE", "DE", "GB"]}
      defaultCountry="NL"
      listTitle="Phone"
      listEmptyText="No results found"
      listSearchPlaceholder="Search"
      onChangeText={action("onChangeText")}
      errorMessage="Invalid phone number"
    />
  </CenteredView>
));

storiesOf("Text", module).add("All Text", () => (
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

const buttonStories = storiesOf("Buttons", module);
buttonStories.add("CTA", () => <Buttons />);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
