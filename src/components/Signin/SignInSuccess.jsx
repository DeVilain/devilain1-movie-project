import React from 'react'

import { maLichChieu } from '../../config/settings'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInSuccess(props) {

    const [maLichChieuLocal, setMaLichChieuLocal] = useState(() => {
        if (localStorage.getItem(maLichChieu)) {
            return JSON.parse(localStorage.getItem(maLichChieu));
        } return;
    });

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


export default SignInSuccess

