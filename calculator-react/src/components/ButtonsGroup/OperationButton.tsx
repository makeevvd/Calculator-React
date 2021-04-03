import React from "react";
import {OperationsParams, useCalculator} from "../../context";
import {Button} from "../../shared/ui/Button";
import {numberToFixed} from "../../shared/lib/numberToFixed";

export const OperationButton = ({operation}: {operation: OperationsParams}) => {

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

  const onOperationClickHandler = () => {
    if (currentOperation && previousOperand && currentOperand) {
      const newValue = operations[currentOperation](+previousOperand, +currentOperand);
      const newValueToFixed = numberToFixed(newValue, 5);
      setPreviousOperand(newValueToFixed.toString())
      setCurrentOperation(operation);
      setCurrentOperand(undefined)
      return;
    }

    if (currentOperation && previousOperand) {
      setCurrentOperation(operation)
      return
    }
    setCurrentOperation(operation)
    setPreviousOperand(currentOperand)
    setCurrentOperand(undefined)
  }

  return (
    <Button onClick={onOperationClickHandler}>{operation}</Button>
  )
}