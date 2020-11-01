import React, { ReactElement, useReducer } from 'react';
import { CounterContext } from './CounterContext';
import { counterReducer } from './CounterReducer';
import { initialState } from './CounterState';

interface Props {
  children: ReactElement;
}

export const CounterContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
