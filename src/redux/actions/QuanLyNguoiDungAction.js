import axios from "axios";
import {
  dang_ky,
  dang_nhap,
  getThongTinUser,
} from "../types/QuanLyNguoiDungTypes";
import { userLogin, accessToken, domain } from "../../config/settings";
import { QuanLyNguoiDungServices } from "../../services/QuanLyNguoiDungServices";

export const dangNhapAction = (
  { taiKhoan, matKhau },
  setErrorResponse,
  setIsLoginSuccess
) => {
  return (dispatch) => {
    axios({
      url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: { taiKhoan, matKhau },
    })
      .then((result) => {
        //console.log(result.data)
        //Lưu thông tin đăng nhập vào local storage
        localStorage.setItem(userLogin, JSON.stringify(result.data));
        //Lưu thông tin user token vào local Storage
        localStorage.setItem(accessToken, result.data.accessToken);
        dispatch({
          type: dang_nhap,
          nguoiDung: result.data,
        });
        // nếu tồn tại mã lịch chiếu và đăng nhập thành công thì sẽ đẩy sang trang đặt vé, ngược lại sẽ trở về trang chủ
        //maLichChieu ? props.history.push(`/datve/${maLichChieu}`) : props.history.push('/');
        setIsLoginSuccess(true);
      })
      .catch((error) => {
        //console.log(error.response.data);
        setErrorResponse(error.response.data);
      });
  };
};

export const dangKyAction = (
  { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen },
  setIsSubmitted,
  setServerError
) => {
  return (dispatch) => {
    axios({
      url: `${domain}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen },
    })
      .then((result) => {
        //console.log(result.data);
        // lưu thông tin đăng ký vào localStorage
        //localStorage.setItem(userSignup, JSON.stringify(result.data));
        dispatch({
          type: dang_ky,
          nguoiDangKy: result.data,
        });
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.log(err.response.data);
        setServerError(err.response.data);
      });
  };
};

export const getThongTinUser_request = (taiKhoan) => {
  return (dispatch) => {
    QuanLyNguoiDungServices.getThongTinTaiKhoan(taiKhoan)
      .then((res) => {
        console.log(res.data);
        dispatch(getThongTinUser_action(res.data));
      })
      .catch((err) => err.response);
  };
};

export const getThongTinUser_action = (accountInfo) => {
  return {
    type: getThongTinUser,
    accountInfo,
  };
};
