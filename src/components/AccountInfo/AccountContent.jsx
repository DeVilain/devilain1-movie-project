import React, { useEffect } from 'react'

import { userLogin } from '../../config/settings'
import { useDispatch, useSelector } from 'react-redux'
import { getThongTinUser_request } from '../../redux/actions/QuanLyNguoiDungAction';

function AccountContent({ active }) {

    const dispatch = useDispatch();

    const thongTinTaiKhoan = useSelector(state => state.QuanLyNguoiDungReducer.thongTinUser);
    console.log(thongTinTaiKhoan);

    function renderAccountInfo() {
        if (thongTinTaiKhoan.taiKhoan) {
            return <>
                <div className="accountContent-wrapper">
                    <div className="accountContent-label">
                        <label htmlFor="">Username: </label><i> {thongTinTaiKhoan.taiKhoan}</i><br />
                        <label htmlFor="">Họ tên:</label><i> {thongTinTaiKhoan.hoTen}</i><br />
                        <label htmlFor="">Email:</label><i> {thongTinTaiKhoan.email}</i><br />
                        <label htmlFor="">Số điện thoại:</label><i> {thongTinTaiKhoan.soDT}</i><br />
                    </div>
                </div>
            </>;
        }
        return <div className="account-loading">
            <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>;
    }

    function renderBookingHistory() {
        if (thongTinTaiKhoan.taiKhoan) {
            return <>
                <table>
                    <thead>
                        <tr>
                            <th>Tên phim</th>
                            <th>Hệ thống rạp</th>
                            <th>Rạp</th>
                            <th>Ghế</th>
                            <th>Ngày đặt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thongTinTaiKhoan.thongTinDatVe.map(ticket => (
                            <tr key={ticket.maVe}>
                                <td>{ticket.tenPhim}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>;
        }
        return <div className="account-loading">
            <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>;
    }

    useEffect(() => {
        function getAccountInfo() {
            if (sessionStorage.getItem(userLogin)) {
                let taiKhoan = JSON.parse(sessionStorage.getItem(userLogin)).taiKhoan;
                console.log(taiKhoan);
                dispatch(getThongTinUser_request(taiKhoan));
            }
            return;
        }
        getAccountInfo();
    }, [dispatch]);

    return (

        <div className="accountContent-container">
            {active === 'account_info' ? <h3>Thông tin tài khoản</h3> : <h3>Lịch sử đặt vé</h3>}
            {active === 'account_info' ? renderAccountInfo() : renderBookingHistory()}

        </div>
    )
}


export default AccountContent

