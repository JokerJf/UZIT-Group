import React, { Suspense } from 'react';
import './app.scss';
import Preloader from './components/Preloader/Preloader';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeCTX from './context/ThemeCTX';
import TarrifsPage from './pages/Tarrifs/TarrifsPage';
import About from './pages/About';

export function App() {
  const [openBurger, setOpenBurger] = React.useState(false);
  // const [modalActive, setModalActive] = React.useState(true);
  React.useEffect(() => {
    AOS.init();
  });

  React.useEffect(() => {
    AOS.refresh();
  }, []);

 

  // React.useEffect(()=>{

  //   window.addEventListener('load', ()=>{
  //     let body = document.querySelector('body')
  //     body.style.overflow = 'hidden'
  //   })
  // },[])

  return (
    <ThemeCTX>
      {' '}
      {/* <Suspense fallback="loading"> */}


        <Routes>
          <Route
            path="/"
            element={<Layout openBurger={openBurger} setOpenBurger={setOpenBurger} />}>
            <Route index element={<Home />} /> 
            <Route path='school' element={<TarrifsPage/>} /> 

          </Route>
        </Routes>
      {/* </Suspense> */}
    </ThemeCTX>
  );
}
