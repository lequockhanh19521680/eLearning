import React from "react";
import { useState } from "react";
import "./styles.css";

function ListLessonMath() {
  return (
    <div className="favorite_lesson-container body-container">
      <div className="favorite_lesson_header">
        <h2 className="favorite_lesson_header-title">Môn Toán</h2>
      </div>
      <div className="favorite-list" style={{ display: "flex" }}>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe  src="https://www.youtube.com/embed/i5N6PbUEDdU">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a > Căn bậc hai - Cô Ngô Hoàng Ngọc Hà </a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe src="https://www.youtube.com/embed/YLdkxQugTCk">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a >Biến đổi đơn giản biểu thức chứa căn thức bậc hai - Cô Ngô Hoàng Ngọc Hà </a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe src="https://www.youtube.com/embed/rpp9a6FDniw">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a >Căn bậc ba - Cô Ngô Hoàng Ngọc Hà</a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
      <div className="mt40 a_center">
        <a className="button btn_sm btn_yellow" href="https://www.youtube.com/watch?v=9f4lOFiFBEY&list=RDCMUC2fYM0Crqi_6nsdzR9e3EnA&start_radio=1&rv=9f4lOFiFBEY&t=56&ab_channel=VietJackTi%E1%BB%83uh%E1%BB%8Dc%26THCS">
          VIEW MORE
        </a>
      </div>
    </div>
  );
}

export default ListLessonMath;
