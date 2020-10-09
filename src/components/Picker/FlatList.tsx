import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList as RNFLatList } from "react-native";
import PickerRow from "./PickerRow";
import ItemSeparator from "./ItemSeparator";
import ListFooter from "./ListFooter";
import type { Option } from ".";
import Spacing from "../../style/spacing";
import Text from "../Text";
import colors from "../../style/colors";

interface FlatListProps {
  options: Option[];
  selectedOption?: Option;
  onSelectOption: (option: Option) => void;
  search: string;
  listEmptyText?: string;
  needsPaddingTop?: boolean;
}

const FlatList: React.FC<FlatListProps> = ({
  options,
  selectedOption,
  onSelectOption,
  search,
  listEmptyText,
  needsPaddingTop,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const flatListRef = useRef<RNFLatList>(null);

  const getItemLayout = (_: any, index: number) => {
    const itemHeight = Spacing.sp7 + 1;
    const extraPadding = needsPaddingTop ? Spacing.sp1 : 0;
    return {
      length: itemHeight,
      offset: itemHeight * index + extraPadding,
      index,
    };
  };

  useEffect(() => {
    if (search || !selectedOption?.label || !filteredOptions?.length) {
      return;
    }

    const timeout = setTimeout(() => {
      const { label } = selectedOption;
      const index = filteredOptions.findIndex(
        (option) => option.label === label
      );
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

  useEffect(() => {
    if (!search) return;
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <RNFLatList
      ref={flatListRef}
      data={filteredOptions}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <PickerRow
          option={item}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
        />
      )}
      ItemSeparatorComponent={() => <ItemSeparator />}
      ListEmptyComponent={() => (
        <Text
          type="subtextRegular"
          color={colors.greyDark}
          style={styles.listEmpty}
        >
          {listEmptyText}
        </Text>
      )}
      ListFooterComponent={() => <ListFooter />}
      getItemLayout={getItemLayout}
      ListHeaderComponent={() =>
        needsPaddingTop ? <View style={styles.listHeader} /> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  listHeader: {
    paddingTop: Spacing.sp3,
  },
  listEmpty: {
    paddingHorizontal: Spacing.sp3,
  },
});

export default FlatList;
