import React, { useState } from 'react'
import styles from './Related.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from '../../../mockdata.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';

export interface RelatedProps { }
export const Related: React.FC<RelatedProps> = (props) => {
  const [films, setFilm] = useState(data)
  return (
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
          className="mySwiper"
        >
          {data.map((d, index) => (
            <SwiperSlide key={index} className={styles['items']}>
              <a className={styles['box']}>
                <img className={styles['img-film']} src={d.img} alt="" />
                <div className={styles['film-title-box']}>
                  <div className={styles['film-title']}>
                    <div className={styles['title']}>{d.name}</div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  )
}
export default Related
