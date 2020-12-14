import React, { useRef, useState } from "react";
import BaseInput from "./BaseInput";
import type { BaseInputProps } from "./BaseInput";
import { omit } from "lodash";
import PhonePicker from "./PhonePicker";
import type { Option } from "../Picker";
// @ts-ignore
import examples from "libphonenumber-js/examples.mobile.json";
import { AsYouType, getExampleNumber } from "libphonenumber-js/min";
import type { TextInput as RNTI } from "react-native";
import type { CountryCodes } from "./countries";
import useMergedRef from "../../hooks/useMergedRef";
import defaultCountries from "./countries";

interface PhoneInputProps
  extends Omit<
    BaseInputProps,
    | "LeftIconComponent"
    | "RightIconComponent"
    | "textAlign"
    | "labelStyle"
    | "onChangeText"
  > {
  countries?: { [key in CountryCodes]: Option };
  defaultCountry: CountryCodes;
  favoriteCountries?: CountryCodes[];
  listTitle: string;
  listEmptyText: string;
  listSearchPlaceholder: string;
  onChangeText?: ({
    national,
    e164,
    isValid,
  }: {
    national: string;
    e164?: string;
    isValid: boolean;
  }) => void;
}

const PhoneInput = React.forwardRef<RNTI, PhoneInputProps>((props, ref) => {
  const {
    countries = defaultCountries.native,
    favoriteCountries,
    defaultCountry,
    listTitle,
    listEmptyText,
    listSearchPlaceholder,
    onChangeText,
  } = props;
  const [country, setCountry] = useState<Option>(countries[defaultCountry]);
  const inputRef = useRef<RNTI>(null);
  const mergedRef = useMergedRef<RNTI>(ref, inputRef);

  const passInputProps = omit(props, "placeholder", "onChangeText");
  const placeholder = getExampleNumber(
    country.value,
    examples
  )?.formatNational();
  const favorites = favoriteCountries?.map((country) => countries[country]);

  const onCountryChange = (country: Option) => {
    setCountry(country);
    _onChangeText("");
  };

  const _onChangeText = (text: string) => {
    const asYouType = new AsYouType(country.value);
    const phoneNr = asYouType.input(text);
    const nr = asYouType.getNumber();
    const isValid = !!nr?.isValid();
    if (nr?.country) setCountry(countries[nr?.country as CountryCodes]);
    onChangeText &&
      onChangeText({
        national: phoneNr,
        e164: nr?.format("E.164"),
        isValid,
      });
  };

  const onModalClose = () => {
    inputRef.current?.focus();
  };

  return (
    <BaseInput
      ref={mergedRef}
      {...passInputProps}
      placeholder={placeholder}
      onChangeText={_onChangeText}
      LeftIconComponent={
        <PhonePicker
          title={listTitle}
          favoriteCountries={favorites}
          countries={Object.values(countries)}
          selectedCountry={countries[country.value as CountryCodes]}
          onCountryChange={onCountryChange}
          listEmptyText={listEmptyText}
          searchPlaceholder={listSearchPlaceholder}
          onModalClose={onModalClose}
        />
      }
    />
  );
});

export default PhoneInput;
