import { fetch_HeThongRap_CumRap_LichChieu, update_CumRap_LichChieu } from "../types/QuanLyRapTypes";

const initialState = {
    danhSachHeThongRap: [],
    danhSachCumRap: [],
    danhSachLichChieu: []
};

export const QuanLyHeThongRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetch_HeThongRap_CumRap_LichChieu:
            //console.log(action.dsLichChieu);
            return {...state, danhSachHeThongRap: action.dsHeThongRap, danhSachCumRap: action.dsCumRap, danhSachLichChieu: action.dsLichChieu };
        case update_CumRap_LichChieu:
            return {...state, danhSachCumRap: action.dsCumRapUpdate, danhSachLichChieu: action.dsLichChieuUpdate };
        default:
            return state;
    }
}