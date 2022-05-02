import { createWithThemeContext, renderWithThemeContext } from '@utils';
import * as React from 'react';
import DatePickers from './date-picker';

// Date pickers have been tested internally by the mui pickers community.
// @see https://github.com/mui/material-ui-pickers/blob/next/lib/src/__tests__/DatePickerTestingLib.test.tsx

const props = {
  startDate: new Date(),
  endDate: new Date(),
  onStartDateChange: jest.fn(),
  onEndDateChange: jest.fn(),
  onSubmit: jest.fn(),
};

test('date pickers renders correctly', () => {
  const tree = createWithThemeContext(<DatePickers {...props} />);
  expect(tree).toMatchSnapshot();
});

test('submit button renders correctly', () => {
  const { getByText } = renderWithThemeContext(<DatePickers {...props} />);
  expect(getByText('Submit')).toBeTruthy();
});
