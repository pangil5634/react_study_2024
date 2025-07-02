import React, {useRef, useEffect, useState} from "react";

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // 1️⃣ 입력창 포커스 관리용 ref
    const inputRef = useRef(null);

    // 2️⃣ 이전 메시지 길이를 저장할 ref
    const prevMessageLengthRef = useRef(0);

    // 컴포넌트가 마운트될 때, 입력창에 자동으로 포커스
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // 메시지를 전송하는 함수
    const sendMessage = () => {
        if (!input.trim()) 
            return;
        
        // 새로운 메시지를 추가
        setMessages((prev) => [...prev, input]);

        // 현재 메시지 길이를 저장 (렌더링에는 영향 X)
        prevMessageLengthRef.current = input.length;

        // 입력창 초기화
        setInput("");

        // 메시지 전송 후에도 자동으로 입력창에 포커스
        inputRef.current.focus();
    };

    return (
        <div>
            <div>
                <h3>채팅창</h3>
                {messages.map((msg, index) => (<div key={index}>{msg}</div>))}
            </div>

            <div style={{
                    marginTop: "10px"
                }}>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="메시지를 입력하세요"/>
                <button onClick={sendMessage}>전송</button>
            </div>

            <div
                style={{
                    marginTop: "10px",
                    fontSize: "12px",
                    color: "gray"
                }}>
                <p style={{color :'white'}}>💡 이전 메시지 길이: {prevMessageLengthRef.current}</p>
            </div>
        </div>
    );
}

export default ChatBox;
