import React from "react";
import themes from "./appThemes";
import spacing from "./spacing";

const ThemeContext = React.createContext({
  ...themes.light,
  spacing,
});

export default ThemeContext;
