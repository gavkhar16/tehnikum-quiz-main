import React from "react";


export const AppLabel = ({labelText, errorText, id, isRequired, inputType, labelValue, inputPlaceholder, labelChange, hasError}) =>{
    return(
      <label className={'input-wrapper $ {hasError && "_error"}'} htmlFor={id}>
     {labelText}
      <input
       value={labelValue}
        required={isRequired}
        type={inputType}
        name={id}
        id={id}
        onChange={(e)=>labelChange(e.target.value)}
        placeholder={inputPlaceholder}
      />
      <span id="error-message">
        {errorText}
      </span>
      {hasError && <span id="error-message">{errorText}</span>}
    </label>
     );
};