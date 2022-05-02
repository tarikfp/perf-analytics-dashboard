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
  moduleNameMapper: {},
  setupFiles: ['./jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(test).ts?(x)',
    '**/?(*.)+(test).js?(x)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
};
