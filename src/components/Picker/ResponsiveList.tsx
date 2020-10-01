import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PickerRow from "./PickerRow";
import ItemSeparator from "./ItemSeparator";
import ListFooter from "./ListFooter";
import type { ModalSizes, Option } from ".";
import Spacing from "../../style/spacing";

interface ResponsiveListProps {
  options: Option[];
  selectedOption?: Option;
  onSelectOption: (option: Option) => void;
  modalSize: ModalSizes;
}

const ResponsiveList: React.FC<ResponsiveListProps> = ({
  options,
  selectedOption,
  onSelectOption,
  modalSize,
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
          modalSize={modalSize}
        />
      )}
      ItemSeparatorComponent={() => <ItemSeparator modalSize={modalSize} />}
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

export default ResponsiveList;
