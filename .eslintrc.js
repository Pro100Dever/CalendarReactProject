module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier', 'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
  },
};