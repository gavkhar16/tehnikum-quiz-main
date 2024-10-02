import React from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              hasError={true}
              errorText="Введитеимя имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
            />
            <AppLabel
              labelText="Ваш номере телефона"
              errorText="Введите номер в правильном формате"
              id="phone"
              hasError={true}
              isRequired={true}
              inputPlaceholder="+998 9- --- -- --"
              inputType="tel"
            />
            <AppButton buttonText="Далее" isDisabled={true }/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
