import axiosClient from "../AxiosSetup";

export const userApi = {
  getUserInfo: (taiKhoan) => {
    const url = "/QuanLyNguoiDung/ThongTinTaiKhoan";
    return axiosClient.post(url, { taiKhoan: taiKhoan });
  },
};
