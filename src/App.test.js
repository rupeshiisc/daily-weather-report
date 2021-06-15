import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

import WeatherDashboard from './components/WeatherDashboard';

Enzyme.configure({ adapter: new EnzymeAdapter()});
test('App component renders WeatherDashboard component', () => {
  const wrapper = shallow(<App/>);
  
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find(WeatherDashboard).length).toEqual(1);
});
