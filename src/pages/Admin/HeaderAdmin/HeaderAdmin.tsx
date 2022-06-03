import React from 'react';
//@ts-ignore
import styles from './HeaderAdmin.module.scss';

export interface HeaderAdminProps { }

export interface HeaderAdminDataType { }

const HeaderAdmin: React.FC<HeaderAdminProps> = (props) => (
  <div className={styles['root']}>
    <div className="navbar-custom">
      <ul className="list-unstyled topnav-menu float-right mb-0">
        <li className="d-none d-sm-block">
          <form className="app-search">
            <div className="app-search-box">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." />
                <div className="input-group-append">
                  <button className="btn" type="submit">
                    <i className="fe-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </li>
        <li className="dropdown d-none d-lg-block">
          <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            Baya
            <i className="mdi mdi-chevron-down"></i>
          </a>
          <div className="dropdown-menu">
            <a href="pages-404.html" className="dropdown-item">
              <span>Chọn cửa hàng</span>
            </a>
            <a href="pages-404.html" className="dropdown-item">
              <span>Baya</span>
            </a>
          </div>
        </li>
        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="assets\images\users\minh.jpg" alt="user-image" className="rounded-circle"/>
              <span className="pro-user-name ml-1">
                Hoàng Minh <i className="mdi mdi-chevron-down"></i>
              </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
           
            <a href="extras-profile.html" className="dropdown-item notify-item">
              <i className="remixicon-account-circle-line"></i>
              <span>Tài khoản</span>
            </a>
            <a href="pages-404.html" className="dropdown-item notify-item">
              <i className="remixicon-lock-unlock-line"></i>
              <span>Đổi mật khẩu</span>
            </a>
            <a href="pages-404.html" className="dropdown-item notify-item">
              <i className="remixicon-settings-3-line"></i>
              <span>Cài đặt</span>
            </a>

            <div className="dropdown-divider"></div>

            <a href="pages-logout.html" className="dropdown-item notify-item">
              <i className="remixicon-logout-box-line"></i>
              <span>Đăng xuất</span>
            </a>
          </div>
        </li>

        <li className="dropdown notification-list">
          <a href="pages-404.html" className="nav-link right-bar-toggle waves-effect waves-light">
            <i className="fe-settings noti-icon"></i>
          </a>
        </li>
      </ul>

      <div className="logo-box">
        <a href="index.html" className="logo text-center">
          <span className="logo-lg">
            <img src="assets\images\logo-white.png" alt="" height="35"/>
              <span className="logo-lg-text-light">Xeria</span> 
          </span>
          <span className="logo-sm">
            <span className="logo-sm-text-dark">X</span>
            <img src="assets\images\logo.png" alt="" height="24"/>
          </span>
        </a>
      </div>

      <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
        <li>
          <button className="button-menu-mobile waves-effect waves-light">
            <i className="fe-menu"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default HeaderAdmin;