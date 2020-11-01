import React from 'react';

interface Props {
  symbol: string;
  setCount: Function;
}

const Button: React.FC<Props> = ({ symbol, setCount }) => {
  return <button onClick={() => setCount()}>{symbol}</button>;
};

export default Button;
