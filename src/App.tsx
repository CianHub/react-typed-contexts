import React from 'react';
import './App.css';
import CounterContainer from './Components/Containers/CounterContainer';
import { CounterContextProvider } from './Context/CounterContext';

function App() {
  return (
    <CounterContextProvider>
      <CounterContainer></CounterContainer>
    </CounterContextProvider>
  );
}

export default App;
