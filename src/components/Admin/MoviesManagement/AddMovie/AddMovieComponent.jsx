import React, { useState } from "react";
import { Button, Modal } from "antd";
import AddFormHandler from "./AddFormHandler";

const AddMovieComponent = () => {
  // toggle display modal
  const [visible, setVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  function handleCancel() {
    setVisible(false);
    setLoading(false);
  }

  function showModal() {
    setVisible(true);
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
        okText="Thêm phim"
        onCancel={handleCancel}
        footer={false}
      >
        <AddFormHandler loading={loading} setLoading={setLoading} />
      </Modal>
    </>
  );
};

export default AddMovieComponent;
