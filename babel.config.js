module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '*': '.',
          '@root': './',
          '@src': './src',
          '@api': './src/api',
          '@components': './src/components',
          '@pages': './src/pages',
          '@theme': './src/theme/index.ts',
          '@types': './src/types/index.ts',
          '@utils': './src/utils/index.ts',
          '@mocks': './__mocks__/index.ts',
        },
      },
    ],
  ],
};
