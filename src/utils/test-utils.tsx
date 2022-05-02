import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeContext } from '../theme';

const themeContextValue = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

// helpers to create test component with theme context

export function createWithThemeContext(
  children: React.ReactElement | React.ReactNode,
): renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null {
  return renderer
    .create(
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>,
    )
    .toJSON();
}

export function wrapWithThemeContext(
  children: React.ReactElement | React.ReactNode,
): React.ReactElement {
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
