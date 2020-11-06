import themes from "./appThemes";
import { merge, Dictionary } from "lodash";

interface Theme {}
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
