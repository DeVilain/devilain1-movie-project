import axios from 'axios'
import { dang_ky, dang_nhap } from '../types/QuanLyNguoiDungTypes'
import { userLogin, accessToken, domain } from '../../config/settings'

export const dangNhapAction = ({ taiKhoan, matKhau }, props, setErrorResponse, setIsLoginSuccess) => {
    return dispatch => {
        axios({
            url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: { taiKhoan, matKhau }
        }).then(result => {
            //console.log(result.data)
            //Lưu thông tin đăng nhập vào session storage
            sessionStorage.setItem(userLogin, JSON.stringify(result.data));
            //Lưu thông tin user token vào session Storage
            sessionStorage.setItem(accessToken, result.data.accessToken);
            dispatch({
                    type: dang_nhap,
                    nguoiDung: result.data
                })
                // nếu tồn tại mã lịch chiếu và đăng nhập thành công thì sẽ đẩy sang trang đặt vé, ngược lại sẽ trở về trang chủ
                //maLichChieu ? props.history.push(`/datve/${maLichChieu}`) : props.history.push('/');
            setIsLoginSuccess(true);
        }).catch(error => {
            //console.log(error.response.data);
            setErrorResponse(error.response.data);
        });
    }
}


export const dangKyAction = ({ taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen }, setIsSubmitted, setServerError) => {
    return dispatch => {
        axios({
            url: `${domain}/api/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen }
        }).then(result => {
            //console.log(result.data);
            // lưu thông tin đăng ký vào localStorage
            //localStorage.setItem(userSignup, JSON.stringify(result.data));
            dispatch({
                type: dang_ky,
                nguoiDangKy: result.data
            })
            setIsSubmitted(true);
        }).catch(err => {
            console.log(err.response.data);
            setServerError(err.response.data);
        });
    }
}