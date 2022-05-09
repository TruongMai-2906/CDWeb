import React from 'react';
import styles from './HomePage.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Banner from '../../assets/images/home/banner1.jpg';
import Banner2 from '../../assets/images/home/banner2.jpg';
import Bannerctv from '../../assets/images/home/bannerctv.jpg';
import { Link } from 'react-router-dom';


export interface HomePageProps { }

export interface HomePageDataType { }

const HomePage: React.FC<HomePageProps> = (props) => (
  <div className={styles['root']}>
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles["swiper"]}
    >
      {/* <SwiperSlide className={styles["swiper-item"]}>Công tố viên chuyển sinh</SwiperSlide> */}
      <SwiperSlide> 
        <div className={styles["item"]}>
        <img src={Bannerctv} alt="banner" className={styles['background']} />
        <div className={styles['content']}>
          <Link to={'/detail'}>Công tố viên chuyển sinh</Link>
        </div>
      </div></SwiperSlide>
      <SwiperSlide>
        <div className={styles["item"]}>
          <img src={Banner2} alt="banner" className={styles['background']} />
          <div className={styles['content']}>
            this is content
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>
        <div className={styles["item"]}>
          <img src={Banner} alt="banner" className={styles['background']} />
          <div className={styles['content']}>
            <Link to={'/detail'}>Phù Thủy Strange</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>
        <div className={styles["item"]}>
          <img src={Banner} alt="banner" className={styles['background']} />
          <div className={styles['content']}>
            this is content
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles["item"]}>
          <img src={Banner2} alt="banner" className={styles['background']} />
          <div className={styles['content']}>
            <Link to={'/detail'}>Phù Thủy Strange</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  </div>
);

export default HomePage;