import styled from "styled-components";

export const StyledHeader = styled.header`
    grid-area: header;
    color: ${({ mode }) => mode.color};
    background: ${({ mode }) => mode.background};
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px solid ${({ mode }) => mode.color};
`