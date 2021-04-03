import React from 'react';
import './App.css';
import styled from "styled-components";
import {AppProvider} from "./context";
import ButtonsGroup from "./components/ButtonsGroup/ButtonsGroup";
import {OutputScreen} from "./components/Output/OutputScreen";

function App() {

  return (
    <AppProvider>
    <div className="App">
      <CalculatorContainer>
        <OutputScreen />
        <ButtonsGroup />
      </CalculatorContainer>
    </div>
    </AppProvider>
  );
}

const CalculatorContainer = styled.div`
  margin-right: 50px;
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(6, 100px);
`

export default App;
