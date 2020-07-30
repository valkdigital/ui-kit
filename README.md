# vex-ui

A fully typed component library for react native (web) development.
With the use of React.Context you can provide a custom theme to your project.

## Setup

Instruction for using the library

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

#### Set custom theme

Set a light and/or a dark theme.

```
 ThemeManager.setTheme({
        light: YourAwsomeLightTheme,
        dark: YourAwsomeDarkTheme
      });
    };
```

#### Provider

Get the theme value (dark/light) from the ThemeManager and place the provider around your app.

```
<ThemeContext.Provider
    value={
    ThemeManager.getTheme(darkmodeOn ? "dark" : "light"),
    }
>
    <YourAwesomeApp />
</ThemeContext.Provider>
```

That's all!

## Playground

You can see an extensive documented web preview of the component library by running `yarn && yarn storybook` in the examples directory. With the use of storybook you'll be able to see each component with the following topics:

- Preview
- Props overview
- Additional information regarding the behavior of the component (optional)

For a preview of what the components look like on iOS and Android you can run:

- iOS:

  `yarn ios`

- Android:

  `yarn android`
