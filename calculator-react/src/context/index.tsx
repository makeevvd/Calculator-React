import React, {Dispatch, SetStateAction, useState} from "react";

type OperationFn = (left: number, right: number) => number

const createOperations = <OperationsType extends Record<string, OperationFn>>(
  opts: OperationsType,
) => opts
export const operations = createOperations({
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
  '^': (left, right) => left ** right
});

export type OperationsParams = keyof typeof operations;

type CalculatorContextType = {
  previousOperand: string | undefined
  setPreviousOperand: Dispatch<SetStateAction<string | undefined>>
  currentOperand: string | undefined
  setCurrentOperand: Dispatch<SetStateAction<string | undefined>>
  currentOperation: keyof typeof operations | undefined
  setCurrentOperation: Dispatch<SetStateAction<keyof typeof operations | undefined>>
  resetFlag: boolean
  setResetFlag: Dispatch<SetStateAction<boolean>>
}

const CalculatorContext = React.createContext<CalculatorContextType | undefined>(undefined)
CalculatorContext.displayName = 'CalculatorContext';

const AppProvider:React.FC = ({children}) => {

  const [previousOperand, setPreviousOperand] = useState<string | undefined>();
  const [currentOperand, setCurrentOperand] = useState<string | undefined>();
  const [currentOperation, setCurrentOperation] = useState<keyof typeof operations | undefined>();
  const [resetFlag, setResetFlag] = useState(false);

  const value = React.useMemo(() => ({
    previousOperand,
    setPreviousOperand,
    currentOperand,
    setCurrentOperand,
    currentOperation,
    setCurrentOperation,
    resetFlag,
    setResetFlag,
  }), [
    previousOperand,
    setPreviousOperand,
    currentOperand,
    setCurrentOperand,
    currentOperation,
    setCurrentOperation,
    resetFlag,
    setResetFlag,
  ])

  return (
        <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>
  )
}

const useCalculator = () => {
  const context = React.useContext(CalculatorContext)
  if (context === undefined) {
    throw new Error(`useCalculator must be used within a CalculatorProvider`)
  }
  return context
}

export {AppProvider, useCalculator}