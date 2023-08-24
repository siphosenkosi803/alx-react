import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem Component Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" id={1} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" id={1} />);
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toEqual('default');
    expect(li.text()).toEqual('test');
  });

  it('renders html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} id={1} />);
    const li = wrapper.find('li');
    expect(li.exists()).toBeTruthy();
    expect(li.prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
  });

  it('calls markAsRead with the correct ID when clicked', () => {
    const id = 2;
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem type="default" value="test" id={id} />);
    wrapper.instance().markAsRead = markAsReadSpy;
    wrapper.find('li').simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });
});

