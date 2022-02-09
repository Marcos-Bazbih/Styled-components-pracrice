import styled from "styled-components";

export const StyledHome = styled.main`
    grid-area: main;
    color: ${({ mode }) => mode.color};
    background: ${({ mode }) => mode.background};
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px solid ${({ mode }) => mode.color};
`