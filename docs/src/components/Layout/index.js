import React from 'react';
import styles from './layout.css';
import './fonts.css';

const Layout = props => {
  return (
    <div className={styles.wrapper}>
        {props.children}
    </div>
  );
};

export default Layout;