import {
  Action,
  ActionWithCount,
  ActionWithTheme,
  DARK_MODE,
  DEC_COUNTER,
  INC_COUNTER,
  LIGHT_MODE,
} from './CounterActions';
import { CounterState, initialState } from './CounterState';

export const counterReducer: React.Reducer<CounterState, Action> = (
  state: CounterState = initialState,
  action: Action
) => {
  switch (action.type) {
    case INC_COUNTER:
      const incAction = action as ActionWithCount;
      return { ...state, count: state.count + incAction.payload.count };

    case DEC_COUNTER:
      const decAction = action as ActionWithCount;
      return { ...state, count: state.count - decAction.payload.count };

    case LIGHT_MODE:
      const lightAction = action as ActionWithTheme;
      return { ...state, theme: lightAction.payload.theme };

    case DARK_MODE:
      const darkAction = action as ActionWithTheme;
      return { ...state, theme: darkAction.payload.theme };

    default:
      return state;
  }
};
