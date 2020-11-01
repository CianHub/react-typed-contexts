import React, { CSSProperties, useCallback, useContext } from 'react';
import {
  DEC_COUNTER,
  INC_COUNTER,
  LIGHT_MODE,
  DARK_MODE,
} from '../../Context/CounterActions';
import { CounterContext } from '../../Context/CounterContext';
import { Theme } from '../../Context/CounterState';
import Button from '../Display/Button';
import Count from '../Display/Count';

const bg = (theme: Theme): CSSProperties =>
  theme === 'LIGHT'
    ? { backgroundColor: 'white', color: 'black' }
    : { backgroundColor: 'black', color: 'white' };

const CounterContainer: React.FC = () => {
  const {
    state: { count, theme },
    dispatch,
  } = useContext(CounterContext);

  const updateLightTheme = useCallback(
    () => dispatch({ type: LIGHT_MODE, payload: { count, theme: 'LIGHT' } }),
    []
  );

  const updateDarkTheme = useCallback(
    () => dispatch({ type: DARK_MODE, payload: { theme: 'DARK' } }),
    []
  );

  const updateTheme = theme === 'LIGHT' ? updateDarkTheme : updateLightTheme;

  const memoIncCounter = useCallback(
    () => dispatch({ type: INC_COUNTER, payload: { count: 1 } }),
    []
  );

  const memoDecCounter = useCallback(
    () => dispatch({ type: DEC_COUNTER, payload: { count: 1 } }),
    []
  );

  console.log('Container Rendered');
  console.log(theme, count);

  return (
    <div style={bg(theme)}>
      <h1>{theme}</h1>
      <Count count={count} />
      <Button symbol="Update Theme" onClick={updateTheme} />
      <Button symbol="+" onClick={memoIncCounter} />
      <Button symbol="-" onClick={memoDecCounter} />
    </div>
  );
};

export default CounterContainer;
