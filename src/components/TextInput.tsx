import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const TextInput = ({
  label,
  handleOnChange,
  value,
  placeHolder,
  type,
}: Input) => {
  return (
    <Label htmlFor={label}>
      <span className="sr-only">{placeHolder}</span>

      {type === "input" && (
        <TextInputElement
          onChange={handleOnChange}
          aria-label={label}
          value={value}
          name={label}
          id={label}
          type="text"
          placeholder={placeHolder}
        />
      )}

      {type === "textarea" && (
        <TextAreaElment
          onChange={handleOnChange}
          aria-label={label}
          value={value}
          name={label}
          id={label}
          placeholder={placeHolder}
        ></TextAreaElment>
      )}
    </Label>
  );
};

const Label = styled.label`
   display: block;
   margin: 24px; 0;
  
   .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
 
`;

const TextInputElement = styled.input`
  min-width: 500px;
  border-radius: 4px;
  border: 0;
  outline: 0;
  background-color: rgba(238, 232, 212, 0.4);
  color: #000;
  font-size: 1rem;
  padding: 10px 16px;
  font-weight: bold;
`;

const TextAreaElment = styled.textarea`
  min-width: 500px;
  border-radius: 4px;
  border: 0;
  outline: 0;
  background-color: rgba(238, 232, 212, 0.6);
  padding: 10px 16px;
  font-weight: bold;
  min-height: 300px;
  font-family: sans-serif;
`;

export default TextInput;
