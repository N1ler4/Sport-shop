"use client";
import React, { useState } from "react";
import { Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Register from "./register"
import "./style.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="w-[40px] h-[40px] bg-[#F2F2F2] rounded-lg flex items-center justify-center"
        onClick={showModal}
      >
        <UserOutlined />
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ className: "custom-ok-button" }}
        okText="Login"
        className="p-[25px]"
      >
        <div className="p-[25px] flex flex-col gap-3">
          {" "}
          <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
          <p className="w-[270px] text-[12px]">
            Если Вы не зарегистрированы, нажмите кнопку{" "}
            <Register/>
          </p>
          <Input placeholder="Login" />
          <Input placeholder="Password" />
          <button>Забыли пароль?</button>
        </div>
      </Modal>
    </>
  );
};

export default App;
