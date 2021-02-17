import { dang_ky, dang_nhap, dang_xuat } from '../types/QuanLyNguoiDungTypes'
import { accessToken, maLichChieu, userLogin, userSignup } from '../../config/settings'

let usLogin = {};
if (sessionStorage.getItem(userLogin)) {
    usLogin = JSON.parse(sessionStorage.getItem(userLogin));
}

let usSignup = {};
if (sessionStorage.getItem(userSignup)) {
    usSignup = JSON.parse(sessionStorage.getItem(userSignup));
}

const initialState = {
    nguoiDung: usLogin,
    nguoiDangKy: usSignup,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case dang_nhap:
            state.nguoiDung = action.nguoiDung;
            return {...state };
        case dang_xuat:
            sessionStorage.removeItem(userLogin);
            sessionStorage.removeItem(accessToken);
            sessionStorage.removeItem(maLichChieu);
            return {...state, nguoiDung: {} };
        case dang_ky:
            state.nguoiDangKy = action.nguoiDangKy;
            return {...state };
        default:
            return state;
    }
}