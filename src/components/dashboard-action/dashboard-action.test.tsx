import { createWithThemeContext, renderWithThemeContext } from '@/utils';
import * as React from 'react';
import DashboardAction from './dashboard-action';

// Date pickers have been tested internally by the mui pickers community.
// @see https://github.com/mui/material-ui-pickers/blob/next/lib/src/__tests__/DatePickerTestingLib.test.tsx

const props = {
  startDate: new Date(),
  endDate: new Date(),
  onStartDateChange: jest.fn(),
  onEndDateChange: jest.fn(),
  onFetchBetweenDatesClick: jest.fn(),
  onFetchLatestClick: jest.fn(),
};

test('date pickers renders correctly', () => {
  const tree = createWithThemeContext(<DashboardAction {...props} />);
  expect(tree).toMatchSnapshot();
});

test('submit button renders correctly', () => {
  const { getByText } = renderWithThemeContext(<DashboardAction {...props} />);
  expect(getByText('Create metric data')).toBeTruthy();
  expect(getByText('Fetch latest (last 30 mins)')).toBeTruthy();
  expect(getByText('Fetch between dates')).toBeTruthy();
});
