// CallbackChild.js
import React from 'react';

function CallbackChild({ onClick }) {
  console.log('🧒 자식 렌더링');
  return <button onClick={onClick}>자식 버튼</button>;
}

export default React.memo(CallbackChild);