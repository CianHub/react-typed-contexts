import React, { createContext, ReactElement, useReducer } from 'react';

interface CounterState {
  count: number;
}

enum ACTION_TYPES {
  INC_COUNTER = 'INC_COUNTER',
  DEC_COUNTER = 'DEC_COUNTER',
}

interface Action {
  type: ACTION_TYPES;
  payload: number;
}

const initialState: CounterState = { count: 0 };

const ContainerContext = createContext<{
  state: typeof initialState;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => {},
});

const counterReducer: React.Reducer<CounterState, Action> = (
  state: CounterState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return { count: state.count + action.payload };
    case 'DEC_COUNTER':
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

interface Props {
  children: ReactElement;
}

const CounterContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const value = { state, dispatch };

  return (
    <ContainerContext.Provider value={value}>
      {children}
    </ContainerContext.Provider>
  );
};

export default CounterContextProvider;
