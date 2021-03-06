/* config-overrides.js */
const { useBabelRc, override, useEslintRc } = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = override(useBabelRc(), (config, env) =>
  rewireReactHotLoader(config, env)
);
