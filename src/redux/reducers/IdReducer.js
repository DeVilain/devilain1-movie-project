import { maLichChieu } from "../../config/settings";

let maLichChieuTemp = null;

if (localStorage.getItem(maLichChieu)) {
    maLichChieuTemp = JSON.parse(localStorage.getItem(maLichChieu));
}

const ma = maLichChieuTemp;

export const IdReducer = (state = ma, action) => {
    switch (action.type) {
        case 'GUI_MA':
            state = action.payload;
            console.log(state)
            return state;
        case 'RESET':
            state = '';
            //console.log('malichieu', state.maLichChieu);
            return state;
        default:
            return state
    }

}