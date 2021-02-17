import { combineReducers } from 'redux'
import QuanLyNguoiDungReducer from './QuanLyNguoiDungReducer';
import IdReducer from './IdReducer'
import QuanLyHeThongRapReducer from './QuanLyHeThongRapReducer';

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer,
    IdReducer,
    QuanLyHeThongRapReducer,
});

export default rootReducer;