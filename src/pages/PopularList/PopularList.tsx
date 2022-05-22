import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { API_IMG, API_URL } from "../ListFilm/ListFilm.tsx";
import { Movies } from "../ListFilm/Movie";
import styles from "./PopularList.module.scss";
import { get } from "../../utilities/api.ts";

export interface PopularListProps {}

export interface PopularListDataType {}

const PopularList: React.FC<PopularListProps> = (props) => {
  const [moviePopular, setMoviePopular] = useState<Movies[]>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!moviePopular)
      get(API_URL).then((res) => setMoviePopular(res.data.results));
  }, []);

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
            key={movieItem.id}
            className={styles["items"]}
            onClick={() => {
              handleDetail(movieItem.id);
            }}
          >
            <div className={styles["box"]}>
              <img
                className={styles["img-film"]}
                src={API_IMG + movieItem.poster_path}
                alt={movieItem.title}
              />
              <div className={styles["film-title-box"]}>
                <div className={styles["film-title"]}>
                  <div className={styles["entry-title"]}>
                    {movieItem.title || movieItem.name}
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
