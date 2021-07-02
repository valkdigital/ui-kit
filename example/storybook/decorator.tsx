import React from "react";
import { Theme, ThemeContext } from "@valkdigital/ui-kit";
import { useColorScheme } from "react-native";
import { View } from "react-native";

const DarkModeDecorator: React.FC = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <ThemeContext.Provider
      value={colorScheme === "dark" ? Theme.dark : Theme.light}
    >
      <View
        style={{
          flex: 1,
          backgroundColor:
            colorScheme === "dark"
              ? Theme.dark.background
              : Theme.light.background,
        }}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

const decorator = (story: Function) => {
  return <DarkModeDecorator>{story()}</DarkModeDecorator>;
};

export default decorator;
