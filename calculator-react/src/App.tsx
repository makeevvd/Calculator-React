import React, {useState} from 'react';
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





// .calculator-grid > Button {
//   border: 1px solid white;
//   font-size: 2rem;
//   outline: 0;
//   background-color: rgba(255, 255, 255, .75);
//   cursor: pointer;
// }
//
// .calculator-grid > Button:hover {
//   background-color: rgba(255, 255, 255, .9)
// }
//
// .output {

// }
//
// .span-two {
//   grid-column: span 2;
// }
//
// .previous-operand {
//   color: rgba(255, 255, 255, .75);
//   font-size: 1.5rem;
// }
//
// .current-operand {
//   color: white;
//   font-size: 2.5rem;
// }
//
// .allclear {
//   grid-column: 1 / -1;
// }


export default App;
