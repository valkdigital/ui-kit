const path = require("path");
const fs = require("fs");

const node_modules = path.resolve(__dirname, "..", "node_modules");
module.exports = {
  stories: ["../stories/*.stories.(tsx|mdx)"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["babel-preset-expo", { flow: false, typescript: true }]],
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            // Provide the path to your tsconfig.json so that your stories can
            // display types from outside each individual story.
            tsconfigPath: path.resolve(__dirname, "../../tsconfig.json"),
          },
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    Object.assign(config.resolve.alias, {
      "react": path.resolve(node_modules, "react"),
      "react-native": path.resolve(node_modules, "react-native-web"),
      "react-native-web": path.resolve(node_modules, "react-native-web"),
      "@expo/vector-icons": path.resolve(node_modules, "react-native-vector-icons"),
    });

    return config;
  },
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    '@storybook/addon-viewport',
    "storybook-addon-designs/register",
    "storybook-dark-mode/register",
  ],
};
