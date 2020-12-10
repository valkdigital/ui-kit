import { countries, Picker, Spacing } from "@valkdigital/ui-kit";
import React from "react";
import { View } from "react-native";
import data from "../data";

interface PickersProps {}

const Pickers: React.FC<PickersProps> = () => {
  return (
    <View style={{ flex: 1 }}>
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
        onSelectChange={() => null}
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
        onSelectChange={() => null}
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
        title="Title"
        onSelectChange={() => null}
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
        label="Picker (custom sections)"
        placeholder="Select an option"
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
        title="Title"
        onSelectChange={() => null}
        selectContainerStyle={{
          paddingHorizontal: Spacing.sp3,
          marginBottom: Spacing.sp2,
        }}
        searchPlaceholder="Search"
        listEmptyText="Unfortunately, no results were found for the entered search keywords. Try again please!"
        listType="sectionList"
        modalSize="fullscreen"
      />
      <Picker
        label="Picker (fullscreen sectionList)"
        placeholder="Select an option"
        options={Object.values(countries.en)}
        selectedOption={countries.en.AG}
        favoriteOptions={[countries.en.NL, countries.en.DE]}
        title="Country"
        onSelectChange={() => null}
        searchPlaceholder="Search"
        listEmptyText="Unfortunately, no results were found for the entered search keywords. Try again please!"
        selectContainerStyle={{ paddingHorizontal: Spacing.sp3 }}
        listType="sectionList"
        modalSize="fullscreen"
      />
    </View>
  );
};

export default Pickers;
