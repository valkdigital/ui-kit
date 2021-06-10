import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ThemeContext from "../../style/ThemeContext";
import Spacing from "../../style/spacing";
import Picker, { Option } from "../Picker";
import Icon from "../Icon";

interface PhonePickerProps {
  title: string;
  countries: Option[];
  favoriteCountries?: Option[];
  selectedCountry?: Option;
  onCountryChange: (country: Option) => void;
  listEmptyText: string;
  searchPlaceholder: string;
  onModalClose: () => void;
}

const PhonePicker: React.FC<PhonePickerProps> = ({
  title,
  countries,
  favoriteCountries,
  selectedCountry,
  onCountryChange,
  listEmptyText,
  searchPlaceholder,
  onModalClose,
}) => {
  const { border, typography } = useContext(ThemeContext);
  return (
    <Picker
      title={title}
      options={countries}
      favoriteOptions={favoriteCountries}
      selectedOption={selectedCountry}
      onSelectChange={onCountryChange}
      onClose={onModalClose}
      modalSize="fullscreen"
      listType="sectionList"
      SelectComponent={({ selectedOption, disabled, showOptions }) => {
        return (
          <TouchableOpacity
            onPress={showOptions}
            style={[styles.selectContainer, { borderColor: border }]}
            disabled={disabled}
          >
            {selectedOption?.leftComponent && selectedOption.leftComponent}
            <Icon
              name="chevron-down"
              style={[styles.arrow, { color: typography.color }]}
            />
          </TouchableOpacity>
        );
      }}
      listEmptyText={listEmptyText}
      searchPlaceholder={searchPlaceholder}
    />
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    borderRightWidth: 1,
    marginRight: Spacing.sp1,
  },
  arrow: {
    marginRight: Spacing.sp1,
  },
});

export default PhonePicker;
