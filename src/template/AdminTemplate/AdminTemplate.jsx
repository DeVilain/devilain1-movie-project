import React from 'react'
import { Redirect, Route } from 'react-router'
import AdminDashboard from '../../components/Admin/AdminDashboard'
import { userLogin } from '../../config/settings'



const AdminComponent = (props) => {
    return (
        <AdminDashboard content={props.children} adminName={props.adminName}></AdminDashboard>
    )
}

const AdminTemplate = ({ Component, ...rest }) => {
    const adminAuth = JSON.parse(localStorage.getItem(userLogin))?.maLoaiNguoiDung;
    const adminName = JSON.parse(localStorage.getItem(userLogin))?.taiKhoan;
    return <Route {...rest} render={(props) => {
        return (adminAuth === 'QuanTri') ? <AdminComponent adminName={adminName}>
            <Component {...props} />
        </AdminComponent> : <Redirect to={{pathname:"/signin", state: {from: props.location}}} />
    }}
    />
}

export default AdminTemplate
