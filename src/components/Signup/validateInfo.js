export default function validateInfo(values) {
    let errors = {};

    if (!values.taiKhoan.trim()) {
        errors.taiKhoan = 'Tài khoản không được để trống';
    } else if (!/^[A-Za-z]+/.test(values.taiKhoan.trim())) {
        errors.taiKhoan = 'Tài khoản phải bắt đầu bằng chữ';
    }

    if (!values.matKhau) {
        errors.matKhau = 'Mật khẩu không được để trống';
    } else if (values.matKhau.length < 3) {
        errors.matKhau = 'Độ dài mật khẩu tối thiểu là 3 kí tự';
    }

    if (!values.matKhau2) {
        errors.matKhau2 = 'Xác nhận mật khẩu không được để trống';
    } else if (values.matKhau2 !== values.matKhau) {
        errors.matKhau2 = 'Mật khẩu không trùng khớp';
    }

    if (!values.email) {
        errors.email = 'Email không được để trống';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Địa chỉ email không hợp lệ';
    }

    if (!values.soDt) {
        errors.soDt = 'Số điện thoại không được để trống';
    }
    /* else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(values.soDt)) {
           errors.soDt = 'Số điện thoại không hợp lệ';
       } */

    if (!values.hoTen.trim()) {
        errors.hoTen = 'Họ tên không được để trống';
    }

    return errors;
}