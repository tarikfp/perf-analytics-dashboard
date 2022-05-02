import { createWithThemeContext, renderWithThemeContext } from '@utils';
import * as React from 'react';
import MenuAppBar from '.';

test('app bar renders correctly', () => {
  const tree = createWithThemeContext(<MenuAppBar />);
  expect(tree).toMatchSnapshot();
});

test('app bar header text renders correctly', () => {
  const { getByText } = renderWithThemeContext(<MenuAppBar />);
  expect(getByText('Performance analytics dashboard')).toBeTruthy();
});

test('app bar icon button renders correctly', () => {
  const { getByRole } = renderWithThemeContext(<MenuAppBar />);
  expect(getByRole('button')).toBeTruthy();
});
