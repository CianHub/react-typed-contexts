import React, { useCallback, useContext } from 'react';
import { DEC_COUNTER, INC_COUNTER } from '../../Context/CounterActions';
import { CounterContext } from '../../Context/CounterContext';
import Button from '../Display/Button';
import Count from '../Display/Count';

const CounterContainer: React.FC = () => {
  const {
    state: { count },
    dispatch,
  } = useContext(CounterContext);

  const memoIncCounter = useCallback(
    () => dispatch({ type: INC_COUNTER, payload: 1 }),
    []
  );

  const memoDecCounter = useCallback(
    () => dispatch({ type: DEC_COUNTER, payload: 1 }),
    []
  );

  console.log('Container Rendered');

  return (
    <div>
      <Count count={count} />
      <Button symbol="+" setCount={memoIncCounter} />
      <Button symbol="-" setCount={memoDecCounter} />
    </div>
  );
};

export default CounterContainer;
