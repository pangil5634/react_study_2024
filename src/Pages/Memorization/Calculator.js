// Calculator.js
import React, { useState, useMemo } from 'react';

function heavyCalculation(num) {
  console.log('💥 계산 중...');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i % num;
  }
  return result;
}

export default function Calculator() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(5);

  // input이 바뀔 때만 계산이 다시 일어남
  const calculated = useMemo(() => heavyCalculation(input), [input]);

  return (
    <>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>계산 결과: {calculated}</p>
      <button onClick={() => setCount((c) => c + 1)}>카운트 증가</button>
    </>
  );
}
