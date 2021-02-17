import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'
import { animateScroll as scroll } from 'react-scroll'
import { Link as LinkScroll } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux'
import { dang_xuat } from '../../redux/types/QuanLyNguoiDungTypes'

const Navbar = ({ toggle }) => {
    // state xử lý hiệu ứng scroll của navbar
    const [scrollNav, setScrollNav] = useState(false);

    // 
    const userLoggedIn = useSelector(state => state.QuanLyNguoiDungReducer.nguoiDung);

    const dispatch = useDispatch();


    const changeBackgroundNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundNav);
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    function renderLogOutBtn() {
        return (
            <>
                <NavLink to="/user">Xin chào {userLoggedIn.taiKhoan}! </NavLink>
                <button onClick={() => {
                    dispatch({
                        type: dang_xuat,
                    })
                }} ><GrLogout></GrLogout></button>
            </>
        )
    }

    return (
        <>
            <nav className={scrollNav ? 'nav-default' : 'nav-scroll'}>
                <div className="navbar-container">
                    <NavLink to="/" onClick={toggleHome} duration={500}><img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" alt="" /></NavLink>
                    <div className="nav-icon">
                        <FaBars onClick={toggle}></FaBars>
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <LinkScroll className="nav-linkScroll"
                                to="phim"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                            >Phim</LinkScroll>
                        </li>
                        <li className="nav-item">
                            <LinkScroll className="nav-linkScroll"
                                to="rap"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                            >Rạp</LinkScroll>
                        </li>
                        <li className="nav-item">
                            <LinkScroll className="nav-linkScroll"
                                to="khuyenmai"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                            >Khuyến mãi</LinkScroll>
                        </li>
                        <li className="nav-item">
                            <LinkScroll className="nav-linkScroll"
                                to="lienhe"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-270}
                            >Liên hệ</LinkScroll>
                        </li>
                    </ul>
                    <div className="nav-btn">
                        {
                            userLoggedIn.taiKhoan ? renderLogOutBtn() : <NavLink to="/signin"><button>Đăng nhập</button></NavLink>
                        }
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
