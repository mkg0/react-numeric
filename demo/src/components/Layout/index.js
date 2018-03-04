import React from 'react';
import styles from './layout.css';

const Layout = props => {
  return (
    <div className={styles.wrapper}>
        {props.children}
    </div>
  );
};

export default Layout;