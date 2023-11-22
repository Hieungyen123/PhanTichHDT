import axios from 'axios';
import styled from './App.module.scss';
import React, { useEffect, useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import classNames from "classnames/bind";
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import Contract from './pages/Contract/Contract';
import Customer from './pages/Customer/Customer';
function App() {
  const cx = classNames.bind(styled);



  return (

    <div className={cx('App')}>
      <div className={cx('wrapper')}>
        <Navbar />
        <div className={cx('pages')}>
          <BrowserRouter>
            {/* <div className={cx("App-title")}>
              <h2><NavLink to='/'>Dictionary</NavLink> </h2>
              <h2><NavLink to='quiz'>Quiz</NavLink> </h2>
            </div> */}
            <Menu />
            <div className={cx('content')}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/contract' element={<Contract />} />
                <Route path='/customer' element={<Customer />} />
                {/* <Route path='/Dictionary' element={<Direction />} />
                  <Route path='quiz' element={<SettingScreen />} />
                  <Route path='quiz/questions' element={<Questions />} />
                  <Route path='quiz/score' element={<FinalScore />} /> */}

              </Routes>
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
