import React from 'react';
import styles from './HeaderAdmin.module.scss';

export interface HeaderAdminProps {}

export interface HeaderAdminDataType {}

const HeaderAdmin: React.FC<HeaderAdminProps> = (props) => (
  <div className={styles['root']}>HeaderAdmin component</div>
);

export default HeaderAdmin;