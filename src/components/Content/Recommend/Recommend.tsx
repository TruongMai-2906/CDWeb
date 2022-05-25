import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from '../Recommend/Recommend.module.scss';
import data from '../../../mockdata.json'

export interface RecommendProps {
  original_title: string,
  title: string,
  poster_path: string
}
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US&page=1&?limit=10";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const Recommend: React.FC<RecommendProps> = (props) => {
  const [films, setFilm] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setFilm(data.results.slice(0,10));
      })
  }, [])

  return (
    <div id={styles['right-content']}>
      <div className="title">
        <h3>Đề xuất cho bạn</h3>
      </div>
      <ul className={styles['list-movie']}>
        {films.map((film, index) => (
          <li key={film.id} {...film}>
            <div className={styles['box']}>
              <a href="">
                <img className={styles['img-film']} src={API_IMG + film.poster_path} alt={film.original_title} />
                <div className={styles['film-title-box']}>
                  <div className={styles['film-title']}>
                    <h3 className={styles['entry-title']}>{film.original_title}</h3>
                    <div className={styles['original-title']}>{film.title}</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Recommend
