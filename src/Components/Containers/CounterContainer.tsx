import React, { useContext } from 'react';
import { CounterContext } from '../../Context/CounterContext';
import Button from '../Display/Button';

interface Props {}

const CounterContainer: React.FC<Props> = () => {
  const { state, dispatch } = useContext(CounterContext);

  //const incrementCount = () => dispatch()

  return (
    <div>
      <Button symbol="+" setCount={dispatch}></Button>{' '}
    </div>
  );
};

export default CounterContainer;
