import React, { useEffect, useState } from "react";
import styles from "./WishList.module.scss";
import { post } from "../../../utilities/api.ts";
import { Movies } from "../../../pages/ListFilm/Movie.ts";

export interface WishListProps {}

export interface WishListDataType {}

const WishList: React.FC<WishListProps> = (props) => {
  const [wishListData, setWishList] = useState<Movies[]>();
  useEffect(() => {
    addMovieToWishList();
  }, []);
  const addMovieToWishList = async () => {
    const wishList = await post(
      `http://localhost:8080/api/wishlist/findAll?action=show`,
      { id: parseInt(localStorage.getItem("userId") || "-1") }
    );
    setWishList(wishList.data);
    console.log("wishlist", wishList.data);
  };
  wishListData?.reverse().map((item, index) => console.log(item.movie.title));
  return (
    <div className={styles["root"]}>
      <div className={styles["profile-title"]}>
        <h1>Wish List</h1>
        <div className={styles["title-detail"]}>
          Manage wish list information
        </div>
      </div>
      {wishListData?.slice(0).reverse().map((item) => (
      
        <div className={styles["courses-container"]}>
          <div className={styles["course"]}>
            <img
              className={styles["course-preview"]}
              style={{ width: "200px", height: "150px" }}
              src={item.movie.backdropUrl}
              alt=""
            />
            <div className={styles["course-info"]}>
              <h3>{item.movie.title}</h3>
              <button className={styles["btn"]}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
