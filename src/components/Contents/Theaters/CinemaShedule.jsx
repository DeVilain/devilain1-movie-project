import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {useSelector} from 'react-redux'
import { maLichChieu } from '../../../config/settings';
import { NavLink } from 'react-router-dom';

function CinemaShedule({ propsDsLichChieu, maCumRapIndex, propsDsCumRap }) {
    const propsUserLoggedIn = useSelector(state => state.QuanLyNguoiDungReducer.nguoiDung);

    function renderLichChieu() {
        const lichChieu = propsDsLichChieu?.find(item => item.maCumRap === propsDsCumRap[maCumRapIndex].maCumRap);
        if (lichChieu) {
            return (
                lichChieu.danhSachPhim.map((phim, index) => (
                    <div key={index} className="cinema-showtime-wrapper">
                        <div className="movie-img-container">
                            <img src={phim.hinhAnh} alt="movie-img" />
                        </div>
                        <div className="cinema-showtime-content">
                            <h5>{phim.tenPhim}</h5>
                            <div className="movie-schedule">
                                {phim.lstLichChieuTheoPhim.map(ngayChieu => (
                                    <NavLink to={propsUserLoggedIn.taiKhoan ? `/datve/${ngayChieu.maLichChieu}` : `/signin`}
                                    className="showtime__link"
                                    key={ngayChieu.maLichChieu}
                                    onClick={() => {
                                        localStorage.setItem(maLichChieu ,JSON.stringify(ngayChieu.maLichChieu))
                                    }}>
                                        {moment(ngayChieu.ngayChieuGioChieu).format("hh:mm A")}
                                    </NavLink>
                                ))}

                            </div>
                        </div>
                    </div>
                ))
            )
        }
        return <h4 style={{ marginTop: 20 }}>Không có suất chiếu</h4>
    }

    return (
        <>
            <div className="cinema-showtime">
                <div className="cinema-showtime-container">
                    {renderLichChieu()}
                </div>
            </div>
        </>
    )
}

CinemaShedule.propTypes = {
    propsDsLichChieu: PropTypes.array,
    propsDsCumRap: PropTypes.array,
    maCumRapIndex: PropTypes.number,
    propsUserLoggedIn: PropTypes.object,
}

export default CinemaShedule

