import React, { ReactNode } from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import BBBInfo from '../BBBInfo/Index';

Enzyme.configure({ adapter: new Adapter() });
test('BBBInfo component renders the image BBB', () => {
  const wrapper = mount(<BBBInfo />);
  const image = wrapper.find('img');
  const imageProps = image.props();

  expect(imageProps['alt']).toBe('BBB');
});

test('BBBInfo component renders the paragraph', () => {
  const wrapper = mount(<BBBInfo />);
  const paragraph = wrapper.find('p');
  const paragraphProps = paragraph.props();

  expect(paragraphProps.children).toBe('Acompanhe 24h ao vivo a casa mais vigiada do Brasil');
});

test('BBBInfo component renders the button "Assista" ', () => {
  const wrapper = mount(<BBBInfo />);
  const buttonView = wrapper.find('button').first();
  const buttonViewProps = buttonView.props();

  expect(buttonViewProps.children).toBe('Assista');
});

test('BBBInfo component renders the button view more "Veja Mais" ', () => {
  const wrapper = mount(<BBBInfo />);
  const buttonViewMore = wrapper.find('button').last();
  const buttonViewMoreProps = buttonViewMore.props();

  expect(buttonViewMoreProps.children).toBe('Veja mais');
});
