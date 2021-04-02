import React from 'react'

import { Link as LinkScroll } from 'react-scroll';
import { NavLink, Link as LinkRoute } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { dang_xuat } from '../../redux/types/QuanLyNguoiDungTypes';

const Sidebar = ({ isOpen, toggle }) => {

    const userLoggedIn = useSelector(state => state.QuanLyNguoiDungReducer.nguoiDung);

    const dispatch = useDispatch();

    function renderLogOutBtn() {
        return (
            <>
                <NavLink to="/user">Xin chào {userLoggedIn.taiKhoan}</NavLink>
                <button onClick={() => {
                    dispatch({
                        type: dang_xuat
                    })
                }}><GrLogout /></button>
            </>
        )
    }

    return (
        <>
            <div className={isOpen ? 'sidebar-container-opened' : 'sidebar-container-default'} onClick={toggle}>
                <div className="icon">
                    <FaTimes className="close-icon" ></FaTimes>
                </div>
                <div className="sidebar-wrapper">
                    <ul>
                        <LinkScroll className="sidebar-link-scroll" to="phim" onClick={toggle}>Phim</LinkScroll>
                        <LinkScroll className="sidebar-link-scroll" to="rap" onClick={toggle}>Rạp</LinkScroll>
                        <LinkScroll className="sidebar-link-scroll" to="khuyenmai" onClick={toggle}>Khuyến mãi</LinkScroll>
                        <LinkScroll className="sidebar-link-scroll" to="lienhe" onClick={toggle}>Liên hệ</LinkScroll>
                    </ul>
                    <div className="sidebar-btn-wrap">
                        {
                            userLoggedIn.taiKhoan ? renderLogOutBtn() : <LinkRoute className="sidebar-btn" to="/signin">Đăng nhập</LinkRoute>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
