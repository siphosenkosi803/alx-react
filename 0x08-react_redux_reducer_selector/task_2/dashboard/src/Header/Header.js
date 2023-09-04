import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.logo)} src={logo} alt='logo' />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: '1.4rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
  title: {
    margin: '0',
  },
});

export default Header;

