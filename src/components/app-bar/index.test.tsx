import { render } from '@testing-library/react';
import * as React from 'react';
import MenuAppBar from '.';
import {
  createWithThemeContext,
  wrapWithThemeContext,
} from '../../utils/test-utils';

test('app bar renders correctly', () => {
  const tree = createWithThemeContext(<MenuAppBar />);
  expect(tree).toMatchSnapshot();
});

test('app bar header text renders correctly', () => {
  const { getByText } = render(wrapWithThemeContext(<MenuAppBar />));
  expect(getByText('Performance analytics dashboard')).toBeTruthy();
});

test('app bar icon button renders correctly', () => {
  const { getByRole } = render(wrapWithThemeContext(<MenuAppBar />));
  expect(getByRole('button')).toBeTruthy();
});
