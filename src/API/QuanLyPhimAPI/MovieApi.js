import { groupID8 } from "../../config/settings";
import axiosClient from "../AxiosSetup";
export const movieApi = {
  getMovieList: () => {
    const url = `/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID8}`;
    return axiosClient.get(url);
  },

  getMovieDetail: (id) => {
    const url = `/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`;
    return axiosClient.get(url);
  },

  addMovie: (newMovie) => {
    const url = `/QuanLyPhim/ThemPhimUploadHinh`;
    return axiosClient.post(url, newMovie);
  },
};
