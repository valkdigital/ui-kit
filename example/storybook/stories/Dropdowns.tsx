import { Dropdown, Spacing, Text } from "@valkdigital/ui-kit";
import React from "react";
import { View, StyleSheet } from "react-native";
import data from "../data";

interface DropdownsProps {}

const Dropdowns: React.FC<DropdownsProps> = () => {
  return (
    <View style={styles.container}>
      <Text type="bodySemiBold" style={styles.info}>
        Use this component only when your target is desktop/web. Otherwise use
        the Picker component.
      </Text>

      <Dropdown
        label="Salutation"
        placeholder="Select an option"
        maxListHeight={400}
        size="small"
        options={[
          { label: "Sir", value: "Dhr." },
          { label: "Madame", value: "Mevr." },
        ]}
        selectedOption={{ label: "Sir", value: "Dhr." }}
        onSelectChange={() => null}
        selectContainerStyle={{
          paddingHorizontal: Spacing.sp3,
          marginBottom: Spacing.sp2,
        }}
        listType="flatList"
      />
      <Dropdown
        label="Dropdown (flatList)"
        placeholder="Select an option"
        maxListHeight={400}
        options={[...Array(3).keys()].map((_, i) => {
          const value = (i + 1).toString();
          return { label: `option ${value}`, value };
        })}
        selectedOption={undefined}
        onSelectChange={() => null}
        selectContainerStyle={{
          paddingHorizontal: Spacing.sp3,
          marginBottom: Spacing.sp2,
        }}
        listType="flatList"
      />
      <Dropdown
        label="Dropdown (flatList)"
        placeholder="Select an option"
        maxListHeight={400}
        options={[...Array(30).keys()].map((_, i) => {
          const value = (i + 1).toString();
          return { label: `option ${value}`, value };
        })}
        selectedOption={{ label: "option 15", value: "15" }}
        onSelectChange={() => null}
        selectContainerStyle={{
          paddingHorizontal: Spacing.sp3,
          marginBottom: Spacing.sp2,
        }}
        searchPlaceholder="Search"
        listEmptyText="Unfortunately, no results were found for the entered search keywords. Try again please!"
        listType="flatList"
      />
      <Dropdown
        label="Dropdown (custom sections)"
        placeholder="Select an option"
        maxListHeight={400}
        customSections={[
          {
            title: "Section 1",
            data: [...Array(30).keys()].map((_, i) => {
              const value = (i + 1).toString();
              return { label: `option ${value}`, value };
            }),
          },
          {
            title: "Section 2",
            data: [...Array(20).keys()].map((_, i) => {
              const value = (i + 1).toString();
              return { label: `option ${value}`, value };
            }),
          },
        ]}
        selectedOption={{ label: "option 21", value: "21" }}
        addOptionTitle="Add search input as option"
        onSelectChange={() => null}
        selectContainerStyle={{
          paddingHorizontal: Spacing.sp3,
          marginBottom: Spacing.sp2,
        }}
        alphabeticScrollEnabled={false}
        searchPlaceholder="Search"
        listEmptyText="Unfortunately, no results were found for the entered search keywords. Try again please!"
        listType="sectionList"
      />
      <Dropdown
        label="Dropdown (fullscreen sectionList)"
        placeholder="Select an option"
        maxListHeight={400}
        options={data.countries}
        selectedOption={data.countries[9]}
        favoriteOptions={[
          data.countries[0],
          data.countries[11],
          data.countries[9],
        ]}
        onSelectChange={() => null}
        searchPlaceholder="Search"
        listEmptyText="Unfortunately, no results were found for the entered search keywords. Try again please!"
        selectContainerStyle={{ paddingHorizontal: Spacing.sp3 }}
        listType="sectionList"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  info: { margin: Spacing.sp3 },
});

export default Dropdowns;
