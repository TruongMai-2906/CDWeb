import React, { useEffect, useRef, useState } from "react";
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
import { IoIosArrowDown } from 'react-icons/io'
import ReactPlayer from "react-player";
import { WatchFilmDataType } from "../WatchFilm/WatchFilm.tsx";
// import { WatchFilmDataType } from "../WatchFilm/WatchFilm.tsx";
import { scroller } from "react-scroll";

// Api_URL
const API_URL = (e: string) => {
  return `http://localhost:8080/api/movie/${e}`;
};

export interface DetailProps { }

export interface DetailDataType {
  id: string;
  slug: string;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  genres: {
    name: string;
  }[];
  releaseDate: string;
  overview: string;
  productionCompanies: {
    name: string;
  }[];
  productionCountries: {
    name: string;
  }[]
  // slug: number,
  url: string
}

const Detail: React.FC<DetailProps> = (props) => {
  const { category, slug } = useParams();
  const [films, setFilm] = useState<DetailDataType>();
  // console.log("useParam", id);
  const navigate = useNavigate();
  const [urlMovie, setUrlMovie] = useState<WatchFilmDataType>()

  useEffect(() => {
    fetch(API_URL(slug))
      .then((res) => res.json())
      .then((films) => {
        setFilm(films);
        // console.log("data-detail", data);
      });
  }, []);

  const [state, setState] = useState({
    playing: true,
  });
  const { playing } = state;

  const [currentTime, setCurrentTime] = useState<number>(0);
  const playerRef = useRef<ReactPlayer>(null);
  const [duration, setDuration] = useState<any>();
  const [progress, setProgress] = useState<any>();
  const [secondsElapsed, setSecondsElapsed] = useState<any>();

  const handleDetail = (e: string) => {
    navigate(`/watch/${e}`);
  };

  const scrollToSection = () => {
    scroller.scrollTo(styles["trailer"], {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div id={styles["main-content"]}>
      {films && <div id={styles["block"]}>
        <div id={styles["left-content"]}>
          <div className={styles["container"]} id={styles["detail-page"]}>
            <div className={styles["film-infor"]}>
              <div className={styles["image"]}>
                <img
                  src={films?.backdropUrl}
                  className={styles["image-banner"]}
                  alt=""
                />
                <img
                  className={styles["avatar"]}
                  itemProp="image"
                  alt=""
                  src={films?.posterUrl}
                />{" "}
                <a href=""
                  onClick={() => {
                    handleDetail(films?.slug);
                  }}
                  className={styles["icon-play"]}></a>
                <div className={styles["text-top"]}>
                  <h1 className={styles["name"]}>{films?.title}</h1>
                  <ul className={styles["list-button"]}>
                    <li>
                      <a
                        onClick={scrollToSection}
                        className="btn btn-download btn-info"
                        title={films?.title}
                      >
                        <FaYoutube color="white" style={{ margin: "0 3px" }} />
                        Trailer
                      </a>
                    </li>
                    <li>
                      <div
                        key={films?.slug}
                        onClick={() => {
                          handleDetail(films?.slug);
                        }}
                        className="btn-see btn btn-danger"
                        title={films?.title}
                      >
                        <FaPlayCircle /> Watch Now
                      </div>
                    </li>
                  </ul>
                </div>
              <div className={styles["overlay"]}></div>
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
                        
                      </div>

                      <div className={styles["column"]}>
                        <li>
                          <label>Company: </label>
                          <span>
                            <a href="" title="Han Cheol Soo">
                              <span> {films?.productionCompanies.map((company) => company.name)}</span>
                            </a>
                          </span>
                        </li>
                        <li>
                          <label>Country: </label>{" "}
                          <a href="" title="Phim Âu Mỹ">
                            {" "}
                            {films?.productionCountries.map((country) => country.name)}
                          </a>
                        </li>
                      </div>
                      <div className={styles["column"]}>
                        <li>
                          <label>Actor: </label>{" "}
                          <a href="" title="">
                            {films?.productionCompanies.map((company) => company.name + ", ")}
                          </a>
                        </li>
                        <li>
                          <label>Release Year: </label>{" "}
                          <a href=""> {films?.releaseDate}</a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["content-film"]}>
                    <h3 className={styles["heading"]}>Content </h3>
                    <div id={styles["film-content"]}>
                      <input className={styles["toggle-box"]} id={styles['post']} type="checkbox" />
                      <p className={styles['overview']}>{films?.overview}</p>
                      <div className={styles["item-content-toggle"]}>
                        {/* <label
                            data-for={styles['post']}
                            id={styles["myBtn"]}
                            className={styles["show-more"]}
                            role="button"
                            data-single="true"
                          >
                            Extend<IoIosArrowDown />
                          </label> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["trailer"]}>
                  <div className={styles["content-film"]}>
                    <h3 className={styles["heading"]}>Trailer {films?.title} </h3>
                    <div id={styles["film-content"]}>
                      <input className={styles["toggle-box"]} id={styles['post']} type="checkbox" />
                      <ReactPlayer
                        // ref={playerRef}
                        autoplay={false}
                        url={films?.url}
                        controls
                        width="100%"
                        height="520px"
                        playing={playing}
                        autoPl
                        onDuration={(duration) => {
                          setDuration({ duration });
                        }}
                        onProgress={(progress) => {
                          if (!duration) {
                            return
                          }
                          const secondsElapsed = progress.played * duration.duration
                          if (secondsElapsed !== secondsElapsed) {
                            setSecondsElapsed(secondsElapsed);
                          }
                        }}
                      />

                    </div>
                  </div>
                </div>
                <div id={styles["related"]}>
                  <Related />
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
        <Recommend />
      </div>}
    </div>
  );
};
export default Detail;
