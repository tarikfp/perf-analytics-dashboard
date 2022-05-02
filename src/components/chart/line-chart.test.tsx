import { API_DATA } from '@mocks';
import { createWithThemeContext } from '@utils';
import * as React from 'react';
import LineChart from './line-chart';

test('metric card renders correctly', () => {
  const tree = createWithThemeContext(
    <LineChart xAxisKey="createdAt" yAxisKey="duration" data={API_DATA} />,
  );
  expect(tree).toMatchSnapshot();
});
