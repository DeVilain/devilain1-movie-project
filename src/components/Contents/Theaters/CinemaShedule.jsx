import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

function CinemaShedule({ propsDsLichChieu, maCumRapIndex, propsDsCumRap }) {

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
                                        <button key={ngayChieu.maLichChieu}>{moment(ngayChieu.ngayChieuGioChieu).format("hh:mm A")}</button>
                                    ))}

                            </div>
                        </div>
                    </div>
                ))
            )
        }
        return <h4 style={{marginTop: 20}}>Không có suất chiếu</h4>
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

}

export default CinemaShedule

