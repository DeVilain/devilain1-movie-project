import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { maLichChieu } from '../../config/settings';

const SignIn = ({ props, userLogin, setUserLogin, dangNhap, errorResponse }) => {

    function handleChange(e) {
        //console.log(e.target.value);
        let { name, value } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dangNhap(userLogin, props);
    }

    return (
        <>
            <div className="signin-container">
                <div className="form-wrapper">
                    <Link className="signin-icon" to="/" onClick={()=>{localStorage.removeItem(maLichChieu)}} >CyberMovies</Link>
                    <div className="form-content">
                        <form onSubmit={handleSubmit}>
                            <h1>Đăng nhập tài khoản</h1>

                            {errorResponse && <p>{errorResponse}</p>}

                            <label htmlFor="for">Tài khoản</label>
                            <input
                                name="taiKhoan"
                                onChange={handleChange}

                                required></input>
                            <label htmlFor="for">Mật khẩu</label>
                            <input type="password"
                                name="matKhau"
                                onChange={handleChange}
                                required></input>
                            <button type="submit">Đăng nhập</button>
                            <span>Quên mật khẩu?</span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
