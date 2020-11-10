import themes from "./appThemes";
import { merge, Dictionary } from "lodash";

// Makes all (nested) keys optional
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type Theme = DeepPartial<typeof themes["light"]>;

class ThemeManager {
  private theme: Dictionary<Theme> = {
    ...themes,
  };

  setTheme = (override: Dictionary<Theme>) => {
    this.theme = merge(this.theme, override);
  };

  getTheme(themeMode: "light" | "dark") {
    return { ...this.theme[themeMode] };
  }
}
export default new ThemeManager();
