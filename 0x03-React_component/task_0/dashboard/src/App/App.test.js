import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('App tests', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it('renders Notifications component', () => {
    const component = shallow(<App />);
    expect(component.find(Notifications)).toHaveLength(1);
  });

  it('renders Header component', () => {
    const component = shallow(<App />);
    expect(component.find(Header)).toHaveLength(1);
  });

  it('renders Login Component when not logged in', () => {
    const component = shallow(<App />);
    expect(component.find(Login)).toHaveLength(1);
  });

  it('renders Footer component', () => {
    const component = shallow(<App />);
    expect(component.find(Footer)).toHaveLength(1);
  });

  it('renders CourseList when logged in', () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.find(CourseList)).toHaveLength(1);
    expect(component.find(Login)).toHaveLength(0);
  });

  it('does not render CourseList when not logged in', () => {
    const component = shallow(<App />);
    expect(component.find(CourseList)).toHaveLength(0);
  });
});

