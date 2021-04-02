import {Button} from "../../shared/ui/Button";
import React from "react";
import {useCalculator} from "../../context";

export const NumberButton = ({digit}: {digit: number}) => {
  const {setCurrentOperand} = useCalculator();
  const onNumberClickHandler = () => {
    setCurrentOperand((num) => {
        return (num !== undefined && num !== '0') ? `${num}${digit}` : digit.toString()
      }
    )
  }

  return (
    <Button onClick={onNumberClickHandler}>{digit}</Button>
  )
}