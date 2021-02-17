import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { maLichChieu } from '../../config/settings'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInSuccess(props) {

    const [maLichChieuLocal, setMaLichChieuLocal] = useState(() => {
        if (localStorage.getItem(maLichChieu)) {
            return JSON.parse(localStorage.getItem(maLichChieu));
        } return;
    });

    // lấy mã lịch chiếu từ localStorage
    /* useEffect(() => {
        function getMaLichChieuFromLocal() {
            if (localStorage.getItem(maLichChieu)) {
                setMaLichChieuLocal(JSON.parse(localStorage.getItem(maLichChieu)));
            }
        }
        getMaLichChieuFromLocal();
    }) */

    return (
        <div className="signup-container">
            <div className="signup-wrapper container">
                <Link className="signup-icon" to="/">CyberMovies</Link>
                <div className="signup-success-container">
                    <p>Đăng nhập thành công!</p>
                    <div className="signup-success-img">
                        <img src="images/signup-success.svg" alt="signup-success" />
                    </div>
                    <div className="signup-success-redirect">
                        <Link to='/'><button className="mb-3" onClick={()=>{localStorage.removeItem(maLichChieu)}} >Trở về trang chủ</button></Link>
                        {maLichChieuLocal ? <Link to={`/datve/${maLichChieuLocal}`}><button>Tiếp tục đặt vé</button></Link> : ''}
                    </div>
                </div>
            </div>
        </div>

    )
}

SignInSuccess.propTypes = {
    //maLichChieu: PropTypes.object,
}

export default SignInSuccess

