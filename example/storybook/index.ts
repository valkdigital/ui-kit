import { getStorybookUI, configure } from "@storybook/react-native";
// import { AsyncStorage } from "react-native";

// import stories
configure(() => {
  require("./stories");
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI

const StorybookUIRoot = getStorybookUI({
  // @ts-ignore
  // asyncStorage: AsyncStorage,
});

export default StorybookUIRoot;
