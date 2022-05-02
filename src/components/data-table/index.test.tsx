import * as React from 'react';
import DataTable from '.';
import { API_DATA } from '../../../__mocks__/api-data';
import { createWithThemeContext } from '../../utils/test-utils';

const props = {
  data: API_DATA,
};

test('data table renders correctly', () => {
  const tree = createWithThemeContext(<DataTable {...props} />);
  expect(tree).toMatchSnapshot();
});
