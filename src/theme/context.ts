import * as React from 'react';

interface IThemeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

const useThemeContext = (): IThemeContext => {
  const theme = React.useContext<IThemeContext | undefined>(ThemeContext);
  if (!theme) {
    throw new Error('Could not find Theme Context Provider in the tree');
  }
  return theme;
};

export { useThemeContext, ThemeContext };
