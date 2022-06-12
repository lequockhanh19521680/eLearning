import React from "react";
import { useState } from "react";
import "./styles.css";

function ListLesson() {
  return (
    <div className="favorite_lesson-container body-container">
      <div className="favorite_lesson_header">
        <h2 className="favorite_lesson_header-title">Môn Vật Lí</h2>
      </div>
      <div className="favorite-list" style={{ display: "flex" }}>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe  src="https://www.youtube.com/embed/5uKzGBMI8wk">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a >Điện trở của dây dẫn - Định luật Ôm - Thầy Đặng Tài Quang  </a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe  src="https://www.youtube.com/embed/wKeOjHIVk5s">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a >Sự phụ thuộc của cường độ dòng điện vào hiệu điện thế giữa hai đầu dây dẫn - Cô Lê Minh Phương  </a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-lesson">
            <figure className="favorite-fg" style={{ position: "relative" }}>
            <iframe  src="https://www.youtube.com/embed/_YB8Ddryf3M">
</iframe>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a>Đoạn mạch nối tiếp - Cô Lê Minh Phương</a>
                </h4>
                <span className="f_right"></span>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
      <div className="mt40 a_center">
        <a className="button btn_sm btn_yellow" href="https://www.youtube.com/playlist?list=PL5q2T2FxzK7W6wjXWKbhViVzp8KYYaOOh">
          VIEW MORE
        </a>
      </div>
    </div>
  );
}

export default ListLesson;
