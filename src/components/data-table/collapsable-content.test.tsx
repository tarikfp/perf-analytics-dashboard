import { API_DATA } from '@mocks';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CollapsableContent from './collapsable-content';

const props = {
  isOpen: true,
  tableHeaderRows: ['test', 'test1'],
  data: API_DATA,
  title: 'test',
};

test('collapsable content renders correctly', () => {
  const tree = renderer.create(<CollapsableContent {...props} />);
  expect(tree).toMatchSnapshot();
});
