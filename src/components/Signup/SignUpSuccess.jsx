import React from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'

function SignUpSuccess(props) {
    return (
        <div className="signup-container">
            <div className="signup-wrapper container">
                <Link className="signup-icon" to="/">CyberMovies</Link>
                <div className="signup-success-container">
                    <p>Đăng ký thành công!</p>
                    <div className="signup-success-img">
                        <img src="images/signup-success.svg" alt="signup-success" />
                    </div>
                    <div className="signup-success-redirect">
                        <Link to="/signin" className="redirect-link-1"><button>Đăng nhập</button></Link>
                        <Link to="/" className="redirect-link-2">Trở về Trang chủ</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

SignUpSuccess.propTypes = {

}

export default SignUpSuccess

