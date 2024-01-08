import styled from 'styled-components';

// 전체 배경 컴포넌트
export const Page = styled.div`
    width: 100vw;
    height : 200vh;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    
    background-color: #FBF9F1;
    color : #092635;

    margin : 0px;
    padding : 40px;
`;

// 전체 내부 배경 컴포넌트
export const InnerPage = styled.div`

    width: 70%;
    height : 100%;
    border-radius: 40px;

    background-color: white;
    color : inherit;
    
    margin : 0px;
    padding : 40px;
`