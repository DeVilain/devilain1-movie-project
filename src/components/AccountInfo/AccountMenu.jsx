import React from 'react'
import PropTypes from 'prop-types'

function AccountMenu({ active, setActive }) {
    return (
        <div className="accountMenu-container">
            <div className="accountMenu-wrapper">
                <div className="accountAva-container">
                    <img src="images/account_ava.jpg" alt="" />
                </div>
                <div className={`accountMenu-link1 ${active === 'account_info' ? 'acc-active-link' : ''}`}
                    onClick={() => {
                        setActive('account_info');
                    }}
                >
                    Thông tin tài khoản
                </div>
                <div className={`accountMenu-link2 ${active === 'booking_history' ? 'acc-active-link' : ''}`}
                    onClick={() => {
                        setActive('booking_history')
                    }}
                >
                    Lịch sử đặt vé
                </div>
                <div className="accountMenu-logout">
                    LogOut section
                </div>
            </div>
        </div >
    )
}

AccountMenu.propTypes = {
    active: PropTypes.string,
}

export default AccountMenu

