import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";

const StepOne = () => {
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [answer, setAnswer] = useState("");
  const [clickkBtn, setClickkBtn] = useState(true);
  

  useEffect(() => {
    if (nameRegex.test(answer)) {
      setClickkBtn(false); // Кнопка активна, если ввод корректен
    } else {
      setClickkBtn(true);  // Кнопка неактивна при ошибке
    }
  }, [answer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Header headerType="h2" headerText="1. Занимательный вопрос" />
            <AppLabel
              isRequired
              id="answer"
              inputPlaceholder="Ваш ответ"
              inputType="text"
              labelValue={answer}
              labelChange={setAnswer}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={clickkBtn}
              id="next-btn"
              buttonType="button"
              buttonClick={errorClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;