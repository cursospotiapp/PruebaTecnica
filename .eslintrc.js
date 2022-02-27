module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "eslint:recommended", "plugin:prettier/recommended"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.test.js"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
    },
  ],

  plugins: ["react", "react-hooks"],
  rules: {
    "no-unused-vars": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "jsx-a11y/aria-role": [
      2,
      {
        allowedInvalidRoles: ["text"],
        ignoreNonDOM: true,
      },
    ],
  },
};
