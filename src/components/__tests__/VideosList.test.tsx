// @ts-nocheck

import React, { ReactNode } from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import VideosList from '../VideosList/Index';

Enzyme.configure({ adapter: new Adapter() });
test('VideosList component renders the videos', () => {
  const wrapper = mount(<VideosList />);
  const videoList = wrapper.find('ul');
  const videoProps = videoList.props();

  expect(videoProps?.children?.length).toBe(5);
});
