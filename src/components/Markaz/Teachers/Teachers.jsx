import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { t } from "i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./Teachers.module.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import roma from "../../../assets/teachers/roma.jpg";
import diyor from "../../../assets/teachers/diyor.jpg";
import ramiz from "../../../assets/teachers/ramiz.jpg";
import shaxnoza from "../../../assets/teachers/shaxnoza.jpg";
import amin from "../../../assets/teachers/amin.png";
import jasur from "../../../assets/teachers/jasur.jpg";
import kamila from "../../../assets/teachers/kamila.jpg";

export default function Teachers() {
  return (
    <div id="teachers">
      <h1 className={styles.tit}>{t("markaz.teachers.titleTeachers")}</h1>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // при ширине экрана от 0 до 767px
          },
          768: {
            slidesPerView: 3, // при ширине экрана от 768px и выше
          },
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.card}>
            <img src={roma} alt="roma" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.roma.name")}</h2>
              <p>{t("markaz.teachers.roma.skill")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.card}>
            <img src={diyor} alt="diyor" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.diyor.name")}</h2>
              <p>{t("markaz.teachers.diyor.skill")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.card}>
            <img src={ramiz} alt="ramiz" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.ramiz.name")}</h2>
              <p>{t("markaz.teachers.ramiz.skill")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.card}>
            <img src={shaxnoza} alt="shaxnoza" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.shaxnoza.name")}</h2>
              <p>{t("markaz.teachers.shaxnoza.skill")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.card}>
            <img src={amin} alt="amin" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.amin.name")}</h2>
              <p>{t("markaz.teachers.amin.skill")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.card}>
            <img src={jasur} alt="jasur" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.jasur.name")}</h2>
              <p>{t("markaz.teachers.jasur.skill")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.card}>
            <img src={kamila} alt="kamila" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.kamila.name")}</h2>
              <p>{t("markaz.teachers.kamila.skill")}</p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide
          className={styles.roma}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className={styles.card}>
            <img src={roma} alt="" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.roma.name")}</h2>
              <p>{t("markaz.teachers.roma.skill")}</p>
            </div>
          </div>

          <div>
            <img src={diyor} alt="" />
            <div
              className={styles.txt}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h2>{t("markaz.teachers.diyor.name")}</h2>
              <p>{t("markaz.teachers.diyor.skill")}</p>
            </div>
          </div>

          <div>
            <img src={ramiz} alt="" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.ramiz.name")}</h2>
              <p>{t("markaz.teachers.ramiz.skill")}</p>
            </div>
          </div>

          <div>
            <img src={shaxnoza} alt="" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.shaxnoza.name")}</h2>
              <p>{t("markaz.teachers.shaxnoza.skill")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.amin} style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src={amin} alt="" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.amin.name")}</h2>
              <p>{t("markaz.teachers.amin.skill")}</p>
            </div>
          </div>

          <div>
            <img src={jasur} alt="" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.jasur.name")}</h2>
              <p>{t("markaz.teachers.jasur.skill")}</p>
            </div>
          </div>

          <div>
            <img src={kamila} alt="" />
            <div className={styles.txt}>
              <h2>{t("markaz.teachers.kamila.name")}</h2>
              <p>{t("markaz.teachers.kamila.skill")}</p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className={styles.custom_pagination}>
        <div className="custom-pagination" />
      </div>
    </div>
  );
}
