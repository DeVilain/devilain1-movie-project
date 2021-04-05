import React, { useState } from "react";

import { Table, Space, Button, Modal } from "antd";
import AddMovieComponent from "../../components/Admin/MoviesManagement/AddMovieComponent";

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
    render: (text) => <a href="/">{text}</a>,
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
  

  return (
    <>
      <h2>Quản lý phim</h2>
      <AddMovieComponent />

   

      {/* Table danh sách phim */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"], pageSize: 10 }}
        onRow={() => {
          return {
            style: { cursor: "pointer" },
            onClick: (event) => {
              console.log(event.target);
            },
          };
        }}
      />
    </>
  );
};

export default MovieListManagement;
