import { Action } from './CounterActions';
import { CounterState, initialState } from './CounterState';

export const counterReducer: React.Reducer<CounterState, Action> = (
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
