import { createWithThemeContext } from '@utils';
import * as React from 'react';
import Dashboard from '.';

test('dashboard page renders correctly', () => {
  const tree = createWithThemeContext(<Dashboard />);
  expect(tree).toMatchSnapshot();
});
