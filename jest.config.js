const { defaults: tsjPreset } = require('ts-jest/presets');
module.exports = {
  ...tsjPreset,
  verbose: true,
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@utils$': '<rootDir>/src/utils/index',
    '^@theme$': '<rootDir>/src/theme/index',
    '^@types$': '<rootDir>/src/types/index',
    '^@mocks$': '<rootDir>/__mocks__/index',
  },
  setupFiles: ['./jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(test).ts?(x)',
    '**/?(*.)+(test).js?(x)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
};
