import { Theme } from './CounterState';

export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const LIGHT_MODE = 'LIGHT_MODE';
export const DARK_MODE = 'DARK_MODE';

export type ACTION_TYPES =
  | typeof INC_COUNTER
  | typeof DEC_COUNTER
  | typeof LIGHT_MODE
  | typeof DARK_MODE;

export interface Action {
  type: ACTION_TYPES;
  payload: { count: number; theme: Theme };
}
