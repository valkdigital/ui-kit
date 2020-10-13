const { resolve } = require("path");
const { withUnimodules } = require("@expo/webpack-config/addons");

module.exports = ({ config }) => {
  const wUni = withUnimodules(config, {
    projectRoot: resolve(__dirname, "../"),
  });
  wUni.output.publicPath = "";
  return wUni;
};
