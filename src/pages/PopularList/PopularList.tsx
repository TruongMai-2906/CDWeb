import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
//@ts-ignore
import { API_IMG, API_URL } from "../../utilities/apiUrl.ts";
import { Movies } from "../ListFilm/Movie";
//@ts-ignore
import styles from "./PopularList.module.scss";
//@ts-ignore
import { get } from "../../utilities/api.ts";

export interface PopularListProps { }

export interface PopularListDataType { }

const PopularList: React.FC<PopularListProps> = (props) => {
  const [moviePopular, setMoviePopular] = useState<Movies[]>();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMoviePopular(data.slice(0,8));
      })
  }, [])

  const handleDetail = (e: string) => {
    navigate(`/detail/${e}`);
  };
  return (
    <div className={styles["trending"]}>
      <Link to="/">
        <h4 className={styles["trending-text"]}>
          Popular <BiRightArrowAlt></BiRightArrowAlt>
        </h4>
      </Link>
      <div className={styles["container"]}>
        {moviePopular?.map((movieItem) => (
          <div
            key={movieItem.slug}
            className={styles["items"]}
            onClick={() => {
              handleDetail(movieItem.slug);
            }}
          >
            <div className={styles["box"]}>
              <img
                className={styles["img-film"]}
                src={movieItem.posterUrl}
                alt={movieItem.title}
              />
              <div className={styles["film-title-box"]}>
                <div className={styles["film-title"]}>
                  <div className={styles["entry-title"]}>
                    {movieItem.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularList;
