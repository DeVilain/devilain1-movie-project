import React, { useEffect } from "react";
import { Form, Input, Select, DatePicker, InputNumber, Button } from "antd";
import ErrorList from "antd/lib/form/ErrorList";
import { movieApi } from "../../../API/QuanLyPhimAPI/MovieApi";
import moment from "moment";

const { Option } = Select;

const AddForm = ({
  handleSubmit,
  setValid,
  values,
  onChange,
  setValues,
  errors,
  setErrors,
}) => {
  const [form] = Form.useForm();

  async function onCheck() {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  }

  function handleDateTime(dateString) {
    const dateFormated = moment(dateString).format("YYYY-MM-DD HH:mm:ss");
    console.log(dateFormated);
    return dateFormated;
  }

  function onSubmit() {
    const formValues = form.getFieldsValue();
    const dateFormated = moment(formValues["ngayKhoiChieu"]).format("YYYY-MM-DD HH:mm:ss");
    formValues.ngayKhoiChieu = dateFormated;
    console.log(formValues);
    const formData = new FormData();
    for (let key in formValues) {
      formData.append(key, formValues[key]);
    }
    movieApi.addMovie(formData).then(()=>console.log('%csuccess','color: green'));
  }

  return (
    <Form
      form={form}
      name="complex-form"
      onFinish={onSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label="Mã phim"
        htmlFor="complex-form_maPhim"
        style={{ margin: 0 }}
        required
      >
        <Form.Item
          name="maPhim"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input
            name="maPhim"
            style={{ width: "100%" }}
            type="number"
            // onChange={(e) => setValues({ ...values, maPhim: e.target.value })}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Tên phim"
        htmlFor="complex-form_tenPhim"
        style={{ margin: 0 }}
        required
      >
        <Form.Item
          name="tenPhim"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input
            //onChange={(e) => setValues({ ...values, tenPhim: e.target.value })}
            name="tenPhim"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Bí danh"
        htmlFor="complex-form_biDanh"
        style={{ margin: 0 }}
        required
      >
        <Form.Item
          name="biDanh"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input
            name="biDanh"
            style={{ width: "100%" }}
            // onChange={(e) => setValues({ ...values, biDanh: e.target.value })}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Trailer"
        htmlFor="complex-form_trailer"
        style={{ margin: 0 }}
        required
      >
        <Form.Item
          name="trailer"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input
            //onChange={(e) => setValues({ ...values, trailer: e.target.value })}
            name="trailer"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Hình ảnh"
        htmlFor="complex-form_hinhAnh"
        style={{ margin: 0 }}
        required
      >
        <Form.Item
          name="hinhAnh"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input
            //onChange={(e) => setValues({ ...values, hinhAnh: e.target.value })}
            name="hinhAnh"
            style={{ width: "100%" }}
            type="file"
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Mô tả"
        htmlFor="complex-form_moTa"
        style={{ margin: 0 }}
        required
      >
        <Form.Item
          name="moTa"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input
            //onChange={(e) => setValues({ ...values, moTa: e.target.value })}
            name="moTa"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        name="maNhom"
        label="Mã nhóm"
        style={{ margin: 0 }}
        rules={[{ required: true, message: "Vui lòng chọn mã nhóm" }]}
      >
        <Select
          placeholder="Chọn mã nhóm"
          name="maNhom"
          //onChange={(value) => setValues({ ...values, maNhom: value })}
        >
          <Option value="GP01">GP01</Option>
          <Option value="GP02">GP02</Option>
          <Option value="GP03">GP03</Option>
          <Option value="GP04">GP04</Option>
          <Option value="GP05">GP05</Option>
          <Option value="GP06">GP06</Option>
          <Option value="GP07">GP07</Option>
          <Option value="GP08">GP08</Option>
          <Option value="GP09">GP08</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="ngayKhoiChieu"
        label="Ngày khởi chiếu"
        style={{ margin: 0 }}
        required
        rules={[{ required: true, message: "Vui lòng chọn thời gian" }]}
      >
        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          style={{ margin: 0 }}
          name="ngayKhoiChieu"
          //onChange={handleChange}
          onChange={handleDateTime}
        />
      </Form.Item>
      <Form.Item
        name="danhGia"
        label="Đánh giá"
        rules={[{ required: true, message: "Vui lòng đánh giá" }]}
      >
        <InputNumber
          name="danhGia"
          min={1}
          max={10} /* onChange={onChange} */
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={onCheck}>
          Thêm phim
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddForm;
