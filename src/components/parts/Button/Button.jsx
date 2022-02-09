import "./Button.css";
import styled from "styled-components";

const Button = styled.button`
cursor: pointer;
color: ${({ mode }) => mode.color};
background: ${({ mode }) => mode.background};
border: 2px solid ${({ mode }) => mode.color};
position: absolute;
right: 5vh;
top: 2.5vh;
padding: 5px 10px;
`;

export default Button;