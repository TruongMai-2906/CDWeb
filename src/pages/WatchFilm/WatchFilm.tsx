import React, { useState } from "react";
import styles from "./WatchFilm.module.scss";
import Recommend from "../../components/Content/Recommend/Recommend.tsx";
import Related from "../../components/Content/Related/Related.tsx";
import ReactPlayer from "react-player";

export interface WatchFilmProps {}

export interface WatchFilmDataType {}

const WatchFilm: React.FC<WatchFilmProps> = (props) => {

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
                    url="videos/video1.mp4"
                    controls
                    width="100%"
                    height="520px"
                    playing={playing}
                    volume={10}
                  />
                  {/* End React Player */}

                </div>
              </div>
              <div className={styles["comment"]}>
                <iframe
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
