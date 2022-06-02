import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/home/icon.png";
import classNames from "classnames";
import Search from "antd/lib/input/Search";
import { Link } from "react-router-dom";
import { post, getUserInfo } from "../../utilities/api.ts";
import Form from "antd/lib/form/Form";
export interface HeaderProps {
  page: string;
}

export interface HeaderDataType {}
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
  };
  const [login, setLogin] = useState<UserInfoDataType>(defaultUser);
  useEffect(() => {
    onUserInfo();
  }, []);
  const onUserInfo = async () => {
    return await getUserInfo(`http://localhost:8080/api/user/me`).then((resp) =>
      setLogin(resp)
    );
    // const json = await response.json();
  };
  return (
    <div className={styles["root"]}>
      <div className={classNames(styles["wrapper"], "g-container")}>
        <Link style={{ display: "flex", verticalAlign: "middle" }} to="/">
          <img src={logo} alt="Logo" className={styles["logo"]}></img>
          <p className={styles["p-logo"]}>FilmHot</p>
        </Link>
        <div style={{ display: "flex" }}>
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
            <div className={styles["content"]} style={{ transform: "none", padding: "1rem"}}>
              {login.name}
            </div>
          )}
        </div>
      </div>
      <div className={styles["nav-menu"]}>
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
          {/* <Search
            className={styles["search"]}
            placeholder="Input keyword"
            onSearch={() => console.log("here")}
          /> */}
          <form id="search-form-pc" name="halimForm" role="search" method="GET">
            <div className="form-group">
              <div className="input-group col-xs-12">
                <input
                  id="search"
                  type="text"
                  name="s"
                  value=""
                  className={styles["form-control"]}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="Nhấn Enter để tìm kiếm"
                  placeholder="Input search text"
                  autoComplete="off"
                />
                <i className="animate-spin hl-spin4 hidden"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
