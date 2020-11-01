import React from 'react';

interface Props {
  count: number;
}

const Count: React.FC<Props> = ({ count }) => {
  console.log('Count Rendered');
  return <h2>{count}</h2>;
};

export default Count;
