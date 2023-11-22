import React from 'react'
import styled from './Home.module.scss';
import classNames from "classnames/bind";
const Home = () => {
    const cx = classNames.bind(styled);
    return (
        <div className={cx('Home')}>
            <h1>Nhìn nữa là móc con mắt iem đấy</h1>
        </div>
    )
}

export default Home
