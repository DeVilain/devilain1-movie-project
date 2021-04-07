import React, { useState } from "react";
import { Button, Modal} from "antd";
import AddForm from "./AddForm";
import moment from "moment";

const AddMovieComponent = () => {
  // toggle display modal
  const [visible, setVisible] = useState(false);

  // set loading
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [values, setValues] = useState({
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
    danhGia: 10,
  });
  console.log(values);
  const [errors, setErrors] = useState({});

  const [valid, setValid] = useState(false);

  function handleOk() {
    setConfirmLoading(true);

    // modal close after submitted 2s
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  }

  function handleCancel() {
    console.log("Clicked cancel button");
    setVisible(false);
  }

  function showModal() {
    console.log("modal");
    setVisible(true);
  }

  // handle ngayKhoiChieu + danhGia value
  function onChange(value, dateString) {
    // format time
    const time = moment(dateString).format("YYYY-MM-DDTHH:mm:ss");
    setValues({ ...values, danhGia: value, ngayKhoiChieu: time });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log("submitted");
    //setConfirmLoading(true);
    /* setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000); */
  }

  return (
    <>
      <Button
        type="primary"
        shape="round"
        style={{ marginBottom: "20px" }}
        onClick={showModal}
      >
        Thêm phim
      </Button>

      {/* Modal add movie */}
      <Modal
        title="Thêm phim"
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        okText="Thêm phim"
        onCancel={handleCancel}
      >
        <AddForm
          handleSubmit={handleSubmit}
          setValid={setValid}
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          onChange={onChange}
        />
      </Modal>
    </>
  );
};

export default AddMovieComponent;
