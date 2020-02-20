import React from 'react';
import { shallow } from 'enzyme';
import GamePage from './gamePage';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('G component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><GamePage /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
