import { AppTheme } from "./widgets/ThemeSwitcher/ThemeSwitcher";

/**
 * This file contains the list of themes that are available in the app.
 * The theme name is used to display the theme in the theme switcher.
 * The file name is the name of the CSS file that contains the theme styles.
 */
const appThemes: AppTheme[] = [
  {
    name: "Light",
    fileName: "circle-theme.css",
  },
  {
    name: "Dark",
    fileName: "circle-dark-theme.css",
  },
  {
    name: "Sharp",
    fileName: "circle-sharp-theme.css",
  },
];

export default appThemes;
