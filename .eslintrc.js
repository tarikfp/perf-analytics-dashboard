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
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'no-alert': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
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
    'jest.setup.js',
    'tarikfp-perf-analytics-module.js',
    'perf-analytics-module.js',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
