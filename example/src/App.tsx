import React, { useEffect } from "react";
import * as Font from "expo-font";
import StorybookUIRoot from "../storybook";
import { Spacing, Fonts } from "vex-ui";

export default function App() {
  useEffect(() => {
    console.log(Spacing.sp1);
    const loadFonts = async () => {
      await Font.loadAsync({
        [Fonts.Bold]: require("../assets/fonts/SourceSansPro-Bold.ttf"),
        [Fonts.Regular]: require("../assets/fonts/SourceSansPro-Regular.ttf"),
        [Fonts.SemiBold]: require("../assets/fonts/SourceSansPro-SemiBold.ttf"),
      });
    };
    loadFonts();
  }, []);

  return <StorybookUIRoot />;
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //   </View>
  // );
}
