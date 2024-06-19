"use client";
import React, { useState } from "react";
import { Input, Modal } from "antd";
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
      <p className="cursor-pointer text-[#FBD029]" onClick={showModal}>
        "Регистрация"
      </p>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ className: "custom-ok-button" }}
        okText="Register"
        className="p-[25px]"
      >
        <div className="p-[25px] flex flex-col gap-3">
          {" "}
          <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
          <p className="w-[270px] text-[12px]">
            Если Вы не зарегистрированы, нажмите кнопку{" "}
            <button className="text-[#FBD029]" onClick={handleCancel}>"Вход"!</button>
          </p>
          <div className="flex gap-3">
            <button className="w-[120px] h-[30px] bg-[#F2F2F2] rounded-lg">
              Google
            </button>
            <button className="w-[120px] h-[30px] bg-[#F2F2F2] rounded-lg">
              Facebook
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            <label htmlFor="input">
              <h1>Имя</h1>
              <Input placeholder="Имя" className="w-[180px]" />
            </label>
            <label htmlFor="input">
              <h1>Фамилия</h1>
              <Input placeholder="Фамилия" className="w-[180px]" />
            </label>{" "}
            <label htmlFor="input">
              <h1>Номер телефона</h1>
              <Input placeholder="Номер телефона" className="w-[180px]" />
            </label>
          </div>
          <h1>
            Создайте свой постоянный логин и пароль для доступа к вашей учетной
            записи!
          </h1>
          <div className="flex gap-3">
            <label htmlFor="input">
              <Input placeholder="Login" className="w-[180px]" />
            </label>{" "}
            <label htmlFor="input">
              <Input placeholder="Password" className="w-[180px]" />
            </label>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
