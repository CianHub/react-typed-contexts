import React, { useContext } from 'react';
import { DEC_COUNTER, INC_COUNTER } from '../../Context/CounterActions';
import { CounterContext } from '../../Context/CounterContext';
import Button from '../Display/Button';

interface Props {}

const CounterContainer: React.FC<Props> = () => {
  const {
    state: { count },
    dispatch,
  } = useContext(CounterContext);

  const incrementCount = () => dispatch({ type: INC_COUNTER, payload: 1 });

  const decrementCount = () => dispatch({ type: DEC_COUNTER, payload: 1 });

  return (
    <div>
      <h1>{count}</h1>
      <Button symbol="+" setCount={incrementCount} />
      <Button symbol="-" setCount={decrementCount} />
    </div>
  );
};

export default CounterContainer;
