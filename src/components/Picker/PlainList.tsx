import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PickerRow from "./PickerRow";
import ItemSeparator from "./ItemSeparator";
import ListFooter from "./ListFooter";
import type { ListTypes, Option } from ".";
import Spacing from "../../style/spacing";

interface PlainListProps {
  options: Option[];
  selectedOption?: Option;
  onSelectOption: (option: Option) => void;
  listType: ListTypes;
}

const PlainList: React.FC<PlainListProps> = ({
  options,
  selectedOption,
  onSelectOption,
  listType,
}) => {
  return (
    <FlatList
      data={options}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <PickerRow
          option={item}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          listType={listType}
        />
      )}
      ItemSeparatorComponent={() => <ItemSeparator listType={listType} />}
      ListHeaderComponent={() => <View style={styles.listHeader} />}
      ListFooterComponent={() => <ListFooter />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: { marginTop: -Spacing.sp2 },
  listHeader: {
    paddingTop: Spacing.sp3,
  },
});

export default PlainList;
