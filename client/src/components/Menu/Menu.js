import React from 'react'
import styled from './Menu.module.scss';
import classNames from "classnames/bind";

import { NavLink } from 'react-router-dom'


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const Menu = () => {
    const cx = classNames.bind(styled);

    return (
        <div className={cx('Menu')}>
            <div className={cx('Menu-item')}>
                <p className={cx('item-title')}>MAIN</p>
                <NavLink to="/home" className={cx('item')}>
                    <HomeOutlinedIcon className={cx('icon')} />
                    <span >HomePage</span>
                </NavLink>
            </div>
            <div className={cx('Menu-item')}>
                <p className={cx('item-title')}>LISTS</p>

                <NavLink to="/customer" className={cx('item')}>
                    <PeopleAltOutlinedIcon className={cx('icon')} />
                    <span >Customer</span>
                </NavLink>
                <NavLink to="/contract" className={cx('item')}>
                    <FeedOutlinedIcon className={cx('icon')} />
                    <span >Contracts</span>
                </NavLink>
                <div className={cx('item')}>
                    <HomeWorkOutlinedIcon className={cx('icon')} />
                    <span >Propertys</span>
                </div>
            </div>
            <div className={cx('Menu-item')}>
                <p className={cx('item-title')}>GENERAL</p>
                <div className={cx('item')}>
                    <DashboardOutlinedIcon className={cx('icon')} />
                    <span >Elements</span>
                </div>
                <div className={cx('item')}>
                    <NoteAltOutlinedIcon className={cx('icon')} />
                    <span >Notes</span>
                </div>
                <div className={cx('item')}>
                    <CalendarMonthOutlinedIcon className={cx('icon')} />
                    <span >Calendar</span>
                </div>
                <div className={cx('item')}>
                    <ClearAllOutlinedIcon className={cx('icon')} />
                    <span >Forms</span>
                </div>
            </div>
            <div className={cx('Menu-item')}>
                <p className={cx('item-title')}>MORE</p>
                <div className={cx('item')}>
                    <LocalPrintshopOutlinedIcon className={cx('icon')} />
                    <span >Print</span>
                </div>
                <div className={cx('item')}>
                    <FileUploadOutlinedIcon className={cx('icon')} />
                    <span >Backups</span>
                </div>
            </div>
        </div>
    )
}

export default Menu
