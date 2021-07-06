import React from "react";
import themes from "./appThemes";

type ThemeType = typeof themes.light & typeof themes.dark & Object;

const ThemeContext = React.createContext<ThemeType>({
  ...themes.light,
});

export default ThemeContext;
