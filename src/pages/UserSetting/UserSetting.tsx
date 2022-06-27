import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import styles from "./UserSetting.module.scss";
import { CgProfile, CgHeart } from "react-icons/cg";
import { AiOutlineHistory, AiOutlineLogout } from "react-icons/ai";
import { RiExchangeBoxLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export interface UserSettingProps {}

export interface UserSettingDataType {}

const UserSetting: React.FC<UserSettingProps> = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <nav>
      <div style={{ background: "#E7E6E6" }}>
        <div className={styles["container-setting"]}>
          <div className={styles["avatar"]}>
            <div className={styles["avatar-wrapper"]}>
              <a className={styles["avatar-img"]} href="/user/account/profile">
                <div className={styles["profile-avatar"]}>
                  <img
                    className={styles["profile-avatar__img"]}
                    src="https://cf.shopee.vn/file/b85d1a89e8a2e0ea6ce0881507f5f4fa_tn"
                  />
                </div>
              </a>
              <div className={styles["avatar-name"]}>
                <div className={styles["avatar-name-text"]}>trung926</div>
                <div>
                  <Link
                    to={`profile/${localStorage.getItem("userId")}`}
                    className={styles["edit-profile"]}
                  >
                    {t("setting.editprofile")}
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles["navbar"]}>
              <div className={styles["stardust-dropdown"]}>
                <div className={styles["stardust-dropdown__item-header"]}>
                  <NavLink
                    to={`profile/${localStorage.getItem("userId")}`}
                    className={({ isActive }) => 
                      (isActive ? styles["navbar-link"] : styles["not-navbar-link"])}
                  >
                    <CgProfile className={styles["icon-navbar"]} />
                    <div className={styles["item-navbar"]}>
                      <span className={styles["item-span"]}>
                        {t("setting.profile")}
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className={styles["stardust-dropdown"]}>
                <div className={styles["stardust-dropdown__item-header"]}>
                  <NavLink
                    to="wishlist?action=show"
                    className={({ isActive }) => 
                      (isActive ? styles["navbar-link"] : styles["not-navbar-link"])}
                  >
                    <CgHeart className={styles["icon-navbar"]} />
                    <div className={styles["item-navbar"]}>
                      <span className={styles["item-span"]}>
                        {t("setting.wishlist")}
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className={styles["stardust-dropdown"]}>
                <div className={styles["stardust-dropdown__item-header"]}>
                  <NavLink
                    to="history?action=show"
                    className={({ isActive }) => 
                      (isActive ? styles["navbar-link"] : styles["not-navbar-link"])}
                  >
                    <AiOutlineHistory className={styles["icon-navbar"]} />
                    <div className={styles["item-navbar"]}>
                      <span className={styles["item-span"]}>
                        {t("setting.historywatch")}
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className={styles["stardust-dropdown"]}>
                <div className={styles["stardust-dropdown__item-header"]}>
                  <NavLink
                    to={`changpass/${localStorage.getItem("userId")}`}
                    className={({ isActive }) => 
                      (isActive ? styles["navbar-link"] : styles["not-navbar-link"])}
                  >
                    <RiExchangeBoxLine className={styles["icon-navbar"]} />
                    <div className={styles["item-navbar"]}>
                      <span className={styles["item-span"]}>
                        {t("setting.changpass")}
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className={styles["stardust-dropdown"]}>
                <div className={styles["stardust-dropdown__item-header"]}>
                  <a className={styles["not-navbar-link"]} href="/user/coin">
                    <AiOutlineLogout className={styles["icon-navbar"]} />
                    <div className={styles["item-navbar"]}>
                      <span className={styles["item-span"]}>
                        {t("setting.logout")}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="setting-content" style={{ flex: "6" }}>
            <div className={styles["info-content"]}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserSetting;
