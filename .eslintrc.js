module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'consistent-return': 'error',
    'func-names': ['off', 'as-needed'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
