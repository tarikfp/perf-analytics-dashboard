import { render, RenderResult } from '@testing-library/react';
import { ThemeContext } from '@theme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

const themeContextValue = {
  isDarkMode: false,
  toggleDarkMode: () => null,
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

export function renderWithThemeContext(
  children: React.ReactElement | React.ReactNode,
): RenderResult {
  return render(
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>,
  );
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
