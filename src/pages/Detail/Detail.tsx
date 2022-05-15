import React from "react";
import styles from "./Detail.module.scss";

import Banner from "../../../assets/images/home/Banner.jpg";
import Banner2 from "../../assets/images/home/banner2.jpg";
import { Link } from "react-router-dom";
import { FaYoutube, FaPlayCircle, FaArrowDown } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import classNames from 'classnames';
import Recommend from '../../components/Content/Recommend/Recommend.tsx';
import Related from '../../components/Content/Related/Related.tsx';
export interface DetailProps { }

export interface DetailDataType {}

const Detail: React.FC<DetailProps> = (props) => {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById(styles["more"]);
    var btnText = document.getElementById(styles["myBtn"]);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Mở rộng";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Thu gọn";
      moreText.style.display = "inline";
    }
  }
  return (
    <div id={styles["main-content"]}>
      <div id={styles["block"]}>
        <div id={styles["left-content"]}>
          <div className={styles["container"]} id={styles["detail-page"]}>
            <div className={styles["film-infor"]}>
              <div className={styles["image"]}>
                <img className={styles["avatar"]} itemProp="image" alt="" />{" "}
                <a href="" className="icon-play" />
                <a href="" className={styles["icon-play"]}></a>
                <div className={styles["text-top"]}>
                  <h1 className={styles["name"]}>Công Tố Viên Chuyển Sinh</h1>
                  <h2>Again My Life (2022)</h2>
                  <ul className={styles["list-button"]}>
                    <li>
                      <a
                        className="btn btn-download btn-info"
                        title="Trailer Công Tố Viên Chuyển Sinh-Again My Life"
                      >
                        <FaYoutube color="white" style={{ margin: "0 3px" }} />
                        Trailer
                      </a>
                    </li>
                    <li>
                      <Link
                        to={"/watch"}
                        className="btn-see btn btn-danger"
                        title="Xem phim Công Tố Viên Chuyển Sinh Again My Life"
                      >
                        <FaPlayCircle /> Xem phim
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles["text"]}>
                <div
                  className={classNames(
                    styles["film-content"],
                    styles["block-film"]
                  )}
                  id="film-content-wrapper"
                >
                  <div className={styles["infor-film"]}>
                    <div className={styles["btn-groups"]}>
                      <div className={styles["fb-like"]}>
                        <AiFillLike color="#fff" />
                        Thích 86
                      </div>
                      <div className={styles["fb-like"]}>
                        <AiFillLike color="#fff" />
                        Chia sẻ
                      </div>
                    </div>
                    <ul className={styles["entry-meta"]}>
                      <div className={styles["column"]}>
                        <li>
                          <label>Đang phát: </label>
                          <span style={{ color: "red" }}> HD Vietsub</span>
                        </li>
                        <li>
                          <label>Thể loại: </label>{" "}
                          <a href="" title="Hàn Quốc">
                            {" "}
                            Phim Hành Động
                          </a>
                          ,{" "}
                          <a href="" title="Đài Loan">
                            Phim Hình Sự
                          </a>
                        </li>
                        <li>
                          <label>Năm Phát Hành: </label> <a href=""> 2022</a>
                        </li>
                      </div>

                      <div className={styles["column"]}>
                        <li>
                          <label>Đạo diễn: </label>
                          <span>
                            <a href="" title="Han Cheol Soo">
                              <span> Han Cheol Soo</span>
                            </a>
                            ,
                          </span>
                        </li>
                        <li>
                          <label>Quốc gia: </label>{" "}
                          <a href="" title="Phim Âu Mỹ">
                            {" "}
                            Phim Hàn Quốc
                          </a>
                        </li>
                        <li>
                          <label>Thời lượng: </label>
                          <span>
                            <a href="" title="16 tập">
                              <span> 16 tập</span>
                            </a>
                            ,
                          </span>
                        </li>
                      </div>
                      <div className={styles["column"]}>
                        <li>
                          <label>Diễn viên: </label>{" "}
                          <a href="" title="Đài Loan">
                            Lee Joon Gi, Lee Kyung Young, Kim Ji Eun, Cha Joo
                            Young, Jung Sang Hoon, Kim Jae Kyung
                          </a>
                          ,{" "}
                          <a href="" title="Đài Loan">
                            Phim Phiêu Lưu
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>

                </div>
                <div className={styles['content']}>
                  <div className={styles['content-film']}>
                  <h3 className={styles['heading']}>Nội dung phim</h3>
                  <div id="film-content">
                    <p>
                      <b>Công Tố Viên Chuyển Sinh - </b>Again My Life 2022 xuất
                      phát điểm không suôn sẻ khi là một học sinh trung học cấp
                      ba để học lên đại học và cuối cùng đã vượt qua kỳ thi kiểm
                      tra luật sư. Sự chăm chỉ không ngừng nghỉ của anh ấy cuối
                      cùng đã được đền đáp, và anh ấy đã trở thành một công tố
                      viên. Trong quá trình điều tra của mình, anh ta phải tiến
                      hành điều tra một chính trị gia bị nghi ngờ tham nhũng.
                      Nhưng cuộc điều tra của anh ta đột ngột kết thúc khi một
                      người đàn ông bí ẩn giết anh ta.
                      <br />
                      Tuy nhiên, sau đó anh ta đến và phát hiện ra rằng anh ta
                      thực sự còn sống. Được phục hồi về cõi phàm trần, anh ta
                      thấy rằng mình <span id="dots">...</span>
                      <span id={styles["more"]}>
                        phải quay trở lại trường đại học và hoàn thành cuộc hành
                        trình học tập của mình một lần nữa - trong khi anh ta cố
                        gắng khám phá sự thật về những gì đã xảy ra với mình.
                        Trên hành trình của mình, anh gặp Kim Hee Ah ( Kim Ji
                        Eun ), một phụ nữ trẻ đặc biệt thông minh, đồng thời
                        cũng là con gái út của gia đình sở hữu tập đoàn kinh
                        doanh Cheonha giàu có. Khi Kim Hee Woo và Kim Hee Ah
                        tăng cường tìm kiếm câu trả lời, họ phát hiện ra rằng
                        một đội bóng mờ ám gồm những người môi giới quyền lực
                        giàu có có thể đã đóng một vai trò nào đó trong “cái
                        chết” của anh ấy.
                        <br />“<strong>Again My Life</strong>” là một bộ phim
                        truyền hình Hàn Quốc năm 2022 do Han Chul Soo và Kim
                        Yong Min làm đạo diễn.
                      </span>
                    </p>

                    <div className={styles['item-content-toggle']}>
                      <div className={styles['item-content-gradient']}></div>
                      <span onClick={myFunction} id={styles['myBtn']} className={styles['show-more']} data-single="true" data-showmore="Mở rộng" data-showless="Thu gọn">Mở rộng</span>
                    </div>
                  </div>
                  </div>
                </div>
                <Related />
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
        <Recommend />
      </div>
    </div>
  );
};
export default Detail;
