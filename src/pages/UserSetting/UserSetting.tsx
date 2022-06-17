import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styles from "./UserSetting.module.scss";
import { CgProfile, CgHeart } from "react-icons/cg";
import { AiOutlineHistory, AiOutlineLogout } from "react-icons/ai";
import { RiExchangeBoxLine } from "react-icons/ri";

export interface UserSettingProps {}

export interface UserSettingDataType {}

const UserSetting: React.FC<UserSettingProps> = (props) => {
  const { category, id } = useParams();
  return (
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
                <Link to={`profile/${id}`} className={styles["edit-profile"]}>
                  Sửa hồ sơ
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["navbar"]}>
            <div className={styles["stardust-dropdown"]}>
              <div className={styles["stardust-dropdown__item-header"]}>
                <Link to={`profile/${id}`} className={styles["navbar-link"]}>
                  <CgProfile className={styles["icon-navbar"]} />
                  <div className={styles["item-navbar"]}>
                    <span className={styles["item-span"]}>Profile</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles["stardust-dropdown"]}>
              <div className={styles["stardust-dropdown__item-header"]}>
                <Link to="wishlist?action=show"
                  className={styles["navbar-link"]}
                >
                  <CgHeart className={styles["icon-navbar"]} />
                  <div className={styles["item-navbar"]}>
                    <span className={styles["item-span"]}>WishList</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles["stardust-dropdown"]}>
              <div className={styles["stardust-dropdown__item-header"]}>
                <Link to="history?action=show" className={styles["navbar-link"]}>
                  <AiOutlineHistory className={styles["icon-navbar"]} />
                  <div className={styles["item-navbar"]}>
                    <span className={styles["item-span"]}>History Watch</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles["stardust-dropdown"]}>
              <div className={styles["stardust-dropdown__item-header"]}>
                <Link to={`changpass/${id}`} className={styles["navbar-link"]}>
                  <RiExchangeBoxLine className={styles["icon-navbar"]} />
                  <div className={styles["item-navbar"]}>
                    <span className={styles["item-span"]}>Change Password</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles["stardust-dropdown"]}>
              <div className={styles["stardust-dropdown__item-header"]}>
                <a className={styles["navbar-link"]} href="/user/coin">
                  <AiOutlineLogout className={styles["icon-navbar"]} />
                  <div className={styles["item-navbar"]}>
                    <span className={styles["item-span"]}>Logout</span>
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
  );
};

export default UserSetting;
