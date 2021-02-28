import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import SignIn from '../../components/Signin/index.jsx';
import SignInSuccess from '../../components/Signin/SignInSuccess.jsx';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';

const Signin = (props) => {

    let dispatch = useDispatch();

    // kiểm tra đăng nhập thành công hay không
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);


    const [userLogin, setUserLogin] = useState({
        taiKhoan: '',
        matKhau: ''
    });

    const [errorResponse, setErrorResponse] = useState('');

    function dangNhap(user) {
        dispatch(dangNhapAction(user, setErrorResponse, setIsLoginSuccess));
    }

    return (
        <>
            {!isLoginSuccess ? <SignIn
                props={props}
                userLogin={userLogin}
                errorResponse={errorResponse}
                setUserLogin={setUserLogin}

                dangNhap={dangNhap}></SignIn> : <SignInSuccess />}

        </>
    )
}

export default Signin
