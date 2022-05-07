import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/home/logo.png';
import classNames from 'classnames';
import Search from 'antd/lib/input/Search';
import { Link } from 'react-router-dom';

export interface HeaderProps {}

export interface HeaderDataType {}

const Header: React.FC<HeaderProps> = (props) => (
  <div className={styles['root']}>
    <div className={classNames(styles['wrapper'], "g-container")}>
      <img src={logo} alt="Logo" className={styles['logo']}/>
      <div className={styles['navbar']}>
        <Link to="/" className={styles['item']}><div className={styles['content']}>Home</div></Link>
        <Link to="/" className={styles['item']}><div className={styles['content']}>List Film</div></Link>
        <Link to="/" className={styles['item']}><div className={styles['content']}>Hot</div></Link>
        <Link to="/" className={styles['item']}><div className={styles['content']}>About Us</div></Link>
        <Link to="/" className={styles['item']}><div className={styles['content']}>Contact</div></Link>
      </div>
      <div className={styles['search']}>
        <Search placeholder="input search text" onSearch={() => console.log("here")} style={{ width: 200 }} />
      </div>
    </div>
  </div>
);

export default Header;