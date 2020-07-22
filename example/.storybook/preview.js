import React, { useEffect, useState } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { addDecorator } from "@storybook/react";
import * as Font from "expo-font";

// your theme provider
import { ThemeContext, ThemeManager, Spacing, Text } from "vex-ui";
// create a component that uses the dark mode hook
const ThemeWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const darkmodeOn = useDarkMode();
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "source-sans-bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
        "source-sans-regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
        "source-sans-semibold": require("../assets/fonts/SourceSansPro-SemiBold.ttf"),
      });
    };

    const setupTheme = () => {
      ThemeManager.setTheme({
        light: {
          cta: {
            primaryColor: "rgba(248, 148, 6, 1)",
            secondaryColor: "blue",
          },
        },
        dark: {
          cta: {
            primaryColor: "coral",
            secondaryColor: "purple",
          },
        },
      });
    };
    setupTheme();
    loadFonts();
    setLoading(false);
  }, []);
  if (loading) return <Text>Setting theme..</Text>;
  return (
    <ThemeContext.Provider
      value={{
        ...ThemeManager.getTheme(darkmodeOn ? "dark" : "light"),
        spacing: Spacing,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

addDecorator((renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>);
