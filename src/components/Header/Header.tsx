import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/home/logo.png";
import classNames from "classnames";
import Search from "antd/lib/input/Search";
import { Link } from "react-router-dom";
import { post,getUserInfo } from "../../utilities/api.ts";
export interface HeaderProps {}

export interface HeaderDataType {
}
export interface UserInfoDataType{
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
  useEffect(() => {onUserInfo()},[])
  const onUserInfo = async () => {
    return await getUserInfo(`http://localhost:8080/api/user/me`).then(resp => setLogin(resp))
    // const json = await response.json();
  }



  return(
  <div className={styles["root"]}>
    <div className={classNames(styles["wrapper"], "g-container")}>
      <img src={logo} alt="Logo" className={styles["logo"]} />
      <div className={styles["navbar"]}>
        <Link to="/" className={styles["item"]}>
          <div className={styles["content"]}>Home</div>
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
        
        {login.id === -1 && <>
          <Link to="/login" className={styles["item"]}>
            <div className={styles["content"]}>Login</div>
          </Link>
          <Link to="/register" className={styles["item"]}>
            <div className={styles["content"]}>Register</div>
          </Link>
        </>}

        
        
      </div>
      <div className={styles["search"]}>
        <Search
          placeholder="input search text"
          onSearch={() => console.log("here")}
          style={{ width: 200 }}
        />
        {login.id != -1 && <div>{login.name}</div>}
        
      </div>
      
    </div>
  </div>
)};

export default Header;
