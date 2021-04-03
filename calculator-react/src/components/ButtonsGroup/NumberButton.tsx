import {Button} from "../../shared/ui/Button";
import React from "react";
import {useCalculator} from "../../context";

export const NumberButton = ({digit}: {digit: number}) => {
  const {setCurrentOperand, resetFlag, setResetFlag} = useCalculator();

  const onNumberClickHandler = () => {
    setCurrentOperand((num) => {

        return (num !== undefined && num !== '0' && !resetFlag) ? `${num}${digit}` : digit.toString()
      }
    )
    setResetFlag(false)
  }

  return (
    <Button onClick={onNumberClickHandler}>{digit}</Button>
  )
}