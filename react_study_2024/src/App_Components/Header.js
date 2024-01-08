import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";
import {InnerPage, Page} from "./App_Components";

export default function Header() {
    return (
        <Page>
            <InnerPage>
                <Div>
                    <Section_Logo>
                        <Menu to="/">
                            {/* <P>image</P> */}
                            <Img src={`/Logo.png`} alt="logo image"/>
                        </Menu>
                    </Section_Logo>
                    <Section_Menu>
                        <Menu to="/About">
                            <P>About</P>
                        </Menu>
                        <Menu to="/Category">
                            <P>Category</P>
                        </Menu>
                    </Section_Menu>
                </Div>
                <div style={OutletStyle}>
                    <Outlet/>
                </div>
            </InnerPage>
        </Page>

    );
}

const Div = styled.div `

    width: 100%;
    height : 50px;
    /* background-color: gray; */

    display: flex;

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
    margin : 0px;
    margin-left: 50px;

    height : 100%;
    font-size: 25px;

    display: flex;
    align-items: center;
`

const Menu = styled(Link)`
    height : 100%;

    text-decoration: none;
    color : inherit;

    &:hover{
        opacity: 50%;
        color : #0079FF;
    }
`;

export const OutletStyle = {
    width: "100%",
    height: "100%",

    borderRadius: "30px",


    marginTop: "40px",
};
