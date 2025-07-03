import React, {useEffect, useReducer, useState} from 'react';

// 1. 액션 타입 정의 (오타 방지 및 가독성 향상)
const ACTIONS = {
    ADD: 'add-todo', // 새로운 할 일을 추가
    TOGGLE: 'toggle-todo', // 할 일 완료 여부 토글
    DELETE: 'delete-todo', // 할 일 삭제
};

// 2. 상태 전환 로직을 담당하는 reducer 함수
//    - 상태(todos 배열)와 액션(action 객체)을 받아서 새로운 상태를 반환
function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            return [
                ...todos, {
                    id: Date.now(), // 고유 ID 생성
                    name: action.payload.name, // 입력값
                    complete: false, // 기본 완료 상태는 false
                }
            ];

        case ACTIONS.TOGGLE:
            // 해당 id의 complete 값을 반전
            return todos.map(
                (todo) => todo.id === action.payload.id
                    ? {
                        ...todo,
                        complete: !todo.complete
                    }
                    : todo
            );

        case ACTIONS.DELETE:
            // 해당 id를 가진 할 일을 제거
            return todos.filter((todo) => todo.id !== action.payload.id);

        default:
            return todos;
    }
}

// 3. 메인 컴포넌트
export default function TodoApp() {
    // useReducer: 상태(todos)와 상태 변경 함수(dispatch) 제공
    const [todos, dispatch] = useReducer(reducer, []);
    // 입력 필드 값 관리
    const [input, setInput] = useState('');

    // 할 일 추가 핸들러
    const handleAdd = () => {
        if (input.trim() === '') 
            return; // 공백 입력 방지
        dispatch({
            type: ACTIONS.ADD,
            payload: {
                name: input
            }
        }); // 액션 디스패치
        setInput(''); // 입력창 초기화

    };
    
    useEffect(() => {
        console.log('todos가 변경됨:', todos);
    }, [todos]);


    return (
        <div style={{
                padding: 20
            }}>
            <h2>📝 ToDo 리스트</h2>

            {/* 입력 필드 및 추가 버튼 */}
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="할 일을 입력하세요"/>
            <button onClick={handleAdd}>추가</button>

            {/* 할 일 목록 렌더링 */}
            <ul>
                {
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            style={{
                                marginTop: 10
                            }}>
                            {/* 완료 시 텍스트 취소선 표시 */}
                            <span
                                style={{
                                    textDecoration: todo.complete
                                        ? 'line-through'
                                        : 'none',
                                    marginRight: 10
                                }}>
                                {todo.name}
                            </span>

                            {/* 완료/되돌리기 버튼 */}
                            <button
                                onClick={() => dispatch({
                                    type: ACTIONS.TOGGLE,
                                    payload: {
                                        id: todo.id
                                    }
                                })
}>
                                {
                                    todo.complete
                                        ? '되돌리기'
                                        : '완료'
                                }
                            </button>

                            {/* 삭제 버튼 */}
                            <button
                                onClick={() => dispatch({
                                    type: ACTIONS.DELETE,
                                    payload: {
                                        id: todo.id
                                    }
                                })
}>
                                삭제
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
