import React from 'react';
import style from './Tarrifs.module.scss';
import { useTranslation } from 'react-i18next';
import Main from '../../components/Markaz/Main/Main';
import About from '../../components/Markaz/AboutMarkaz/AboutMarkaz';
import Teachers from '../../components/Markaz/Teachers/Teachers';
import Courses from '../../components/Markaz/Courses/Courses'
import Help from '../../components/Markaz/Help/Help';
import Map from '../../components/Markaz/Map/Map'

export default function TarrifsPage() {
  const { t } = useTranslation();
  return (
    <div className={style.tarrifs}>
      {/* <Accordion title={t('FAQ.mainTitle1')} answer={t('FAQ.answer1')} />
      <Accordion title={t('FAQ.mainTitle2')} answer={t('FAQ.answer2')} />
      <Accordion title={t('FAQ.mainTitle3')} answer={t('FAQ.answer3')} />
      <Accordion title={t('FAQ.mainTitle4')} answer={t('FAQ.answer4')} />
      <Accordion title={t('FAQ.mainTitle5')} answer={t('FAQ.answer5')} />
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Question />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas> */}

        <Main />
        <About /> 
        <Teachers />
        <Courses />
        <Help />
        <Map />
    </div>
  );
}
