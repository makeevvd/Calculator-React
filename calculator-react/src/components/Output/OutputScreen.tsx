import React from "react";
import styled from "styled-components";
import {useCalculator} from "../../context";

export const OutputScreen = () => {

  const {
    previousOperand,
    setPreviousOperand,
    currentOperand,
    setCurrentOperand,
    currentOperation,
    setCurrentOperation,
    resetFlag,
    setResetFlag,
    operations
  } = useCalculator();

  return (
    <Output>
      <PreviousOperand>
        {/*{previousOperand ? Number(previousOperand).toFixed(3) : ''}*/}
        {previousOperand ? +parseFloat((+previousOperand).toFixed(3)) : ''}
        {currentOperation ? currentOperation : ''}
      </PreviousOperand>
      <CurrentOperand>
        {currentOperand ? +parseFloat((+currentOperand).toFixed(7)) : ''}
      </CurrentOperand>
    </Output>
  )
}

const Output = styled.div`
  background-color: rgba(0, 0, 0, .75);
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
`

const PreviousOperand = styled.div`
  color: rgba(255, 255, 255, .75);
  font-size: 1.5rem;
`

const CurrentOperand = styled.div`
  color: white;
  font-size: 2.5rem;
`