const LIGHT_THEME = 'LIGHT';
const DARK_THEME = 'DARK';

export type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

export interface CounterState {
  count: number;
  theme: Theme;
}

export const initialState: CounterState = { count: 0, theme: LIGHT_THEME };
