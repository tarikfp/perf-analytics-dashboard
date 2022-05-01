module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/function-component-definition': 0,
    'no-console': 2,
    'import/prefer-default-export': 0,
  },
  ignorePatterns: [
    'node_modules/',
    '.eslintrc.js',
    '.prettierrc.js',
    'babel.config.js',
    'commitlint.config.js',
    'jest.config.js',
  ],
};
