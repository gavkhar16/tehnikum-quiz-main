import React from "react";
import { Header } from "../components/Header";
import { AppLabl } from "../components/AppLable";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppLabl labelText="Ваше имя"/>
            <AppLabl  labelText="Ваше номере телефона"/>
            {/* <label className="input-wrapper" htmlFor="username">
              Ваше имя
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label> */}
           <AppButton buttonText="Далее"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
