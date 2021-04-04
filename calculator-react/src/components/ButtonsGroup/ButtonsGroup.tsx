import React from "react";
import styled from "styled-components";
import {operations, useCalculator} from "../../context";
import {Button} from "../../shared/ui/Button";
import {OperationButton} from "./OperationButton";
import {NumberButton} from "./NumberButton";
import {numberToFixed} from "../../shared/lib/numberToFixed";

const ButtonsGroup = () => {

  const {
    previousOperand,
    setPreviousOperand,
    currentOperand,
    setCurrentOperand,
    currentOperation,
    setCurrentOperation,
    setResetFlag,
  } = useCalculator();

  const onEqualClick = () => {
    if (!currentOperation || previousOperand === undefined || currentOperand === undefined) return
    const newValue = operations[currentOperation](+previousOperand, +currentOperand);
    const newValueToFixed = numberToFixed(newValue, 5);
    setCurrentOperand(newValueToFixed.toString())
    setCurrentOperation(undefined);
    setPreviousOperand(undefined);
    setResetFlag(true);
  }

  const onAllClearClick = () => {
    setPreviousOperand(undefined);
    setCurrentOperation(undefined);
    setCurrentOperand('0');
  }

  const onRootClick = () => {
    setCurrentOperand((num) => {
      if (num === undefined) return;
      const newValue = Math.sqrt(+num)
      const newValueToFixed = numberToFixed(newValue, 5);
      return newValueToFixed.toString()
    })
  }

  const onDeleteClick = () => {
    setCurrentOperand((prev) => {
      if (prev === undefined) return
      return prev.toString().slice(0, -1)
    })
  }

  const onPlusMinusClick = () => {
    setCurrentOperand((prev) => {
      if (prev === undefined) return;
      return (-prev).toString()
    })
  }

  const onPointClick = () => {
    if (currentOperand?.includes('.')) return
    setCurrentOperand((prev) => {
      if (prev === undefined) return '0.'
      return `${prev}.`
    })
  }

  return (
    <>
      <Button onClick={onPlusMinusClick}>±</Button>
      <Button onClick={onDeleteClick}>DEL</Button>
      <OperationButton operation={"/"} />
      <Button onClick={onRootClick}>√</Button>
      <NumberButton digit={9} />
      <NumberButton digit={8} />
      <NumberButton digit={7} />
      <OperationButton operation={"×"} />
      <NumberButton digit={4} />
      <NumberButton digit={5} />
      <NumberButton digit={6} />
      <OperationButton operation={"+"} />
      <NumberButton digit={1} />
      <NumberButton digit={2} />
      <NumberButton digit={3} />
      <OperationButton operation={"-"} />
      <Button onClick={onPointClick}>.</Button>
      <NumberButton digit={0} />
      <OperationButton operation={"^"} />
      <Button onClick={onEqualClick}>=</Button>
      <AllClearButton onClick={onAllClearClick}>AC</AllClearButton>
    </>
  )
}

const AllClearButton = styled(Button)`
  grid-column: 1 / -1;
`

export default ButtonsGroup;