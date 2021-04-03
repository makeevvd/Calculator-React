import React, {useEffect} from "react";
import styled from "styled-components";
import {useCalculator} from "../../context";
import {numberToFixed} from "../../shared/lib/numberToFixed";

export const OutputScreen = () => {

  const {
    previousOperand,
    setPreviousOperand,
    currentOperand,
    currentOperation,
    setCurrentOperation,
    setResetFlag,
  } = useCalculator();

  useEffect(() => {
    if (currentOperand && isNaN(+currentOperand)) {
      setResetFlag(true);
      setPreviousOperand(undefined);
      setCurrentOperation(undefined);
    }
  }, [previousOperand, currentOperand])

  return (
    <Output role="output">
      <PreviousOperand>
        {previousOperand ? numberToFixed(+previousOperand, 5).toString() : ''}
        {currentOperation ? currentOperation : ''}
      </PreviousOperand>
      <CurrentOperand>
        {currentOperand ? currentOperand : ''}
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