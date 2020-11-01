export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';

export type ACTION_TYPES = typeof INC_COUNTER | typeof DEC_COUNTER;

export interface Action {
  type: ACTION_TYPES;
  payload: number;
}
