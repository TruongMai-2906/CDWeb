import React, { useState } from "react";
import styles from "./WatchFilm.module.scss";
import Recommend from "../../components/Content/Recommend/Recommend.tsx";
import Related from "../../components/Content/Related/Related.tsx";
import PlayerControls from "../../components/Content/PlayerControls/PlayerControls.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ReactPlayer from 'react-player'

export interface WatchFilmProps {}

export interface WatchFilmDataType {}


const WatchFilm: React.FC<WatchFilmProps> = (props) => {
  const [state,setState] = useState({
    playing: true
  })
  const {playing} = state
  
  const handlePlayPause = () => {
    setState({...state,playing:!state.playing})
  }
  return (
    <>
    <div id={styles["main-content"]}>
    <div id={styles["block"]}>
      <div id={styles["left-content"]}>
        <div className={styles["container"]} id={styles["detail-page"]}>
          <div className={styles["film-infor"]}>
            <div className={styles["text"]}>
            <ReactPlayer
              url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              controls
              width="100%"
              height="520px"
              playing={playing}
            />
            
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
              allowTransparency={true}
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
  )
  
};

export default WatchFilm;
