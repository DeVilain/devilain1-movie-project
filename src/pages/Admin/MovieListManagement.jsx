import React, { useState } from "react";

import { Table, Space, Button, Modal, Pagination } from "antd";

const columns = [
  {
    title: "Mã phim",
    dataIndex: "maPhim",
    key: "maPhim",
  },
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Mô tả",
    dataIndex: "moTa",
    key: "moTa",
  },

  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <button className="button">Sửa</button>
        <button className="button">Xóa</button>
      </Space>
    ),
  },
];

const data = [
  {
    key: 1,
    maPhim: "14324",
    tenPhim: "John Brown",
    moTa: "New York No. 1 Lake Park",
    
  },
  {
    key: 2,
    maPhim: "234234",
    tenPhim: "Jim Green",
    moTa: "London No. 1 Lake Park",
  },
  {
    key: 3,
    maPhim: "3434653",
    tenPhim: "Joe Black",
    moTa: "Sidney No. 1 Lake Park",
  },
];

const MovieListManagement = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);

    // modal đóng sau 2s submit
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      <h2>Quản lý phim</h2>

      <Button
        type="primary"
        shape="round"
        style={{ marginBottom: "20px" }}
        onClick={showModal}
      >
        Thêm phim
      </Button>

      {/* Modal thêm phim */}
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>

      {/* Table danh sách phim */}
      <Table
        columns={columns}
        dataSource={data}
        
        pagination={{ position: ["bottomCenter"], pageSize: 10 }}
        onRow={()=>{
          return{
            onClick: event =>{console.log(event.target);}
          }
        }}
      />
      
    </>
  );
};

export default MovieListManagement;
