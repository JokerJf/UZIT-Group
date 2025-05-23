import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Courses.module.scss";
import { t } from "i18next";
// import required modules
import { Pagination } from "swiper/modules";
import back from '../../../assets/courses/back.png'
import front from '../../../assets/courses/front.png'
import matem from '../../../assets/courses/matem.png'
import eng from '../../../assets/courses/eng.png'


export default function App() {
  return (
    <div id="courses">
      <h1 className={styles.title}>{t('markaz.courses.titleCourses')}</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          el: '.custom-pagination2',
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // при ширине экрана от 0 до 767px
          },
          768: {
            slidesPerView: 2, // при ширине экрана от 768px и выше
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className={styles.swiperCourses}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.top}>
              <h1>{t('markaz.courses.front.name')}</h1>
              <img src={front} alt="..." />
            </div>
            <div className={styles.bottom}>
              <p className={styles.dur}>{t('markaz.courses.front.duration')}</p>
              <del>{t('markaz.courses.front.oldPrice')}</del>
              <p>{t('markaz.courses.front.price')}</p>
              <p>{t('markaz.courses.front.des')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.top}>
              <h1>{t('markaz.courses.back.name')}</h1>
              <img src={back} alt="..." />
            </div>
            <div className={styles.bottom}>
              <p className={styles.dur}>{t('markaz.courses.back.duration')}</p>
              <del>{t('markaz.courses.back.oldPrice')}</del>
              <p>{t('markaz.courses.back.price')}</p>
              <p>{t('markaz.courses.back.des')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.top}>
              <h1>{t('markaz.courses.matem.name')}</h1>
              <img src={matem} alt="..." />
            </div>
            <div className={styles.bottom}>
              <p className={styles.dur}>{t('markaz.courses.matem.duration')}</p>
              <del>{t('markaz.courses.matem.oldPrice')}</del>
              <p>{t('markaz.courses.matem.price')}</p>
              <p>{t('markaz.courses.matem.des')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.top}>
              <h1>{t('markaz.courses.eng.name')}</h1>
              <img src={eng} alt="..." />
            </div>
            <div className={styles.bottom}>
              <p className={styles.dur}>{t('markaz.courses.eng.duration')}</p>
              <del>{t('markaz.courses.eng.oldPrice')}</del>
              <p>{t('markaz.courses.eng.price')}</p>
              <p>{t('markaz.courses.eng.des')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.top}>
              <h1>{t('markaz.courses.rus.name')}</h1>
              <img src={eng} alt="..." />
            </div>
            <div className={styles.bottom}>
              <p className={styles.dur}>{t('markaz.courses.rus.duration')}</p>
              <del>{t('markaz.courses.rus.oldPrice')}</del>
              <p>{t('markaz.courses.rus.price')}</p>
              <p>{t('markaz.courses.rus.des')}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.custom_pagination2}>
        <div className="custom-pagination2" />
      </div>
    </div>
  );
}
