import { groupID8 } from "../../config/settings";
import axiosClient from "../AxiosSetup";

export const movieApi = {
  getMovieList: () => {
    const url = `/quanlyPhim/laydanhsachphim?maNhom=${groupID8}`;
    return axiosClient.get(url);
  },

  getMovieDetail: (id) => {
    const url = `/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`;
    return axiosClient.get(url);
  },
};
