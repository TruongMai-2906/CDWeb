import React from 'react'
import styles from '../Recommend/Recommend.module.scss';
export interface RelatedProps { }

export const Related: React.FC<RelatedProps> = (props) => {
  return (
    <div id={styles['right-content']}>
          <div className="title">
            <h3>Đề xuất cho bạn</h3>
          </div>
          <ul className={styles['list-movie']}>
            <li>
              <div className={styles['img-film']}></div>
              <div className={styles['description']}>
                <a href="" className="title">Tôi là Triệu Giáp Đệ</a>
                <p className={styles['otherName']}>Zhao Jiadi (2022)</p>
              </div>
            </li>
            <li>
              <div className={styles['img-film']}></div>
              <div className={styles['description']}>
                <a href="" className="title">Tôi là Triệu Giáp Đệ</a>
                <p className={styles['otherName']}>Zhao Jiadi (2022)</p>
              </div>
            </li>
            <li>
              <div className={styles['img-film']}></div>
              <div className={styles['description']}>
                <a href="" className="title">Tôi là Triệu Giáp Đệ</a>
                <p className={styles['otherName']}>Zhao Jiadi (2022)</p>
              </div>
            </li>
            <li>
              <div className={styles['img-film']}></div>
              <div className={styles['description']}>
                <a href="" className="title">Tôi là Triệu Giáp Đệ</a>
                <p className={styles['otherName']}>Zhao Jiadi (2022)</p>
              </div>
            </li>
            <li>
              <div className={styles['img-film']}></div>
              <div className={styles['description']}>
                <a href="" className="title">Tôi là Triệu Giáp Đệ</a>
                <p className={styles['otherName']}>Zhao Jiadi (2022)</p>
              </div>
            </li>
            <li>
              <div className={styles['img-film']}></div>
              <div className={styles['description']}>
                <a href="" className="title">Tôi là Triệu Giáp Đệ</a>
                <p className={styles['otherName']}>Zhao Jiadi (2022)</p>
              </div>
            </li>
            <li>
              <div className={styles['img-film']}></div>
              <div className={styles['description']}>
                <a href="" className="title">Tôi là Triệu Giáp Đệ</a>
                <p className={styles['otherName']}>Zhao Jiadi (2022)</p>
              </div>
            </li>
            <li>
              <div className={styles['img-film']}></div>
              <div className={styles['description']}>
                <a href="" className="title">Tôi là Triệu Giáp Đệ</a>
                <p className={styles['otherName']}>Zhao Jiadi (2022)</p>
              </div>
            </li>
          </ul>
        </div>
  )
}
export default Related
