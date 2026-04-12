import { defineConfig } from "eslint/config";

const commonGlobals = {
  alert: "readonly",
  console: "readonly",
  document: "readonly",
  fetch: "readonly",
  module: "readonly",
  process: "readonly",
  require: "readonly",
  window: "readonly",
};

export default defineConfig([
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: commonGlobals,
    },
    rules: {
      "no-console": "off",
      "no-debugger": "warn",
      "no-undef": "error",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      
    },
  },
  {
    files: ["pages/api/**/*.js", "middleware/**/*.js"],
    languageOptions: {
      globals: {
        ...commonGlobals,
        __dirname: "readonly",
      },
    },
  },
]);
