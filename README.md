# vex-ui

A fully typed component library for react native (web) development.
With the use of React.Context you can provide a custom theme to your project.

## Setup

Instruction for using the library

### Font

This project uses Source Sanse Pro. When adding the font to your project use the same names as in the `typograpgy.ts` file.
When setting the font from code (expo project) than u can use the enum from `typography.ts`.

### Theme

The components are expecting a context where they can extract the theme from.
Wrap your app with a provider and your theme as value. As you can see in the next examples it's easy.

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

Set the theme (dark/light) from the ThemeManager as value and place the provider arround your app.

```
<ThemeContext.Provider
    value={
    ThemeManager.getTheme(darkmodeOn ? "dark" : "light"),
    }
>
    <YourAwsomeApp />
</ThemeContext.Provider>
```

That's all!

## Playground

The playground is an expo project with storybook.
With the use of storybook each component has the following topics (web storybook):

- Preview
- Props overview
- Additional information regarding the behavior of the component (optional)

go to the `playground` folder and run: `yarn && yarn storybook` to see the components.
