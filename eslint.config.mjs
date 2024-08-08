import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const rules = [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  },
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.browser
    },
    rules: {
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];

export default rules;
