import React from 'react'
import { Link } from 'react-router-dom'
import validate from './validateInfo';
import useSignUpForm from './useSignUpForm';

const Signup = ({ handleSubmitSuccess, serverError }) => {

    const { handleChange, handleSubmit, values, errors } = useSignUpForm(handleSubmitSuccess, validate);

    return (
        <>
            <div className="signup-container">
                <div className="signup-wrapper container">
                    <Link className="signup-icon" to="/">CyberMovies</Link>
                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit}>
                            <h1>Đăng ký tài khoản</h1>
                            <div className="form-col">
                                {serverError && <p>{serverError}</p>}
                            </div>
                            <div className="form-content row">
                                <div className="col-md-6 col-sm-6 col-xs-12 form-col">
                                    <div className="form-group">
                                        <label htmlFor="taiKhoan">Tài khoản</label>
                                        <input
                                            id="taiKhoan"
                                            type="text"
                                            name="taiKhoan"
                                            className="form-control"
                                            value={values.taiKhoan}
                                            onChange={handleChange} />
                                        {errors.taiKhoan && <p>{errors.taiKhoan}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matKhau">Mật khẩu</label>
                                        <input id="matKhau" type="password" name="matKhau" className="form-control" onChange={handleChange} />
                                        {errors.matKhau && <p>{errors.matKhau}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matKhau2">Nhập lại mật khẩu</label>
                                        <input id="matKhau2" type="password" name="matKhau2" className="form-control" onChange={handleChange} />
                                        {errors.matKhau2 && <p>{errors.matKhau2}</p>}
                                    </div>

                                </div>

                                <div className="col-md-6 col-sm-6 col-xs-12 form-col">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" name="email" className="form-control" onChange={handleChange} />
                                        {errors.email && <p>{errors.email}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="soDt">Số điện thoại</label>
                                        <input id="soDt" type="text" name="soDt" className="form-control" onChange={handleChange} />
                                        {errors.soDt && <p>{errors.soDt}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="hoTen">Họ tên</label>
                                        <input id="hoTen" type="text" name="hoTen" className="form-control" onChange={handleChange} />
                                        {errors.hoTen && <p>{errors.hoTen}</p>}
                                    </div>

                                </div>
                            </div>
                            <button type="submit">Đăng ký</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup
