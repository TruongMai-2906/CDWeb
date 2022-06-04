import React, { useEffect, useState } from "react";
//@ts-ignore
import styles from "./WatchFilm.module.scss";
//@ts-ignore
import Recommend from "../../components/Content/Recommend/Recommend.tsx";
//@ts-ignore
import Related from "../../components/Content/Related/Related.tsx";
import ReactPlayer from "react-player";
//@ts-ignore
import { get } from '../../utilities/api.ts';
import { useParams } from "react-router-dom";
import {url} from '../Register/Register.tsx'

export interface WatchFilmProps {}

export interface WatchFilmDataType {
  slug: number,
  url: string
}

const WatchFilm: React.FC<WatchFilmProps> = (props) => {
  const { category, id } = useParams();
  // console.log("slug",id);
  const [urlMovie, setUrlMovie] = useState<WatchFilmDataType>()

  useEffect(() => {
    fetch(`${url}api/movie/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUrlMovie(data);
      });
  }, []);
  const [state, setState] = useState({
    playing: true,
  });
  const { playing } = state;

  return (
    <>
      <div id={styles["main-content"]}>
        <div id={styles["block"]}>
          <div id={styles["left-content"]}>
            <div className={styles["container"]} id={styles["detail-page"]}>
              <div className={styles["film-infor"]}>
                <div className={styles["text"]}>
                  {/* React Player */}
                  <ReactPlayer
                    url={urlMovie?.url}
                    controls
                    width="100%"
                    height="520px"
                    playing={playing}
                  />
                  {/* End React Player */}

                </div>
              </div>
              <div className={styles["comment"]}>
                <iframe
                  title="comment"
                  src="http://www.facebook.com/plugins/comments.php?href=http://localhost:3000"
                  scrolling="no"
                  frameBorder="0"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    width: "100%",
                    height: "1000px",
                  }}
                ></iframe>
              </div>
              <div className={styles["popular-list"]}>
                <Related></Related>
              </div>
            </div>
          </div>
          <Recommend />
        </div>
      </div>
    </>
  );
};

export default WatchFilm;
