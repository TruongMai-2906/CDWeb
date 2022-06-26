import React from 'react';
import styles from './History.module.scss';

export interface HistoryProps {}

export interface HistoryDataType {}

const History: React.FC<HistoryProps> = (props) => (
  <div className={styles['root']}>History component</div>
);

export default History;