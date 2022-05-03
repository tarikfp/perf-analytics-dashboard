import { createWithThemeContext, renderWithThemeContext } from '@/utils';
import * as React from 'react';
import MetricCard from './metric-card';

const props = {
  isLoading: false,
  title: 'metric-card',
};

test('metric card renders correctly', () => {
  const tree = createWithThemeContext(<MetricCard {...props} />);
  expect(tree).toMatchSnapshot();
});

test('metric card title text renders correctly', () => {
  const { getByText } = renderWithThemeContext(<MetricCard {...props} />);
  expect(getByText(props.title)).toBeTruthy();
});
