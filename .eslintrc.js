module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/function-component-definition': 0,
    'no-console': 2,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-props-no-spreading': 0,
    'no-alert': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-curly-newline': 0,
    'react/require-default-props': 0,
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
