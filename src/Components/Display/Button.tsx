import React, { memo } from 'react';

interface Props {
  symbol: string;
  setCount: Function;
}

const Button: React.FC<Props> = ({ symbol, setCount }) => {
  console.log(`${symbol} Button Rendered`);

  return <button onClick={() => setCount()}>{symbol}</button>;
};

export default memo(Button);
