import React from "react";
import styles from './Main.module.scss'
import { t } from "i18next";
import img from '../../../assets/main.png'

const Main = () => {
  return (
    <div>
      <section className={styles.main}>
        <div className={styles.textWrapper}>
          <h1>{t('markaz.main.titleGreen')} <span>{t('markaz.main.titleWhite')}</span></h1>
          <p>{t('markaz.main.subtitle')}</p>
        </div>

        <div className={styles.imgWrapper}>
          <img src={img} alt=""  />
        </div>
      </section>
    </div>
  );
};

export default Main;
