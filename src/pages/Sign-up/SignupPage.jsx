import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Signup from '../../components/Signup/Signup.jsx'
import SignUpSuccess from '../../components/Signup/SignUpSuccess.jsx';
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction.js';

const SignupPage = () => {

    // state đổi trạng thái khi đăng ký thành công
    const [isSubmitted, setIsSubmitted] = useState(false);

    // state chứa lỗi response từ server
    const [serverError, setServerError] = useState("");

    const dispatch = useDispatch();

    function handleSubmitSuccess(SignUpInfo) {
        // dispatch thông tin đăng ký
        // truyền vào các state để xử lý
        dispatch(dangKyAction(SignUpInfo, setIsSubmitted, setServerError));
    }

    return (
        <>

            {!isSubmitted ? <Signup
                handleSubmitSuccess={handleSubmitSuccess} 
                serverError={serverError}></Signup> : <SignUpSuccess />}
        </>
    )
}

export default SignupPage
