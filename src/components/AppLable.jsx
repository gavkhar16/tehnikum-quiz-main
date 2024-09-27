import React from "react";


export const AppLabl = ({labelText}) =>{
    return(
      <label className="input-wrapper" htmlFor="username">
     {labelText}
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
     );
}