import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { userLogin } from '../../config/settings';
import AdminDashboard from './AdminDashboard';

const AdminLogin = () => {
 
    function checkMaNguoiDung() {
        let user = {}
        if(sessionStorage.getItem(userLogin)){
            user = JSON.parse(sessionStorage.getItem(userLogin));
            // nếu mã loại = quản trị => đc phép vào admin dashboard
            if(user.maLoaiNguoiDung === 'QuanTri'){
                return <AdminDashboard />
            }
            // ngược lại sẽ bị đẩy về trang chủ
            return <Redirect to="/" />
            
        }
        // nếu chưa có thông tin đăng nhập thì sẽ chuyển về trang đăng nhập
        return <Redirect to="/signin" />
    }

    return (
        checkMaNguoiDung()
    )
}

export default AdminLogin
