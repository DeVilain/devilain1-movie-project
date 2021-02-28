import axios from 'axios'
import { domain } from '../config/settings'

export const QuanLyNguoiDungServices = {

    getThongTinTaiKhoan: (taiKhoan) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: 'POST',
            data: { taiKhoan: taiKhoan },
        })
    }

}