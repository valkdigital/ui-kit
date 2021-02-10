# Valk Digital UI-kit

https://valkdigital.github.io/ui-kit

A fully typed component library for react native (web) development.

## Setup

Instructions for using the library

### Font

This project uses Source Sans Pro. When you add a font to your project use the same names as the ones in the `./src/style/typography.ts` file.
When you set up an expo project you can use the Fonts enum like this:

```
import React, { useEffect } from "react";
import * as Font from "expo-font";
import { Fonts } from "vex-ui";

export default function App() {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        [Fonts.Bold]: require("../assets/fonts/SourceSansPro-Bold.ttf"),
        [Fonts.Regular]: require("../assets/fonts/SourceSansPro-Regular.ttf"),
        [Fonts.SemiBold]: require("../assets/fonts/SourceSansPro-SemiBold.ttf"),
      });
    };
    loadFonts();
  }, []);
```

### Theme

In order for this component library to work you need to provide your app with a theme.
Wrap your app with a provider and set your theme with the value prop. See the following examples.

#### Set a custom theme

Set a light and/or a dark theme.

```
 ThemeManager.setTheme({
        light: YourAwsomeLightTheme,
        dark: YourAwsomeDarkTheme
      });
    };
```

#### Provider

Get the theme value (dark/light) from Theme and place the provider around your app.

```
import { Theme } from "@valkdigital/ui-kit"

<ThemeContext.Provider
    value={darkModeOn ? Theme.dark : Theme.light}
>
    <YourAwesomeApp />
</ThemeContext.Provider>
```

## Example

You can see an extensive documented web preview of the component library at https://valkdigital.github.io/ui-kit or by running `yarn storybook`. With the use of storybook you'll be able to see each component with the following topics:

- Preview
- Props overview
- Additional information regarding the behavior of the component

To preview the UI-kit components on iOS and Android you can run:

- iOS:

  `yarn run-ios`

- Android:

  `yarn run-android`
