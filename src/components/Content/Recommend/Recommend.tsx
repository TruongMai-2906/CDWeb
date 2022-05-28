import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
//@ts-ignore
import { API_IMG, API_URL } from '../../../utilities/apiUrl.ts';
// @ts-ignore
import styles from '../Recommend/Recommend.module.scss';

export interface RecommendProps {
  original_title: string,
  title: string,
  poster_path: string
}

export const Recommend: React.FC<RecommendProps> = (props) => {
  const [films, setFilm] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setFilm(data.results.slice(0, 10));
      })
  }, [])

  const handleDetail = (e: string) => {
    navigate(`/detail/${e}`);
  };
  return (
    <div id={styles['right-content']}>
      <div className="title">
        <h3 className={styles['heading']}>Đề xuất cho bạn</h3>
      </div>
      <ul className={styles['list-movie']}>
        {films.map((film, index) => (
          <li key={film.id} {...film}
            onClick={() => {
              handleDetail(film.id);
            }}>
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
