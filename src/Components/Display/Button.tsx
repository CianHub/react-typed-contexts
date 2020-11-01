import React, { memo } from 'react';

interface Props {
  symbol: string;
  onClick: Function;
}

const Button: React.FC<Props> = ({ symbol, onClick }) => {
  console.log(`${symbol} Button Rendered`);

  return <button onClick={() => onClick()}>{symbol}</button>;
};

export default memo(Button);
