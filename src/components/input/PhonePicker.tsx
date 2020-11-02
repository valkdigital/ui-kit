import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../../style/colors";
import Spacing from "../../style/spacing";
import Picker, { Option } from "../Picker";

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
      SelectComponent={({ selectedOption, disabled, showOptions }) => (
        <TouchableOpacity
          onPress={showOptions}
          style={styles.selectContainer}
          disabled={disabled}
        >
          {selectedOption?.image && (
            <Image
              source={selectedOption?.image}
              style={styles.optionImage}
              resizeMode="contain"
            />
          )}
          <Image
            source={require("../../media/arrow_down.png")}
            style={styles.arrow}
          />
        </TouchableOpacity>
      )}
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
    borderRightColor: colors.greyMidDark,
    borderRightWidth: 1,
    marginRight: Spacing.sp1,
  },
  optionImage: {
    width: Spacing.sp3,
    height: Spacing.sp3,
    alignSelf: "center",
    marginRight: Spacing.sp1,
  },
  arrow: {
    width: 14,
    height: 8,
    marginRight: Spacing.sp1,
  },
});

export default PhonePicker;
