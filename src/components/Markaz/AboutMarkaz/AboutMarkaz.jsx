import React from 'react'
import styles from './AboutMarkaz.module.scss'
import { t } from "i18next";
import img from '../../../assets/aboutMarkaz.png'

const About = () => {
  return (
    <div id="about">
      <div className={styles.about}>
        <div className={styles.model}>
          <div className={styles.img}>
            <img src={img} alt="" />
          </div>
          <div className={styles.txt}>
            <h1>{t('about.title')}</h1>
            <p>{t('about.subtitle')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About