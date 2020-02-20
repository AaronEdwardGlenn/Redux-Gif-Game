import React from 'react';
import { shallow } from 'enzyme';
import MoodsFn from './MoodsFn';
import { Provider } from 'react-redux';
import store from '../../store';

describe('MoodFn container', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><MoodsFn /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
