import { render } from '@testing-library/react';
import * as React from 'react';
import {
  createWithThemeContext,
  wrapWithThemeContext,
} from '../../utils/test-utils';
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
  const { getByText } = render(wrapWithThemeContext(<MetricCard {...props} />));
  expect(getByText(props.title)).toBeTruthy();
});
