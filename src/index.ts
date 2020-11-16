import Text from "./components/Text";
import { Fonts, TypographyLiterals } from "./style/typography";
import Spacing from "./style/spacing";
import ThemeContext from "./style/ThemeContext";
import ThemeManager, { Theme } from "./style/themeManager";
import Card from "./components/Card";
import CardList from "./components/CardList";
import TextInput from "./components/input/TextInput";
import Picker from "./components/Picker";
import PhoneInput from "./components/input/PhoneInput";
import countries from "./components/input/countries";
import Button from "./components/Button/Button";
import Fab from "./components/Button/FAB";
import MultipleButtons from "./components/Button/MultipleButtons";
import TextButton from "./components/Button/TextButton";
import SegmentControl from "./components/Button/SegmentControl";
import NavigationTextButton from "./components/Button/NavigationTextButton";

// Style & Theme exports
export { Fonts, Spacing, ThemeContext, ThemeManager };

// Text (Input) components exports
export { Text, Card, CardList, Picker, TextInput, PhoneInput, countries };

// Button components exports
export {
  Button,
  Fab,
  MultipleButtons,
  TextButton,
  SegmentControl,
  NavigationTextButton,
};

// Types
export type { TypographyLiterals, Theme };
