import React from 'react'
import classNames from "classnames/bind";
import styled from './Footer.module.scss';
const Footer = () => {
    const cx = classNames.bind(styled);

    return (
        <div className={cx('Footer')}>
            <span>By SixLeopards</span>
        </div>
    )
}

export default Footer
