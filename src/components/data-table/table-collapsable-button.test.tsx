import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TableCollapsableCell from './table-collapsable-button';

const props = {
  isOpen: true,
  onClick: jest.fn(),
};

test('table collapsable cell renders correctly', () => {
  const tree = renderer.create(<TableCollapsableCell {...props} />);
  expect(tree).toMatchSnapshot();
});
