import React from "react";
import styles from "./ListFilm.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movies } from "./Movie";
import { Link, useNavigate } from "react-router-dom";
import {BiRightArrowAlt} from "react-icons/bi"
import { get } from '../../utilities/api.ts';

// Api_URL
export const API_URL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=e8b29375ae37912b8558a83eca6ec2d0";
export const API_URL_POPULAR="https://api.themoviedb.org/3/movie/popular?api_key=e8b29375ae37912b8558a83eca6ec2d0&language=en-US&page=2"
export const API_IMG = "https://image.tmdb.org/t/p/w500/";

export interface ListFilmProps {}

export interface ListFilmDataType {}

const ListFilm: React.FC<ListFilmProps> = (props) => {
  const [movieTrending, setMovieTrending] = useState<Movies[]>();
  const [moviePopular, setMoviePopular] = useState<Movies[]>();
  const navigate = useNavigate();

  useEffect( () => {
    if (!movieTrending) get(API_URL).then((res) => setMovieTrending(res.data.results.slice(0,8)));
    if (!moviePopular) get(API_URL).then((res) => setMoviePopular(res.data.results.slice(0,8)));
   ;
  }, [])

  useEffect( () => {
    
    if (movieTrending) console.log("movie",movieTrending);
    
  }, [movieTrending])
  
  const handleDetail = (e: string) => {
    navigate(`/detail/${e}`);
  };
  return (
    <div className={styles["root"]}>
      <div className={styles["trending"]}>
      <Link to="/trending"><h4 className={styles["trending-text"]}>Trending <BiRightArrowAlt></BiRightArrowAlt></h4></Link>
        <div className={styles["container"]}>
          {movieTrending?.map((movieItem) => (
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
      <div className={styles["trending"]}>
      <Link to="/popular"><h4 className={styles["trending-text"]}>Popular <BiRightArrowAlt></BiRightArrowAlt></h4></Link>
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
    </div>
  );
};

export default ListFilm;
