import React, { Fragment } from 'react';

// import router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import css

import './App.css';

// import pages
import TrangChu from './pages/TrangChu/TrangChu';
import Signin from './pages/Sign-in/Signin.jsx';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import SignupPage from './pages/Sign-up/SignupPage.jsx';
import DatVe from './components/DatVe/DatVe';
import { ThongTinTaiKhoanPage } from './pages/ThongTinTaiKhoan/ThongTinTaiKhoanPage';

import AdminTemplate from './template/AdminTemplate/AdminTemplate';

import Admin from './pages/Admin/Admin';
import MovieListManagement from './pages/Admin/MovieListManagement';
import UserManagement from './pages/Admin/UserManagement';
import ShowtimeManagement from './pages/Admin/ShowtimeManagement';


function App() {
    
    return ( 
        <Fragment>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    {/* Home */}
                    <Route exact path="/" component={TrangChu}></Route>
                    <Route exact path="/signin" component={Signin}></Route>
                    <Route exact path="/signup" component={SignupPage}></Route>
                    <Route exact path="/chitietphim/:maPhim" component={ChiTietPhim}></Route>
                    <Route exact path="/datve/:maLichChieu" component={DatVe}></Route>
                    <Route exact path="/user" component={ThongTinTaiKhoanPage} />

                    {/* Admin */}
                    <AdminTemplate exact path="/admin" Component={Admin} />
                    <AdminTemplate exact path="/admin/movie-list" Component={MovieListManagement} />
                    <AdminTemplate exact path="/admin/users" Component={UserManagement} />
                    <AdminTemplate exact path="/admin/showtime" Component={ShowtimeManagement} />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;