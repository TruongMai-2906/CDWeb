import React, { useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/home/icon.png";
import classNames from "classnames";
import Search from "antd/lib/input/Search";
import { Menu, Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { post, getUserInfo } from "../../utilities/api.ts";
import { RiArrowDownSFill } from "react-icons/ri"
import { BiHistory, BiLogIn } from "react-icons/bi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Form from "antd/lib/form/Form";
import tmdbApi, { category, movieType, tvType } from '../../utilities/tmdmApi.ts';
export interface HeaderProps {
  page: string;
  keyword: string;
  category: string;
}

export interface HeaderDataType {
}
export interface UserInfoDataType {
  id?: number;
  name: string;
  username: string;
}


const Header: React.FC<HeaderProps> = (props) => {

  const defaultUser: UserInfoDataType = {
    id: -1,
    name: "",
    username: "",
  }
  const [login, setLogin] = useState<UserInfoDataType>(defaultUser)
  useEffect(() => { onUserInfo() }, [])

  const [keyword, setKeywword] = useState(props.keyword ? props.keyword : '');
  const history = useNavigate();
  const goToSearch = useCallback(
    () => {
      if (keyword.trim().length > 0) {
        history.call(`/${category[props.category]}/search/${keyword}`);
      }
    },
    [keyword, props.category, history]
  );
  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    }
    document.addEventListener('keyup', enterEvent);
    return () => {
      document.removeEventListener('keyup', enterEvent);
    };
  }, [keyword, goToSearch]);
  
  const onUserInfo = async () => {
    return await getUserInfo(`http://localhost:8080/api/user/me`).then(resp => setLogin(resp))
    // const json = await response.json();
  }
  const logout = () => {
    localStorage.clear;
  }

  return (
    <div className={styles["root"]}>
      <div className={classNames(styles["wrapper"], "g-container")}>
        <Link style={{ display: "flex", verticalAlign: "middle" }} to="/">
          <img src={logo} alt="Logo" className={styles["logo"]}></img>
          <p className={styles["p-logo"]}>FilmHot</p>
        </Link>
        <div style={{ display: "flex" }}>
          {login.id === -1 && <>
            <Link to="/login" className={styles["item"]}>
              <div className={styles["content"]}>Login</div>
            </Link>
            <Link to="/register" className={styles["item"]}>
              <div className={styles["content"]}>Register</div>
            </Link>
          </>}
          {login.id != -1 &&

            <div style={{ display: "flex", color: "#fff" }}>
              <div className={classNames(styles["icon-headerr"], styles["flex"])}>Hi {login.name}</div>
              <div style={{ margin: "0 5px"}}>
              <BiHistory className={styles["icon-header"]} />
              </div>
              <div style={{margin: " 0 5px"}}>
              <BiLogIn onClick={logout} className={styles["icon-header"]}/>
              </div>
            </div>
          }
        </div>
      </div>
      <div className={styles['nav-menu']}>
        <div className={styles["navbar"]}>
          <Link to="/home" className={styles["item"]}>
            <div className={classNames(styles["content"])}>Home</div>
          </Link>
          <Link to="/listfilm" className={styles["item"]}>
            <div className={styles["content"]}>List Film</div>
          </Link>
          <Link to="/" className={styles["item"]}>
            <div className={styles["content"]}>Hot</div>
          </Link>
          <Link to="/" className={styles["item"]}>
            <div className={styles["content"]}>About Us</div>
          </Link>
          <Link to="/" className={styles["item"]}>
            <div className={styles["content"]}>Contact</div>
          </Link>

        </div>
        <div className={styles["search"]}>
          <form id="search-form-pc" name="halimForm" role="search" method="GET">
            <div className="form-group">
              <div className="input-group col-xs-12" >
                {/* <AiOutlineSearch /> */}
                <input id="search"
                  className={styles["form-control"]}
                  placeholder="Input search text"
                  value={keyword}
                  onChange={(e) => setKeywword(e.target.value)}
                  onClick={goToSearch}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
};

export default Header;
