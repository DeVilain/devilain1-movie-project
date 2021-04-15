import React from "react";
import {
  Upload,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Button,
  Spin,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;
const AddFormUI = ({
  formProps,
  form,
  errors,
  ImgProps,
  loading,
}) => {

  return (
    <Form
      form={form}
      name="complex-form"
      onFinish={() => formProps.handleSubmit(form.getFieldsValue())}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Spin tip="Loading..." spinning={loading}>
        {errors && <p style={{ color: "red" }}>{errors}</p>}
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
            <Input style={{ width: "100%" }} />
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
            <Input name="biDanh" style={{ width: "100%" }} />
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
            <Input name="trailer" style={{ width: "100%" }} />
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
            valuePropName="fileList"
            getValueFromEvent={formProps.normFile}
            noStyle
            rules={[{ required: true, message: "Vui lòng chọn hình ảnh" }]}
          >
            <Upload {...ImgProps}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
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
            <Input name="moTa" style={{ width: "100%" }} />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="maNhom"
          label="Mã nhóm"
          style={{ margin: 0 }}
          rules={[{ required: true, message: "Vui lòng chọn mã nhóm" }]}
        >
          <Select placeholder="Chọn mã nhóm" name="maNhom">
            <Option value="GP01">GP01</Option>
            <Option value="GP02">GP02</Option>
            <Option value="GP03">GP03</Option>
            <Option value="GP04">GP04</Option>
            <Option value="GP05">GP05</Option>
            <Option value="GP06">GP06</Option>
            <Option value="GP07">GP07</Option>
            <Option value="GP08">GP08</Option>
            <Option value="GP09">GP09</Option>
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
            format="YYYY-MM-DD"
            style={{ margin: 0 }}
            name="ngayKhoiChieu"
          />
        </Form.Item>
        <Form.Item
          name="danhGia"
          label="Đánh giá"
          rules={[{ required: true, message: "Vui lòng đánh giá" }]}
        >
          <InputNumber name="danhGia" min={1} max={10} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" htmlType="submit" onClick={formProps.onCheck}>
            Thêm phim
          </Button>
        </Form.Item>
      </Spin>
    </Form>
  );
};

export default AddFormUI;
