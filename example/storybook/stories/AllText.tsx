import React from "react";
import { View } from "react-native";
import { Text } from "@valkdigital/ui-kit";

interface TextProps {}

const AllText: React.FC<TextProps> = () => (
  <View
    style={{ justifyContent: "space-evenly", alignItems: "center", flex: 1 }}
  >
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
    <Text type="XLBodyText">XL Body Text</Text>
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    <Text type="subtextRegular">Subtext - Regular</Text>
    <Text type="subtextSemiBold">Subtext - Semibold</Text>
    <Text type="subtextBold">subtextBold - Bold</Text>
    <Text type="label">Label</Text>
  </View>
);

export default AllText;
