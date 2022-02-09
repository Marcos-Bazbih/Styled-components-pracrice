import styled from "styled-components";

export const StyledFooter = styled.footer`
    grid-area: footer;
    color: ${({ mode }) => mode.color};
    background: ${({ mode }) => mode.background};
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px solid ${({ mode }) => mode.color};
`
