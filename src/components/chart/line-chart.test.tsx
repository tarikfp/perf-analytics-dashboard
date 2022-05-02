import * as React from 'react';
import { API_DATA } from '../../../__mocks__/api-data';
import { createWithThemeContext } from '../../utils/test-utils';
import LineChart from './line-chart';

test('metric card renders correctly', () => {
  const tree = createWithThemeContext(
    <LineChart xAxisKey="createdAt" yAxisKey="duration" data={API_DATA} />,
  );
  expect(tree).toMatchSnapshot();
});
