// Parent.js
import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>카운트 증가</button>
        <p>카운트 : {count}</p>
      <Child value={value} />
    </>
  );
}
