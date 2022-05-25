import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
//@ts-ignore
import Recommend from '../../components/Content/Recommend/Recommend.tsx'
//@ts-ignore
import Related from '../../components/Content/Related/Related.tsx'
import Banner from '../../assets/images/home/banner1.jpg';
import Banner2 from '../../assets/images/home/banner2.jpg';
import Bannerctv from '../../assets/images/home/bannerctv.jpg';
import { Link } from 'react-router-dom';
import { get } from '../../utilities/api.ts';

export interface HomePageProps { }

export interface HomePageDataType { }

const HomePage: React.FC<HomePageProps> = (props) => {

  const [data, setData] = useState();
  useEffect(() => {

    if (!data) get('https://jsonplaceholder.typicode.com/todos/1').then((res) => setData(res.data));
    ;
  }, [])

  useEffect(() => {

    if (data) console.log(data);

  }, [data])

  return (
    <div className={styles['container']}>
    <div className={styles['root']}>
      <div className={styles['top-slider']}>
        <Swiper navigation={true} modules={[Navigation]} className={styles['swiper']}>
          <SwiperSlide>
            <div className={styles["item"]}>
              <img src={Banner2} alt="banner" className={styles['background']} />
              <div className={styles['content']}>
                this is content
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div className={styles['row']}>
        <div className={styles['col-left']}>
          {/* <div className={styles['box']}>
            <div className="box-body">
              <div className="box-header">
                <h2>Popular</h2>
              </div>
              <div className="swiper">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={16}
                  slidesPerGroup={4}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  modules={[Pagination, Navigation]} className="mySwiper">
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div> */}
          <Related/>
          <Related/>
        </div>
        <div className={styles['col-right']}>
          <div className={styles['container-col-right']}>
            <Recommend/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default HomePage;