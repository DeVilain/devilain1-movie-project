import React, { useState } from 'react'
import AccountContent from '../../components/AccountInfo/AccountContent'
import AccountMenu from '../../components/AccountInfo/AccountMenu'
import { userLogin } from '../../config/settings'

export const ThongTinTaiKhoanPage = () => {
    const [active, setActive] = useState('account_info');

    return (
        <div className="accountInfo-container">
            {localStorage.getItem(userLogin) ?
                <div className="accountInfo-wrapper">
                    <AccountMenu active={active} setActive={setActive} />
                    <AccountContent active={active} />
                </div>
                :
                <>
                    <h2>Bạn chưa đăng nhập</h2>
                </>
            }
        </div>
    )
}
