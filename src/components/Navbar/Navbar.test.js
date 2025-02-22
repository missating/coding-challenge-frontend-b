// third-party libraries
import React from 'react';
import { mount } from 'enzyme';

// components
import NavBar from './index'

describe('NavBar Component', () => {
  it('should be rendered properly', () => {

    const wrapper = mount(<NavBar />);
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
})
