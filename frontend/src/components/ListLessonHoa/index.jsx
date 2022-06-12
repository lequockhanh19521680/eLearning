import React from "react";
import { useState } from "react";
import "./styles.css";

function ListLessonHoa() {
  return (
    <div className="favorite_lesson-container body-container">
      <div className="favorite_lesson_header">
        <h2 className="favorite_lesson_header-title">Môn Hoá</h2>
      </div>
      <div className="favorite-list" style={{ display: "flex" }}>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe  src="https://www.youtube.com/embed/ealIjYx4MGc">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a >Tính chất hóa học của oxit. Khái quát về sự phân loại oxit - Cô Nguyễn Thị Thu  </a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe  src="https://www.youtube.com/embed/GGV2Fvmuny4">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a>Một số axit quan trọng - Cô Nguyễn Thị Thu </a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe width="400" height="315" src="https://www.youtube.com/embed/oLFkUvPuPbQ">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a>Tính chất hóa học của bazơ - Cô Nguyễn Thị Thu</a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
      <div className="mt40 a_center">
        <a className="button btn_sm btn_yellow" href="https://www.youtube.com/playlist?list=PL5q2T2FxzK7W47cPigGSVS2t6bfOWWNFT">
          VIEW MORE
        </a>
      </div>
    </div>
  );
}

export default ListLessonHoa;
