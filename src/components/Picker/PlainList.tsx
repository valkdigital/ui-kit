import React, { useEffect, useRef } from "react";
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
  const flatListRef = useRef<FlatList>(null);

  const getItemLayout = (_: any, index: number) => {
    const itemHeight = Spacing.sp7 + 1;
    const listHeaderHeight = Spacing.sp1;
    return {
      length: itemHeight,
      offset: itemHeight * index + listHeaderHeight,
      index,
    };
  };

  useEffect(() => {
    if (!selectedOption?.label) {
      return;
    }

    const timeout = setTimeout(() => {
      const { label } = selectedOption;
      const index = options.findIndex((option) => option.label === label);
      if (index < 0) return;
      flatListRef.current?.scrollToIndex({
        index,
        viewOffset: 0,
        viewPosition: 0,
        animated: true,
      });
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <FlatList
      ref={flatListRef}
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
      getItemLayout={getItemLayout}
    />
  );
};

const styles = StyleSheet.create({
  listHeader: {
    paddingTop: Spacing.sp1,
  },
});

export default PlainList;
