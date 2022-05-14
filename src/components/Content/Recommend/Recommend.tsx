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
            <div className={styles['img-film']} style={{ background: `url(${d.img})`, backgroundSize: "cover", backgroundPosition: "center center" }} ></div>
            <div className={styles['description']}>
              <a href="" className={styles['title']}>{d.name}</a>
              <p className={styles['otherName']}>{d.ortherName}</p>
            </div>
          </li>
        ))}

      </ul>
    </div>
  )
}
export default Recommend
