import axios from 'axios';
import { domain, groupID2 } from '../config/settings';

export const QuanLyHeThongRapServices = {
    fetchHeThongRap: () => {
        return axios({
            url: `${domain}/api/QuanLyRap/LayThongTinHeThongRap`,
            method: 'GET',
        })
    },

    fetchThongTinCumRap: (maHeThongRap) => {
        return axios({
            url: `${domain}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: 'GET',
        })

    },

    fetchThongTinLichChieu: (maHeThongRap) => {
        return axios({
            url: `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${groupID2}`,
            method: 'GET',
        })
    }

}