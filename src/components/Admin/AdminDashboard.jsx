import React, { useState } from 'react'

import { Layout } from 'antd';

import 'antd/dist/antd.css';

import { NavLink } from 'react-router-dom';

import account_ava from './account_ava.jpg';

const { Header, Content, Footer, Sider } = Layout;

const AdminDashboard = ({ content, adminName }) => {

    return (
        <>
            <Layout className="admin">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}></Header>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        paddingTop: '64px',
                    }}
                >
                    <div className="admin__logo">
                        <img src={account_ava} alt="avatar" />
                    </div>
                    <div className="admin__intro">
                        <p>Xin chào <NavLink to="/user">{adminName}</NavLink> </p>
                    </div>
                    <ul theme="dark" className="admin__menu" >
                        <li
                            className={`admin__menu-item`}
                        >
                            <NavLink
                                to="/admin/movie-list"
                                activeClassName="active"
                            >Quản lý phim</NavLink>
                        </li>
                        <li
                            className={`admin__menu-item`}
                        >
                            <NavLink
                                to="/admin/users"
                                activeClassName="active"
                                
                            >Quản lý user</NavLink>
                        </li>
                        <li
                            className={`admin__menu-item`}

                        >
                            <NavLink
                                to="/admin/showtime"
                                activeClassName="active"
                                
                            >Quản lý lịch chiếu</NavLink>
                        </li>
                    </ul>
                    <div className="admin__backToHome">
                        <span>Trở về trang chủ</span>
                    </div>
                    <div className="admin__logout">
                        <NavLink to="/">Đăng xuất</NavLink>
                    </div>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>

                    <Content style={{ margin: '64px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            {content}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default AdminDashboard
