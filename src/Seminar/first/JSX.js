import React from "react";

// JSX 1
// 에러 나는 경우
// function App() {
//     return (
//         <h1>리액트 안녕!</h1>
//         <h2>잘 작동하니?</h2>
//     )
// }

// 정상적인 경우
// function App() {
//     return (
//         <div>
//             <h1>리액트 안녕!</h1>
//             <h2>잘 작동하니?</h2>
//         </div>
//     );
// }

// JSX2
// 변수 처리
// function App() {
//     const name = "리액트";
//     return (
//         <div>
//             <h1>{name} 안녕!</h1>
//             <h2>잘 작동하니?</h2>
//         </div>
//     );
// }

// JSX3
// 변수 처리
// function App() {
//     const name = "리액트";
//     return (
//         <div>
//             {name === "리액트"
//                 ? (<h1>리액트입니다.</h1>)
//                 : (<h1>리액트가 아닙니다.</h1>)
//             }
//         </div>
//     );
// }

function App() {
    const name = "리액트";
    return (
        <div>
            {name && (<h1>name 변수가 있습니다.</h1>)}
            <h1>우리는 {name || 'html'}를 사용합니다.</h1>
        </div>
    );
}


