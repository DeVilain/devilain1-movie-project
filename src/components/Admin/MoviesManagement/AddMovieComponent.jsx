import React, { useState } from "react";
import { Button, Modal } from "antd";
import AddForm from "./AddForm";

const AddMovieComponent = () => {
  // trigger display modal
  const [visible, setVisible] = useState(false);

  // set loading for submit
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [values, setValues] = useState();

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

  function handleChange() {

  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!valid){
      console.log('fail');
      return;
    }
    console.log("submitted");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
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
        onCancel={handleCancel}
      >
        <AddForm onOk={handleSubmit} setValid={setValid} />
      </Modal>
    </>
  );
};

export default AddMovieComponent;
