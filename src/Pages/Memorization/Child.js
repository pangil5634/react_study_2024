// Child.js
import React from 'react';

function Child({ value }) {
  console.log('🔄 자식 컴포넌트 렌더링');
  return <div>값: {value}</div>;
}

export default React.memo(Child);
// React.memo(Child)을 사용하는 이유는 불필요한 리렌더링을 방지하기 위해서
// 이렇게 하면 다른 파일에서 import할 때 자동으로 memo된 최적화 버전이 import됨
// 외부에서 import할 때 자동으로 최적화된 버전을 쓰게 하려고