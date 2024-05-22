const OFF = 0;

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.html'],
  },
  rules: {
    // add here rules that you don't want see on the repo
    '@typescript-eslint/no-unsafe-argument': OFF,
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/consistent-type-imports': OFF,
    'linebreak-style': ['error', 'windows'],
  },
  plugins: ['html', 'eslint-plugin-html'],
};
