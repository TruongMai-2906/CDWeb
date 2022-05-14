import React, { useState } from 'react'
import styles from '../Recommend/Recommend.module.scss';
import data from '../../../mockdata.json'

export interface RecommendProps { }

export const Recommend: React.FC<RecommendProps> = (props) => {
  const [films, setFilm] = useState(data)
  return (
    <div id={styles['right-content']}>
      <div className="title">
        <h3>Đề xuất cho bạn</h3>
      </div>
      <ul className={styles['list-movie']}>
        {data.map((d, index) => (
          <li key={index}>
            <div className={styles['box']}>
              <a href="">
                <img className={styles['img-film']} src={d.img} alt={d.name} />
                <div className={styles['film-title-box']}>
                  <div className={styles['film-title']}>
                    <h3 className={styles['entry-title']}>{d.name}</h3>
                    <div className={styles['original-title']}>{d.ortherName}</div>
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
