import React, { useEffect, useState } from 'react'

import CinemaInfo from './CinemaInfo'
import CinemaLogo from './CinemaLogo'
import CinemaShedule from './CinemaShedule'

import { useDispatch, useSelector } from 'react-redux'
import { fetch_CinemaInformation_request } from '../../../redux/actions/QuanLyRapAction'


const TheaterSection = () => {
    const dispatch = useDispatch();

    const propsDsHeThongRap = useSelector(state => state.QuanLyHeThongRapReducer.danhSachHeThongRap);
    //console.log(propsDsHeThongRap);

    const propsDsCumRap = useSelector( state => state.QuanLyHeThongRapReducer.danhSachCumRap);
    //console.log(propsDsCumRap);

    const propsDsLichChieu = useSelector( state => state.QuanLyHeThongRapReducer.danhSachLichChieu);
    //console.log(propsDsLichChieu);

    // dispatch action call API để lấy danh sách hệ thống rạp
    useEffect(() => {
        dispatch(fetch_CinemaInformation_request());
    }, [dispatch]);

    // state lưu trữ logo cụm rạp
    const [logoImg, setLogoImg] = useState("http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png");

    // state vị trí để so sánh maCumRap
    const [maCumRapIndex, setMaCumRapIndex] = useState(0);

    // state vị trí dùng để active khi select hệ thống rạp
    const [heThongRapActive, setHeThongRapActive] = useState(0);
    
    // state vị trí dùng để active khi select cụm rạp
    const [cumRapActive, setCumRapActive] = useState(0);

    return (
        <div className="cinema-container" id="rap">
            <h1>Rạp phim</h1>
            <div className="cinema-wrapper">
                {/* cinema logo */}
                <CinemaLogo
                    propsDsHeThongRap={propsDsHeThongRap}
                    setLogoImg={setLogoImg}
                    setMaCumRapIndex={setMaCumRapIndex}
                    heThongRapActive={heThongRapActive}
                    setHeThongRapActive={setHeThongRapActive}
                    setCumRapActive={setCumRapActive}
                />

                {/* cinema info */}
                <CinemaInfo
                    propsDsCumRap={propsDsCumRap}
                    logoImg={logoImg}
                    setMaCumRapIndex={setMaCumRapIndex}
                    cumRapActive={cumRapActive}
                    setCumRapActive={setCumRapActive}
                    propsDsLichChieu={propsDsLichChieu}
                    maCumRapIndex={maCumRapIndex}
                />

                {/* schedule */}
                <CinemaShedule
                    propsDsLichChieu={propsDsLichChieu}
                    propsDsCumRap={propsDsCumRap}
                    maCumRapIndex={maCumRapIndex}
                />
            </div>
        </div>
    )
}

export default TheaterSection