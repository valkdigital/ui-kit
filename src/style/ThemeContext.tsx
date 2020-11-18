import React from "react";
import themes from "./appThemes";

const ThemeContext = React.createContext({
  ...themes.light,
});

export default ThemeContext;
