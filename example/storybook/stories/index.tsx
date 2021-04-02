import React, { useRef } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet, ViewStyle, ScrollView } from "react-native";
import {
  Card,
  CardList,
  Text,
  TextInput,
  Spacing,
  PhoneInput,
  countries,
  MultipleButtons,
  Notification,
  TextButton,
  SegmentControl,
  XLTextInput,
} from "@valkdigital/ui-kit";
import Buttons from "./Buttons";
import { withKnobs, color, array } from "@storybook/addon-knobs";

// the action function has one argument which is the name of the action,
// this will be displayed in the actions tab in the addons panel
// action("name here")
import { action } from "@storybook/addon-actions";
import AllFAB from "./FAB";
import NavigationTextStory from "./NavigationTextStory";
import Pickers from "./Pickers";
import Dropdowns from "./Dropdowns";

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

const inputStories = storiesOf("Inputs", module);

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
          size="large"
          multiline={true}
          useFullHeight={true}
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

        <TextInput
          label="Prefix"
          containerStyle={{ marginBottom: Spacing.sp2 }}
          placeholder="Placeholder"
          LeftIconComponent={<Text>Prefix - </Text>}
        />
      </View>
    </CenteredView>
  );
};

inputStories.add("Text Input", () => {
  return <Fields />;
});

inputStories.add("XL Text Input", () => (
  <View
    style={{
      alignItems: "center",
      flex: 1,
      padding: Spacing.sp2,
    }}
  >
    <XLTextInput
      value="Some input"
      label="Label"
      showCheckmark={true}
      placeholder="Placeholder"
      helperText="* required"
      containerStyle={{ marginBottom: Spacing.sp2 }}
    />
    <XLTextInput
      label="Label"
      placeholder="Centered"
      textAlign="center"
      error="Invalid input"
      containerStyle={{ marginBottom: Spacing.sp2 }}
    />
    <XLTextInput
      label="Label"
      placeholder="Disabled"
      textAlign="center"
      disabled={true}
    />
    <XLTextInput
      label="Label"
      placeholder="000"
      textAlign="center"
      size="small"
    />
  </View>
));

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

inputStories.add("Picker", () => <Pickers />);

inputStories.add("Dropdown", () => <Dropdowns />);

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
buttonStories.addDecorator(withKnobs);
buttonStories.add("CTA", () => <Buttons />);
buttonStories.add("FAB", () => <AllFAB />);
buttonStories.add("Multiple Buttons", () => (
  <View style={{ marginTop: Spacing.sp2 }}>
    <MultipleButtons
      selectedLabel="button"
      activeColor={color("active color", "#2BB9F5", "multiple buttons")}
      inActiveColor={color("inactive color", "#E3E3E3", "multiple buttons")}
      onPress={(i) => console.log(i)}
      labels={array("buttons", ["btn 1", "button", "button 12"])}
    />
  </View>
));
buttonStories.add("Text Button", () => (
  <CenteredView>
    <TextButton
      onPress={() => console.log("pressed")}
      label="text button"
      color={color("color", "black", "text button")}
    />
  </CenteredView>
));

buttonStories.add("Segment control", () => (
  <View style={{ marginHorizontal: Spacing.sp1 }}>
    <SegmentControl
      value="segment 2"
      segments={array("segments", ["segment 1", "segment 2", "segment 3"])}
      onPress={action("pressed")}
      style={{ marginBottom: Spacing.sp2 }}
    />
    <SegmentControl
      type="text"
      value="segment 3"
      segments={array("segments", ["segment 1", "segment 2", "segment 3"])}
      onPress={action("pressed")}
      style={{ marginBottom: Spacing.sp2 }}
    />
  </View>
));

buttonStories.add("Navigation Text Button", () => <NavigationTextStory />);

