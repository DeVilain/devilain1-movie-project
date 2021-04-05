import { combineReducers } from "redux";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer";
import { IdReducer } from "./IdReducer";
import { QuanLyHeThongRapReducer } from "./QuanLyHeThongRapReducer";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";

const rootReducer = combineReducers({
  QuanLyPhimReducer,
  QuanLyNguoiDungReducer,
  IdReducer,
  QuanLyHeThongRapReducer,
});

export default rootReducer;
