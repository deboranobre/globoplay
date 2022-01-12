// @ts-nocheck

import React, { ReactNode } from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import Menu from '../Menu/Index';

Enzyme.configure({ adapter: new Adapter() });
test('Menu component renders the menu', () => {
  const wrapper = mount(<Menu />);
  const menuList = wrapper.find('ul');
  const inputProps = menuList.props();

  expect(inputProps?.children?.length).toBe(5);
});
