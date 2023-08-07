import React, { Component, Fragment } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import Login from "../Login/Login";
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <Notifications listNotifications={this.listNotifications} />
        <Header />
        {isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
        <Footer />
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
