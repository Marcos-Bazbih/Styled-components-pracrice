import styled from "styled-components";

export const StyledSidebar = styled.div`
    grid-area: sidebar;
    color: ${({ mode }) => mode.color};
    background: ${({ mode }) => mode.background};
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px solid ${({ mode }) => mode.color};
`