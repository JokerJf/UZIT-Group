import React from 'react'
import { t } from "i18next";
import styles from './Help.module.scss'

const Help = () => {
  return (
    <div id="help">
      <div className={styles.help}>
        <div className={styles.model}>
          <div className={styles.text}>
            <h1 className={styles.title}>{t('markaz.help.title')}</h1>
            <p className={styles.subtitle}>{t('markaz.help.subtitle')}</p>
          </div>
          <div className={styles.form}>
            <form>
              <label htmlFor="i">{t('markaz.help.form.name')}</label>
              <input type="text" id='i' />

              <label htmlFor="k">{t('markaz.help.form.pochta')}</label>
              <input type="email" id='k' />

              <label htmlFor="l">{t('markaz.help.form.tel')}</label>
              <input type="tel" id='l' />

              <button type='submit' className={styles.btn}>{t('markaz.help.form.button')}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help