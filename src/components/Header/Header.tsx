import React, { useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/home/icon.png";
import classNames from "classnames";
import Search from "antd/lib/input/Search";
import { Menu, Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { post, getUserInfo } from "../../utilities/api.ts";
import { RiArrowDownSFill } from "react-icons/ri";
import { BiHistory, BiLogIn } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Form from "antd/lib/form/Form";
import {MdOutlineManageAccounts} from 'react-icons/md'
import {GrClose} from 'react-icons/gr';
import tmdbApi, {
  category,
  movieType,
  tvType,
} from "../../utilities/tmdmApi.ts";
export interface HeaderProps {
  page: string;
  keyword: string;
  category: string;
}

export interface HeaderDataType {}
export interface UserInfoDataType {
  id?: number;
  name: string;
  username: string;
  roles: {
    id: number;
    name: string;
  }[];
}

const Header: React.FC<HeaderProps> = (props) => {
  const defaultUser: UserInfoDataType = {
    id: -1,
    name: "",
    username: "",
    roles: [],
  };
  const [login, setLogin] = useState<UserInfoDataType>(defaultUser);
  const [userId, setUserId] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("here");
    
  };

  useEffect(() => {
    if (login.id == -1) {
      onUserInfo();
      checkUserId();
    }
  }, []);

  const history = useNavigate();
  const navigate = useNavigate();

  const checkUserId = async () => {
    const checkId = await getUserInfo(`http://localhost:8080/api/user/me`).then(
      (data: {id:string}) =>{
        setUserId(data.id)
      }
    )
  }
  console.log("id la:", userId);
  
  const onUserInfo = async () => {
    const checkMe = await getUserInfo(`http://localhost:8080/api/user/me`).then(
      (data: UserInfoDataType) => {
        setLogin(data);
      }
    );
  };
  const logout = () => {
    navigate("/");
    window.localStorage.clear(); //clear all localstorage
    window.localStorage.removeItem("accessToken"); //remove one item
    window.location.reload();
  };
  const handleDetail = (e: string) => {
    navigate(`/user/account/profile/${e}`);
  };
 
  

  return (
    <div className={styles["root"]}>
      <div className={classNames(styles["wrapper"], "g-container")}>
        <Link style={{ display: "flex", verticalAlign: "middle" }} to="/">
          <img src={logo} alt="Logo" className={styles["logo"]}></img>
          <p className={styles["p-logo"]}>FilmHot</p>
        </Link>
        <div className={styles["hamburger"]} onClick={handleToggle}>
          <div className="icon" />
        </div>
        <div className={styles["login-container"]}>
          {login.id === -1 && (
            <>
              <Link to="/login" className={styles["item"]}>
                <div className={styles["content"]}>Login</div>
              </Link>
              <Link to="/register" className={styles["item"]}>
                <div className={styles["content"]}>Register</div>
              </Link>
            </>
          )}
          {login.id != -1 && (
            <div style={{ display: "flex", color: "#fff" }}>
              <div
                className={classNames(styles["icon-headerr"], styles["flex"])}
              >
                Hi {login.name}
              </div>
              <div style={{ margin: "0 5px" }}>
                <BiHistory className={styles["icon-header"]} />
              </div>
              <a style={{ margin: "0 5px" }} onClick={()=>{handleDetail(userId)}}>
                <MdOutlineManageAccounts className={styles["icon-header"]} />
              </a>
              <div style={{ margin: " 0 5px" }}>
                <BiLogIn onClick={logout} className={styles["icon-header"]} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={classNames(styles["nav-menu"], isOpen ? styles["nav-menu"] : "")}>
        <div className={styles["navbar"]}>
          <Link to="/" className={styles["item"]}>
            <div className={classNames(styles["content"])}>Home</div>
          </Link>
          <Link to="/listfilm" className={styles["item"]}>
            <div className={styles["content"]}>List Film</div>
          </Link>
          {/* <Link to="/" className={styles["item"]}>
            <div className={styles["content"]}>Hot</div>
          </Link>
          <Link to="/" className={styles["item"]}>
            <div className={styles["content"]}>About Us</div>
          </Link>
          <Link to="/" className={styles["item"]}>
            <div className={styles["content"]}>Contact</div>
          </Link> */}
          {login.id != -1 && login.roles[0].name == "ROLE_ADMIN" && (
            <Link to="/admin" className={styles["item"]}>
              <div className={styles["content"]}>Admin</div>
            </Link>
          )}
        </div>
        <div className={styles["search"]}>
          <form id="search-form-pc" name="halimForm" role="search" method="GET">
            <div className="form-group">
              <div className="input-group col-xs-12">
                {/* <AiOutlineSearch /> */}
                <input
                  id="search"
                  className={styles["form-control"]}
                  placeholder="Input search text"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {isOpen && 
        <div className={styles["navbar-mobile"]}>
          <div className={styles["close-btn"]}><GrClose onClick={handleToggle} className={styles["close"]} /></div>
          <div className={styles["navbar-mobile-container"]}>
            <Link to="/" className={styles["item-mobile"]} onClick={handleToggle}>
              <div className={classNames(styles["content-mobile"])}>Home</div>
            </Link>
            <Link to="/listfilm" className={styles["item-mobile"]} onClick={handleToggle}>
              <div className={styles["content-mobile"]}>List Film</div>
            </Link>
            {/* <Link to="/" className={styles["item-mobile"]} onClick={handleToggle}>
              <div className={styles["content-mobile"]}>Hot</div>
            </Link>
            <Link to="/" className={styles["item-mobile"]} onClick={handleToggle}>
              <div className={styles["content-mobile"]}>About Us</div>
            </Link> */}
            <a className={styles["item-mobile"]} onClick={()=>{handleDetail(userId)}}>
              <div className={styles["content-mobile"]}>Account</div>
            </a>
            <Link to="/login" className={styles["item-mobile"]} onClick={handleToggle}>
              <div className={styles["content-mobile"]}>Login</div>
            </Link>
            <Link to="/register" className={styles["item-mobile"]} onClick={handleToggle}>
              <div className={styles["content-mobile"]}>Register</div>
            </Link>
            {login.id != -1 && login.roles[0].name == "ROLE_ADMIN" && (
              <Link to="/admin" className={styles["item-mobile"]} onClick={handleToggle}>
                <div className={styles["content-mobile"]}>Admin</div>
              </Link>
            )}
          </div>
        </div>}
    </div>
  );
};

export default Header;