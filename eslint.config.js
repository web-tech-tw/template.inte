import configNymph from "eslint-config-nymph";
import pluginJsdoc from "eslint-plugin-jsdoc";
import pluginVue from "eslint-plugin-vue";

export default [
  configNymph,
  pluginJsdoc.configs["flat/recommended"],
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      "max-len": "off",
      "linebreak-style": 1,
      "indent": ["error", 2],
      "quotes": ["error", "double"],
    },
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
  },
];
