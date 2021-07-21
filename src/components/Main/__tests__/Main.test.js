import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

describe('Main', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(<Main />);

    expect(wrapper).toMatchSnapshot();
  });
});
