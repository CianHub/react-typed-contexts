import {
  Action,
  LIGHT_MODE,
  DARK_MODE,
  DEC_COUNTER,
  INC_COUNTER,
} from './CounterActions';
import { CounterState, initialState } from './CounterState';

export const counterReducer: React.Reducer<CounterState, Action> = (
  state: CounterState = initialState,
  action: Action
) => {
  switch (action.type) {
    case INC_COUNTER:
      return { ...state, count: state.count + action.payload.count };
    case DEC_COUNTER:
      return { ...state, count: state.count - action.payload.count };
    case LIGHT_MODE:
      return { ...state, theme: action.payload.theme };
    case DARK_MODE:
      return { ...state, theme: action.payload.theme };

    default:
      return state;
  }
};
