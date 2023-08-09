import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <React.Fragment>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                color: '#3a3a3a',
                fontWeight: 'bold',
                background: 'none',
                border: 'none',
                fontSize: '15px',
                position: 'absolute',
                right: '3px',
                top: '3px',
                cursor: 'pointer',
                outline: 'none',
              }}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul className={css(styles.notificationsUl)}>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                  id={notification.id}
                />
              ))}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
  },
  notifications: {
    border: 'thin dotted #e0344a',
    padding: '4px 16px',
    float: 'right',
  },
  notificationsUl: {
    paddingLeft: '0',
    listStyle: 'none',
  },
  '@media (max-width: 900px)': {
    menuItem: {
      display: 'none',
    },
    notifications: {
      position: 'absolute',
      top: '50px',
      right: '0',
      left: '0',
      border: 'none',
      backgroundColor: 'white',
      width: 'auto',
      height: 'auto',
      margin: '0',
      padding: '10px',
      textAlign: 'left',
      display: 'block',
      float: 'none',
    },
  },
});

export default Notifications;

