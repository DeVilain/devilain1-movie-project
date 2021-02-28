import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal/Modal';
import CinemaShedule from './CinemaShedule';

function CinemaInfo({ maCumRapIndex, propsDsLichChieu, propsDsCumRap, logoImg, setMaCumRapIndex, cumRapActive, setCumRapActive }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="cinema-info">
                {propsDsCumRap.map((cumRap, index) => (
                    <div key={cumRap.maCumRap}
                        className={cumRapActive === index ? 'cinema-info-active' : "cinema-info-container"}
                        onClick={() => {
                            setMaCumRapIndex(index);
                            setCumRapActive(index);
                            setIsOpen(true);
                        }}
                    >
                        <div className="cinema-info-wrapper">
                            <img src={logoImg} alt="logo img" />
                            <div className="cinema-info-content">
                                <p className={cumRapActive === index ? "text-bold" : ''}>
                                    <span>{cumRap.tenCumRap} </span>

                                </p>
                                <p>{cumRap.diaChi}</p>

                            </div>
                        </div>
                    </div>
                ))}
                
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={() => setIsOpen(false)}>
                    {<CinemaShedule
                        propsDsLichChieu={propsDsLichChieu}
                        propsDsCumRap={propsDsCumRap}
                        maCumRapIndex={maCumRapIndex}
                    />}
                </Modal>
                
            </div>
        </>
    )
}

CinemaInfo.propTypes = {
    maCumRapIndex: PropTypes.number,
    propsDsLichChieu: PropTypes.array,
    propsDsCumRap: PropTypes.array,
    logoImg: PropTypes.string,
    cumRapActive: PropTypes.number,
}

export default CinemaInfo

