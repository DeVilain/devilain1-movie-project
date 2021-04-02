import React from 'react'
import { useDispatch } from 'react-redux';
import { setLichChieu_request } from '../../../redux/actions/QuanLyRapAction';

function CinemaLogo({ propsDsHeThongRap, setLogoImg, setMaCumRapIndex, setHeThongRapActive, heThongRapActive, setCumRapActive }) {

    const dispatch = useDispatch();

    return (
        <>
            <div className="cinema-logo">
                <ul className="cinema-logo-list">
                    {propsDsHeThongRap.map((heThongRap, index) => (<li key={heThongRap.maHeThongRap}
                        className={heThongRapActive === index ? 'active-link' : 'cinema-logo-img'}
                        onClick={() => {
                            setLogoImg(heThongRap.logo);
                            setMaCumRapIndex(0);
                            setHeThongRapActive(index);
                            setCumRapActive(0);
                            dispatch(setLichChieu_request(heThongRap.maHeThongRap));
                        }}
                    >
                        <img src={heThongRap.logo} alt="cinema-logo" />
                    </li>))}
                    {/*  {propsDsHeThongRap.map((heThongRap, index) => (<li key={heThongRap.maHeThongRap}
                        className={isActive === index ? 'active-link' : 'cinema-logo-img'}
                        onClick={() => {
                            setActive(index);
                            setMaHeThongRap(heThongRap.maHeThongRap);
                            setLogoImg(heThongRap.logo);
                            setCumRapActive(0);
                            
                        }}
                    >
                        <img src={heThongRap.logo} alt="cinema-logo" />
                    </li>))} */}
                </ul>
            </div>
        </>
    )
}


export default CinemaLogo

