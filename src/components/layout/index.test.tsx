import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Layout from '.';

test('layout renders correctly', () => {
  const tree = renderer.create(<Layout />);
  expect(tree).toMatchSnapshot();
});
