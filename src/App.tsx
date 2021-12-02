import React from "react";
import TextInput from "./components/TextInput";
import { Input } from "./components/Input";
import styled from "styled-components";
import inputPropsGenerator from "./prop-utils";
import useInput from "./useInputHook";

const App = () => {
  /** Create getter, setter state hooks for inputs */
  const [personToo, setPersonToo] = useInput();
  const [personFrom, setPersonFrom] = useInput();
  const [letterMessage, setLetterMessage] = useInput();

  /** Generate props for two text input elements and a textarea element */
  const inputPropsOne: Input = inputPropsGenerator(
    "person-too",
    personToo,
    "Enter your name",
    "input",
    setPersonToo
  );
  const inputPropsTwo: Input = inputPropsGenerator(
    "letter",
    letterMessage,
    "Write the letter",
    "textarea",
    setLetterMessage
  );
  const inputPropsThree: Input = inputPropsGenerator(
    "person-from",
    personFrom,
    "Enter recipient's name",
    "input",
    setPersonFrom
  );

  /** Organinze all our recently created prop objects into an array */
  const allInputProps: Input[] = [
    inputPropsOne,
    inputPropsTwo,
    inputPropsThree,
  ];

  return (
    <Container>
      <InputWrapper>
        {/** Loop through the array of element props and pass them to the FormInput component */}
        {allInputProps.map((inputProps) => (
          <TextInput key={inputProps.label} {...inputProps} />
        ))}
      </InputWrapper>
      {/** Display all the getter states */}
      <OutputWrapper>
        {personToo && <span>Dear, {personToo}</span>}
        {letterMessage && (
          <p style={{ whiteSpace: "pre-line" }}>{letterMessage}</p>
        )}
        {personFrom && (
          <>
            <p>Sincerly,</p>
            <p>{personFrom}</p>
          </>
        )}
      </OutputWrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 16px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  max-width: 600px;
`;
const OutputWrapper = styled.div`
  width: 490px;
  height: 600px;
  background-color: rgba(238, 232, 212, 0.6);
  margin-top: 16px;
  padding: 16px;
`;

export default App;
