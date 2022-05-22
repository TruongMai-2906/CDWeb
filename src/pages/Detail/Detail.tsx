import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// @ts-ignore
import tmdbApi from "../../utilities/tmdmApi.ts";
// @ts-ignore
import apiConfig from "../../utilities/apiConfig.ts";
// @ts-ignore
import styles from "./Detail.module.scss";
import { Link } from "react-router-dom";
import { FaYoutube, FaPlayCircle, FaArrowDown } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import classNames from "classnames";
// @ts-ignore
import Recommend from "../../components/Content/Recommend/Recommend.tsx";
// @ts-ignore
import Related from "../../components/Content/Related/Related.tsx";
import { Movies } from "../ListFilm/Movie";
import {IoIosArrowDown} from 'react-icons/io'

// Api_URL
const API_URL = (e: string) => {
  return `https://api.themoviedb.org/3/movie/${e}?api_key=e8b29375ae37912b8558a83eca6ec2d0&language=en-US`;
};
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

export interface DetailProps {}

export interface DetailDataType {
  id: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  genres: {
    name: string;
  }[];
  release_date: string;
  overview: string;
  production_companies: {
    name: string;
  }[];
  production_countries:{
    name: string
  }[]
}

const Detail: React.FC<DetailProps> = (props) => {
  const { category, id } = useParams();
  const [films, setFilm] = useState<DetailDataType>();
  console.log("useParam", id);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL(id))
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
        console.log("data-detail", data);
      });
  }, []);

  function myFunction() {
    var dots = document.getElementById(styles["dots"]);
    var moreText = document.getElementById(styles["more"]);
    var btnText = document.getElementById(styles["myBtn"]);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Mở rộng";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Thu gọn";
      moreText.style.display = "inline";
    }
  }
  const handleDetail = (e: string) => {
    navigate(`/watch/${e}`);
  };
  return (
    <div id={styles["main-content"]}>
      <div id={styles["block"]}>
        <div id={styles["left-content"]}>
          <div className={styles["container"]} id={styles["detail-page"]}>
            <div className={styles["film-infor"]}>
              <div className={styles["image"]}>
                <img
                  src={API_IMG + films?.backdrop_path}
                  className={styles["image-banner"]}
                  alt=""
                />
                <img
                  className={styles["avatar"]}
                  itemProp="image"
                  alt=""
                  src={API_IMG + films?.poster_path}
                />{" "}
                <a href="" className="icon-play" />
                <a href="" className={styles["icon-play"]}></a>
                <div className={styles["text-top"]}>
                  <h1 className={styles["name"]}>{films?.original_title}</h1>
                  <ul className={styles["list-button"]}>
                    <li>
                      <a
                        className="btn btn-download btn-info"
                        title={films?.original_title}
                      >
                        <FaYoutube color="white" style={{ margin: "0 3px" }} />
                        Trailer
                      </a>
                    </li>
                    <li>
                      <div
                       key={films?.id}
                        onClick={() => {
                          handleDetail(films?.id);
                        }}
                        className="btn-see btn btn-danger"
                        title={films?.original_title}
                      >
                        <FaPlayCircle /> Watch Now
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles["text"]}>
                <div
                  className={classNames(
                    styles["film-content"],
                    styles["block-film"]
                  )}
                  id="film-content-wrapper"
                >
                  <div className={styles["infor-film"]}>
                    <div className={styles["btn-groups"]}>
                      <div className={styles["fb-like"]}>
                        <AiFillLike color="#fff" />
                        Like 86
                      </div>
                      <div className={styles["fb-like"]}>
                        <AiFillLike color="#fff" />
                        Share
                      </div>
                    </div>
                    <ul className={styles["entry-meta"]}>
                      <div className={styles["column"]}>
                        <li>
                          <label>Playing: </label>
                          <span style={{ color: "red" }}> HD Vietsub</span>
                        </li>
                        <li>
                          <label>Type: </label>{" "}
                          <a href="" title="">
                            {" "}
                            {films?.genres.map((gen) => gen.name)}
                          </a>
                        </li>
                        <li>
                          <label>Release Year: </label>{" "}
                          <a href=""> {films?.release_date}</a>
                        </li>
                      </div>

                      <div className={styles["column"]}>
                        <li>
                          <label>Director: </label>
                          <span>
                            <a href="" title="Han Cheol Soo">
                              <span> {films?.production_companies.map((company) => company.name)}</span>
                            </a>
                            ,
                          </span>
                        </li>
                        <li>
                          <label>Country: </label>{" "}
                          <a href="" title="Phim Âu Mỹ">
                            {" "}
                            {films?.production_countries.map((country) => country.name)}
                          </a>
                        </li>
                      </div>
                      <div className={styles["column"]}>
                        <li>
                          <label>Actor: </label>{" "}
                          <a href="" title="">
                          {films?.production_companies.map((company) => company.name)}
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["content-film"]}>
                    <h3 className={styles["heading"]}>Content </h3>
                    <div id="film-content">
                      <p>{films?.overview}</p>

                      <div className={styles["item-content-toggle"]}>
                        <div className={styles["item-content-gradient"]}></div>
                        <span
                          onClick={myFunction}
                          id={styles["myBtn"]}
                          className={styles["show-more"]}
                          data-single="true"
                          data-showmore="Mở rộng"
                          data-showless="Thu gọn"
                        >
                          Extend<IoIosArrowDown/>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Related />
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
        <Recommend />
      </div>
    </div>
  );
};
export default Detail;
