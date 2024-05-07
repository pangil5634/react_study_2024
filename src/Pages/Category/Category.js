import React, {useState, useEffect} from 'react';
import testJsonData from "../../App_Components/test";
import styled from "styled-components";
import {Link} from 'react-router-dom';

function Category() {
    
    return (
        <div>
            <h1>Category Page</h1>
            {
                testJsonData.map((item, index) => (
                    item.title != null &&
                    <StyledLink to={"/" + item.title} key={index}>
                            <h3>{item.title}</h3>
                    </StyledLink>
                ))
            }
        </div>
    );
}


const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        color: #5262F5; // 원하는 hover 효과의 색상으로 변경
    }
`;

export default Category;