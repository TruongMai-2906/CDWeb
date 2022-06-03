import React from 'react';
import styles from './Admin.module.scss';

export interface AdminProps {}

export interface AdminDataType {}

const Admin: React.FC<AdminProps> = (props) => (
  <div className={styles['root']}>Admin component</div>
);

export default Admin;