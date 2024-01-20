import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";
import {InnerPage, Page} from "./App_Components";

export default function Header() {
    return (
        <Page>
            <InnerPage>

                {/* 메뉴바 영역 */}
                <MenuBarDiv>
                    {/* Logo 부분 */}
                    <Section_Logo>
                        <Menu to="/">
                            {/* <P>image</P> */}
                            <Img src={`/Logo.png`} alt="logo image"/>
                        </Menu>
                    </Section_Logo>

                    {/* 페이지 부분 */}
                    <Section_Menu>
                        <Menu to="/About">
                            <P>About</P>
                        </Menu>
                        <Menu to="/Category">
                            <P>Category</P>
                        </Menu>
                    </Section_Menu>
                </MenuBarDiv>

                {/* Outlet 영역 */}
                <main style={OutletStyle}>
                    <Outlet/>
                </main>
            </InnerPage>
        </Page>

    );
}

const MenuBarDiv = styled.div `

    width: 100%;
    height : 50px;

    display: flex;

    /* background-color: gray; */
    margin-bottom: 40px;

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
    /* flex : 0.7; */
    justify-content: end;

    /* background-color: yellow; */
`;

const Img = styled.img `
    height : 100%;
`;

const P = styled.p `
    height : 100%;
    
    display: flex;
    align-items: center;
    
    margin : 0px;
    margin-left: 50px;

    font-size: 25px;
`;

const Menu = styled(Link)`
    height : 100%;

    text-decoration: none;
    color : inherit;

    &:hover{
        opacity: 50%;
        color : #0079FF;
    }
`;

const OutletStyle = {
    // 여기에 스타일 속성을 추가하세요
    width: "100%", 
    height: "100%",
    backgroundColor : "gray",
};