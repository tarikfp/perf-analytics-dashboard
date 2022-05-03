import { createWithThemeContext } from '@/utils';
import * as React from 'react';
import { API_DATA } from '../../../__mocks__';
import DataTable from '.';

const props = {
  data: API_DATA,
};

test('data table renders correctly', () => {
  const tree = createWithThemeContext(<DataTable {...props} />);
  expect(tree).toMatchSnapshot();
});
