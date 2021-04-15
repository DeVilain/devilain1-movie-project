import React, { useState } from "react";
import { Upload, message, Form } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addMovieRequest } from "../../../../redux/actions/MovieAdminAction";
import AddFormUI from "./AddFormUI";

const AddFormHandler = ({ loading, setLoading }) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [errors, setErrors] = useState("");

  // props xử lý upload hình ảnh
  const ImgProps = {
    name: "hinhAnh",
    maxCount: 1,
    // kiểm tra file ảnh trước khi upload
    beforeUpload: (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("Vui lòng chọn định dạng ảnh *.png hoặc *.jpeg !");
        return Upload.LIST_IGNORE;
      }
      const isLt2M = file.size / 1024 / 1024 < 1;
      if (!isLt2M) {
        message.error("Kích cỡ ảnh phải nhỏ hơn 1MB!");
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    // thông báo cho user dựa theo status
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`Tải ảnh thành công`);
      } else if (info.file.status === "error") {
        message.error(`Tải ảnh thất bại`);
      }
    },
  };

  // props chức các chức năng xử lý form
  const formProps = {
    // kiểm tra value file ảnh và trả về mảng các file
    normFile: (e) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },

    // kiểm tra các field input đã được điền đầy đủ chưa
    onCheck: async () => {
      try {
        const values = await form.validateFields();
        console.log("Success:", values);
      } catch (errorInfo) {
        console.log("Failed:", errorInfo);
      }
    },

    // xử lý submit form
    handleSubmit: (formValues) => {
      setLoading(true);
      const movieData = handleDataType(formValues);

      // chuyển values vào formData();
      const formData = new FormData();
      for (let key in movieData) {
        formData.append(key, movieData[key]);
      }
      // auto append maPhim để server xử lý generate maPhim
      formData.append("maPhim", 0);
      dispatch(addMovieRequest(formData, setErrors, setLoading, form));
    },
  };

  // xử lý kiểu dữ liệu của các values
  function handleDataType(movie) {
    const ngayKhoiChieu = moment(movie?.ngayKhoiChieu).format("DD/MM/YYYY");
    const hinhAnh = movie.hinhAnh[0]?.originFileObj;
    const movieInfo = {
      ...movie,
      ngayKhoiChieu: ngayKhoiChieu,
      hinhAnh: hinhAnh,
    };
    return movieInfo;
  }

  return (
    <AddFormUI
      formProps={formProps}
      form={form}
      errors={errors}
      ImgProps={ImgProps}
      loading={loading}
    />
  );
};

export default AddFormHandler;
