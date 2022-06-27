import React, { useEffect, useState } from 'react';
import { Movies } from '../ListFilm/Movie';
//@ts-ignore
import styles from './TrendingList.module.scss';
//@ts-ignore
import {API_URL, API_IMG} from '../../utilities/apiUrl.ts';
//@ts-ignore
import { get } from '../../utilities/api.ts';
import { Link, useNavigate } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';


export interface TrendingListProps {}

export interface TrendingListDataType {}

const TrendingList: React.FC<TrendingListProps> = (props) => {
  const [movieTrending, setMovieTrending] = useState<Movies[]>();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        // console.log(data);
        setMovieTrending(data);
      })
  }, [])
  const handleDetail = (e: string) => {
    navigate(`/detail/${e}`);
  };
  return(
    <div className={styles["root"]}>
    <div className={styles["trending"]}>
    <Link to="/"><h4 className={styles["trending-text"]}>{t('trending')} <BiRightArrowAlt></BiRightArrowAlt></h4></Link>
      <div className={styles["container"]}>
        {movieTrending?.map((movieItem) => (
          <div
            key={movieItem.slug}
            className={styles["items"]}
            onClick={() => {
              handleDetail(movieItem.slug);
            }}
          >
            <div className={styles["box"]}>
              <img
                className={styles["img-film"]}
                src={movieItem.posterUrl}
                alt={movieItem.title}
              />
              <div className={styles["film-title-box"]}>
                <div className={styles["film-title"]}>
                  <div className={styles["entry-title"]}>
                    {movieItem.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
)};

export default TrendingList;