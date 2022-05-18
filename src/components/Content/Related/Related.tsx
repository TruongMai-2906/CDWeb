import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './Related.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from '../../../mockdata.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
export interface RelatedProps {
  original_title: string,
  title: string, 
  poster_path: string
}
export const Related: React.FC<RelatedProps> = (props) => {
  const [films, setFilm] = useState([])
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setFilm(data.results);
      })
  }, [])

  return (
    <>
      <div id={styles['related-movies']}>
        <h3 className={styles['heading']}>Các phim liên quan</h3>
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={16}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles['mySwiper']}
          >
            {films.map((film) => (
              <SwiperSlide key={film} className={styles['items']}>
                <div className={styles['box']}>
                  <a href="">
                    <img className={styles['img-film']} src={API_IMG+film.poster_path} alt={film.title} />
                    <div className={styles['film-title-box']}>
                      <div className={styles['film-title']}>
                        <div className={styles['entry-title']}>{film.title}
                          <span className={styles['tooltip']}>{film.title}</span>
                        </div>
                        <div className={styles['original-title']}>{film.title}</div>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
      <div className={styles['the_tag_list']}>
        <h3 className={styles['heading']}>Tags</h3>
        <a href="https://fullphimzz.com/tag/banhtv/" title="BanhTV">#BanhTV</a>
        <a href="https://fullphimzz.com/tag/bilutv/" title="BiluTV">#BiluTV</a>
        <a href="https://fullphimzz.com/tag/fullphim/" title="Full Phim">#Full Phim</a>
        <a href="https://fullphimzz.com/tag/hdonline/" title="HDOnline">#HDOnline</a>
        <a href="https://fullphimzz.com/tag/motphim/" title="MotPhim">#MotPhim</a>
        <a href="https://fullphimzz.com/tag/phim14/" title="Phim14">#Phim14</a>
        <a href="https://fullphimzz.com/tag/phim3s/" title="Phim3S">#Phim3S</a>
        <a href="https://fullphimzz.com/tag/phimbathu/" title="PhimBatHu">#PhimBatHu</a>
        <a href="https://fullphimzz.com/tag/phimmoi-net/" title="PhimMoi.net">#PhimMoi.net</a>
        <a href="https://fullphimzz.com/tag/spy-x-family/" title="Spy x Family">#Spy x Family</a>
        <a href="https://fullphimzz.com/tag/tvhay/" title="TVHay">#TVHay</a>
        <a href="https://fullphimzz.com/tag/vkool/" title="VKool">#VKool</a>
        <a href="https://fullphimzz.com/tag/vuviphim/" title="VuViPhim">#VuViPhim</a>
        <a href="https://fullphimzz.com/tag/zingtv/" title="ZingTV">#ZingTV</a></div>
    </>
  )
}
export default Related
