import { groupID2, maHeThongRap } from "../../config/settings";
import { QuanLyHeThongRapServices } from "../../services/QuanLyHeThongRapServices"
import { fetch_HeThongRap_CumRap_LichChieu, update_CumRap_LichChieu } from "../types/QuanLyRapTypes"
import axios from 'axios';

export const fetch_CinemaInformation_request = () => {
    return dispatch => {
        const fetch_heThongRap_request = QuanLyHeThongRapServices.fetchHeThongRap();
        const fetch_cumRap_request = QuanLyHeThongRapServices.fetchThongTinCumRap(maHeThongRap);
        const fetch_lichChieu_request = QuanLyHeThongRapServices.fetchThongTinLichChieu(maHeThongRap, groupID2);
        axios.all([fetch_heThongRap_request, fetch_cumRap_request, fetch_lichChieu_request])
            .then(axios.spread((...responses) => {
                //console.log(responses[0].data);
                const heThongRap_response = responses[0].data;
                const cumRap_response = responses[1].data;
                const lichChieu_response = responses[2].data[0].lstCumRap;
                //console.log(lichChieu_response);
                dispatch(fetch_CinemaInformation_action(heThongRap_response, cumRap_response, lichChieu_response))
            })).catch(error => {
                console.log(error);
                dispatch({
                    type: 'ERROR'
                });
            })
    }
}


export const fetch_CinemaInformation_action = (dsHeThongRap, dsCumRap, dsLichChieu) => {
    return {
        type: fetch_HeThongRap_CumRap_LichChieu,
        dsHeThongRap,
        dsCumRap,
        dsLichChieu,
    }
}

// update cụm rạp theo hệ thống rạp + update lịch chiếu theo cụm rap
export const setLichChieu_request = (heThongRap_ID) => {
    return dispatch => {
        const update_cumRap_request = QuanLyHeThongRapServices.fetchThongTinCumRap(heThongRap_ID);
        const update_lichChieu_request = QuanLyHeThongRapServices.fetchThongTinLichChieu(heThongRap_ID, groupID2);

        axios.all([update_cumRap_request, update_lichChieu_request])
            .then(axios.spread((...responses) => {
                //console.log(responses);
                const update_cumRap_response = responses[0].data;
                const update_lichChieu_response = responses[1].data[0].lstCumRap;
                dispatch(setLichChieu_action(update_cumRap_response, update_lichChieu_response));
            })).catch(error => {
                console.log(error);
                dispatch({
                    type: 'ERROR'
                })
            })
    }
}

export const setLichChieu_action = (dsCumRapUpdate, dsLichChieuUpdate) => {
    return {
        type: update_CumRap_LichChieu,
        dsCumRapUpdate,
        dsLichChieuUpdate,
    }
}