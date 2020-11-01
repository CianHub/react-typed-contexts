import { createContext } from 'react';
import { Action } from './CounterActions';
import { initialState, CounterState } from './CounterState';

export const CounterContext = createContext<{
  state: CounterState;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => {},
});
