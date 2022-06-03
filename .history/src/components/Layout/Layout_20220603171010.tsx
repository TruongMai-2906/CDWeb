import React from 'react';
import styles from './Layout.module.scss';

export interface LayoutProps {}

export interface LayoutDataType {}

const Layout: React.FC<LayoutProps> = (props) => (
  <div className={styles['root']}>Layout component</div>
);

export default Layout;