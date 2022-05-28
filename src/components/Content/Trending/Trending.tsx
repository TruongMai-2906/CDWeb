import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import { Movies } from '../../../pages/ListFilm/Movie';
//@ts-ignore
import { get } from '../../../utilities/api.ts';
//@ts-ignore

import styles from '../Related/Related.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//@ts-ignore
import { API_IMG, API_URL } from '../../../utilities/apiUrl.ts';

export interface TrendingProps { }

export interface ListFilmDataType { }

const Trending: React.FC<TrendingProps> = (props) => {
    const [movieTrending, setMovieTrending] = useState<Movies[]>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!movieTrending) get(API_URL).then((res) => setMovieTrending(res.data.results));
        ;
    }, [])

    useEffect(() => {

        if (movieTrending) console.log("movie", movieTrending);

    }, [movieTrending])

    const handleDetail = (e: string) => {
        navigate(`/detail/${e}`);
    };
    return (
        <>
            <div id={styles['related-movies']}>
                <h3 className={styles['heading']}>Trending movies</h3>
                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={16}
                        slidesPerGroup={4}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={styles['mySwiper']}
                    >
                        {movieTrending?.map((movieItem) => (
                            <SwiperSlide key={movieItem.id} className={styles['items']}>
                                <div className={styles['box']}>
                                    <a href="" onClick={() => {
                                        handleDetail(movieItem.id);
                                    }}>
                                        <img className={styles['img-film']} src={API_IMG + movieItem.poster_path} alt={movieItem.title} />
                                        <div className={styles['film-title-box']}>
                                            <div className={styles['film-title']}>
                                                <div className={styles['entry-title']}>{movieItem.original_title||movieItem.original_name}
                                                    <span className={styles['tooltip']}>{movieItem.original_title||movieItem.original_name}</span>
                                                </div>
                                                <div className={styles['original-title']}>{movieItem.original_title||movieItem.original_name}</div>
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

export default Trending