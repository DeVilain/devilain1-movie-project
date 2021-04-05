import React from "react";
import { Form, Input, Select, Button, DatePicker, TimePicker, InputNumber} from "antd";

const { Option } = Select;

const AddForm = ({ handleSubmit, onOk, setValid }) => {
  return (
    <Form
      name="complex-form"
      //onFinish={handleSubmit}
      onSubmitCapture={onOk}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Mã phim" htmlFor="complex-form_maPhim" style={{ margin: 0 }} required>
        <Form.Item
          name="maPhim"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
          
        >
          <Input style={{ width: '100%' }} placeholder="Please input" required/>
        </Form.Item>
      </Form.Item>
      <Form.Item className="ant-form-item-required" label="Tên phim" htmlFor="complex-form_tenPhim" style={{ margin: 0 }} required>
        <Form.Item
          name="tenPhim"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input style={{ width: '100%' }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Bí danh" htmlFor="complex-form_biDanh" style={{ margin: 0 }} required>
        <Form.Item
          name="biDanh"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input style={{ width: '100%' }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Trailer" htmlFor="complex-form_trailer" style={{ margin: 0 }} required>
        <Form.Item
          name="trailer"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input style={{ width: '100%' }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Hình ảnh" htmlFor="complex-form_hinhAnh" style={{ margin: 0 }} required>
        <Form.Item
          name="hinhAnh"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input style={{ width: '100%' }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Mô tả" htmlFor="complex-form_moTa" style={{ margin: 0 }} required>
        <Form.Item
          name="moTa"
          noStyle
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input style={{ width: '100%' }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Mã nhóm" style={{ margin: 0 }}
       name="maNhom"
       rules={[{ required: true, message: "Vui lòng chọn mã nhóm" }]}
      >
            <Select placeholder="Chọn mã nhóm">
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
      <Form.Item name="ngayKhoiChieu" label="Ngày khởi chiếu" style={{ margin: 0 }} required>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ margin: 0 }} />
      </Form.Item>
      <Form.Item
        label="Đánh giá"      
      >
        <InputNumber name="danhGia" min={1} max={10}  />
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Thêm phim
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddForm;