const notificationStories = storiesOf("Notification", module);
notificationStories.add("Notification", () => (
  <ScrollView>
    <Text type="h4">Notification default</Text>
    <View>
      <Notification
        type="positive"
        content="This is a success IN with only one line of text"
      />
      <Notification
        type="positive"
        content="This is a success IN with only one line of text"
      />
      <Notification
        type="negative"
        content="This is a error IN with only one line of text"
      />
      <Notification
        type="warning"
        content="This is a warning IN with only one line of text"
      />
      <Notification
        type="default"
        content="This is a info IN with only one line of text"
      />
    </View>

    <Text type="h4">Notification with heading</Text>
    <View>
      <Notification
        type="positive"
        heading="The core of the success IN in one line."
        content="This is a success IN with only one line of text"
      />
      <Notification
        type="negative"
        heading="The core of the error IN in one line."
        content="This is a error IN with only one line of text"
      />
      <Notification
        type="warning"
        heading="The core of the informative IN in one line."
        content="This is a warning IN with only one line of text"
      />
      <Notification
        type="default"
        heading="The core of the default IN in one line."
        content="This is a info IN with only one line of text"
      />
    </View>

    <Text type="h4">Notification closeable</Text>
    <View>
      <Notification
        type="positive"
        heading="The core of the success IN in one line."
        content="This is a success IN with only one line of text"
        isCloseable={true}
      />
      <Notification
        type="negative"
        heading="The core of the error IN in one line."
        content="This is a error IN with only one line of text"
        isCloseable={true}
      />
      <Notification
        type="warning"
        heading="The core of the informative IN in one line."
        content="This is a warning IN with only one line of text"
        isCloseable={true}
      />
      <Notification
        type="default"
        heading="The core of the default IN in one line."
        content="This is a info IN with only one line of text"
        isCloseable={true}
      />
    </View>

    <Text type="h4">Notification status icons</Text>
    <View>
      <Notification
        type="positive"
        heading="The core of the success IN in one line."
        content="This is a success IN with only one line of text"
        hasIcon={true}
        icon={require("../../../src/media/iconSuccess.png")}
      />
      <Notification
        type="negative"
        heading="The core of the error IN in one line."
        content="This is a error IN with only one line of text"
        hasIcon={true}
        icon={require("../../../src/media/iconError.png")}
      />
      <Notification
        type="warning"
        heading="The core of the informative IN in one line."
        content="This is a warning IN with only one line of text"
        hasIcon={true}
        icon={require("../../../src/media/iconWarning.png")}
      />
      <Notification
        type="default"
        heading="The core of the default IN in one line."
        content="This is a info IN with only one line of text"
        hasIcon={true}
      />
    </View>

    <Text type="h4">Notification cta</Text>
    <View>
      <Notification
        type="positive"
        heading="The core of the success IN in one line."
        content="This is a success IN with only one line of text"
        hasCta={true}
      />
      <Notification
        type="negative"
        heading="The core of the error IN in one line."
        content="This is a error IN with only one line of text"
        hasCta={true}
      />
      <Notification
        type="warning"
        heading="The core of the informative IN in one line."
        content="This is a warning IN with only one line of text"
        hasCta={true}
      />
      <Notification
        type="default"
        heading="The core of the default IN in one line."
        content="This is a info IN with only one line of text"
        hasCta={true}
      />
    </View>

    <Text type="h4">Tooltip</Text>
    <View>
      <Notification
        type="positive"
        isTooltip={true}
        tooltipPosition="below"
        heading="The core of the success IN in one line."
        content="This is a success IN with only one line of text"
      />
      <Notification
        type="negative"
        isTooltip={true}
        tooltipPosition="below"
        heading="The core of the error IN in one line."
        content="This is a error IN with only one line of text"
      />
      <Notification
        type="warning"
        isTooltip={true}
        tooltipPosition="below"
        heading="The core of the warning IN in one line."
        content="This is a warning IN with only one line of text"
      />
      <Notification
        type="default"
        isTooltip={true}
        tooltipPosition="below"
        heading="The core of the info IN in one line."
        content="This is a info IN with only one line of text"
      />
      <Notification
        type="positive"
        isTooltip={true}
        tooltipPosition="above"
        heading="The core of the success IN in one line."
        content="This is a success IN with only one line of text"
      />
      <Notification
        type="negative"
        isTooltip={true}
        tooltipPosition="above"
        heading="The core of the error IN in one line."
        content="This is a error IN with only one line of text"
      />
      <Notification
        type="warning"
        isTooltip={true}
        tooltipPosition="above"
        heading="The core of the warning IN in one line."
        content="This is a warning IN with only one line of text"
      />
      <Notification
        type="default"
        isTooltip={true}
        tooltipPosition="above"
        heading="The core of the info IN in one line."
        content="This is a info IN with only one line of text"
      />
    </View>

    <Text type="h4">Banner status icon</Text>
    <View>
      <Notification
        type="positive"
        heading="The core of the success IN in one line."
        content="This is a success IN with only one line of text"
        isBanner={true}
        hasIcon={true}
        icon={require("../../../src/media/iconSuccess.png")}
      />
      <Notification
        type="negative"
        heading="The core of the error IN in one line."
        content="This is a error IN with only one line of text"
        isBanner={true}
        hasIcon={true}
        icon={require("../../../src/media/iconError.png")}
      />
      <Notification
        type="warning"
        heading="The core of the informative IN in one line."
        content="This is a warning IN with only one line of text"
        isBanner={true}
        hasIcon={true}
        icon={require("../../../src/media/iconWarning.png")}
      />
      <Notification
        type="default"
        heading="The core of the info IN in one line."
        content="This is a info IN with only one line of text"
        isBanner={true}
        hasIcon={true}
      />
    </View>
  </ScrollView>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
