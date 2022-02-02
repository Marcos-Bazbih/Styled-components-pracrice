import styled from "styled-components";

export const StyledHeader = styled.header`
    grid-area: header;
    background: ${({ theme }) => theme.colors.header};
    display:flex;
    justify-content:center;
    align-items:center;
    transition: 0.5s ease-in-out;
    h1{
        color:white;
    }
    &:hover{
        background: blue;
    }
`