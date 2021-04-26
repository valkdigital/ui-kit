import Text from "./components/Text";
import { Fonts, TypographyLiterals } from "./style/typography";
import shadow from "./style/shadow";
import Spacing from "./style/spacing";
import IconSet from "./style/iconSet";
import ThemeContext from "./style/ThemeContext";
import Theme from "./style/appThemes";
import Card from "./components/Card";
import TextInput from "./components/input/TextInput";
import Picker, { Option } from "./components/Picker";
import PhoneInput from "./components/input/PhoneInput";
import countries from "./components/input/countries";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button/Button";
import Fab from "./components/Button/FAB";
import MultipleButtons from "./components/Button/MultipleButtons";
import TextButton from "./components/Button/TextButton";
import SegmentControl from "./components/Button/SegmentControl";
import NavigationTextButton from "./components/Button/NavigationTextButton";
import XLTextInput from "./components/input/XLTextInput";
import Notification from "./components/Notification/Notification";
import Icon from "./components/Icon";
import type { IconSizes, IconNames } from "./components/Icon";
import type { TextInputType } from "./components/input/BaseInput";

// Style & Theme exports
export { Fonts, Spacing, IconSet, ThemeContext, Theme, shadow as Shadow };

// Text (Input) components exports
export {
  Text,
  Card,
  Picker,
  TextInput,
  PhoneInput,
  countries,
  Dropdown,
  XLTextInput,
};

// Button components exports
export {
  Button,
  Fab,
  MultipleButtons,
  TextButton,
  SegmentControl,
  NavigationTextButton,
};

// Notification component export
export { Notification };

// Icon components exports
export { Icon };

// Types
export type {
  TypographyLiterals,
  Option as PickerOption,
  TextInputType,
  IconSizes,
  IconNames,
};
