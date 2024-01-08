import styled from "styled-components";

export default function Header() {
    return (
        <Div>
            <Section_Logo>
                <Img src={`/Logo.png`} alt="logo image"/>
            </Section_Logo>
            <Section_Menu>
                <Menu name="About"/>
                <Menu name="Category"/>
            </Section_Menu>
        </Div>
    );
}

const Div = styled.div `

    width: 100%;
    height : 50px;
    /* background-color: gray; */

    display: flex;
    align-items: center;

`;

const Section_Logo = styled.div `
    width: inherit;
    height: inherit;

    display: flex;
    flex : 0.3;
    /* background-color: red; */
`

const Section_Menu = styled.div `
    width: inherit;
    height: inherit;

    display: flex;
    flex : 0.7;
    justify-content: end;
    background-color: yellow;
`;

const Img = styled.img `

`

const Menu = (e) => {
    const P = styled.p`
        font-weight: bold;
        font-size: 20px;
        width : 10%;
        height: 100%;

        margin: 0px;
        margin-left: 10px;
        background-color: aqua;

        display: flex;
        justify-content: center;
        align-items: center;
    `
    return (
        <P>{e.name}</P>
    );
}