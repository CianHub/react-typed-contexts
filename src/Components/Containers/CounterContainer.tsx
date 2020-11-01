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
    () => dispatch({ type: LIGHT_MODE, payload: { theme: 'LIGHT' } }),
    [dispatch]
  );

  const updateDarkTheme = useCallback(
    () => dispatch({ type: DARK_MODE, payload: { theme: 'DARK' } }),
    [dispatch]
  );

  const memoIncCounter = useCallback(
    () => dispatch({ type: INC_COUNTER, payload: { count: 1 } }),
    [dispatch]
  );

  const memoDecCounter = useCallback(
    () => dispatch({ type: DEC_COUNTER, payload: { count: 1 } }),
    [dispatch]
  );

  console.log('Container Rendered');

  return (
    <div style={bg(theme)}>
      <h1>{theme}</h1>
      <Count count={count} />
      <Button
        symbol="Update Theme"
        onClick={theme === 'LIGHT' ? updateDarkTheme : updateLightTheme}
      />
      <Button symbol="+" onClick={memoIncCounter} />
      <Button symbol="-" onClick={memoDecCounter} />
    </div>
  );
};

export default CounterContainer;
