// CallbackParent.js
import React, { useState, useCallback } from 'react';
import CallbackChild from './CallbackChild';

export default function CallbackParent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('클릭됨');
  }, []);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>카운트 증가</button>
      <CallbackChild onClick={handleClick} />
    </>
  );
}
