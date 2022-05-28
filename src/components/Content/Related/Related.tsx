import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './Related.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';
//@ts-ignore
import { API_IMG, API_URL } from '../../../utilities/apiUrl.ts';

export interface RelatedProps {
  original_title: string,
  title: string, 
  poster_path: string
}
export const Related: React.FC<RelatedProps> = (props) => {
  const [films, setFilm] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setFilm(data.results);
      })
  }, [])
  const handleDetail = (e: string) => {
    navigate(`/detail/${e}`);
  };

  return (
    <>
      <div id={styles['related-movies']}>
        <h3 className={styles['heading']}>Related movies</h3>
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
                  <a href="" onClick={() => {
                handleDetail(film.id);
              }}>
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
    </>
  )
}
export default Related
