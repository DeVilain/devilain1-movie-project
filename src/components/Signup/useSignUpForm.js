import { useState, useEffect } from 'react';

const useSignUpForm = (callback, validate) => {
    // state chứa info đăng ký
    const [values, setValues] = useState({
        taiKhoan: '',
        matKhau: '',
        matKhau2: '',
        email: '',
        soDt: '',
        maNhom: 'GP03',
        maLoaiNguoiDung: 'KhachHang',
        hoTen: ''
    });

    // state chứa errors khi validate
    const [errors, setErrors] = useState({});

    // state kiểm tra trạng thái submit
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) { // kiểm tra có errors không và đã nhấn submit chưa
                callback(values); // function handleSubmitSuccess()
            }
        }, [errors] // trigger re-render mỗi lần errors thay đổi
    );

    return { handleChange, handleSubmit, values, errors };
};

export default useSignUpForm;