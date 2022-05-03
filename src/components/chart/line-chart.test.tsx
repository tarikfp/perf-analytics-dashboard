import { createWithThemeContext } from '@/utils';
import * as React from 'react';
import { API_DATA } from '../../../__mocks__';
import LineChart from './line-chart';

test('line chart renders correctly', () => {
  const tree = createWithThemeContext(
    <LineChart xAxisKey="createdAt" yAxisKey="duration" data={API_DATA} />,
  );
  expect(tree).toMatchSnapshot();
});
