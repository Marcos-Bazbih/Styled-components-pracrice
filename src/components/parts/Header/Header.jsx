// import "./Header.css";
import { StyledHeader } from "../../styles/Header.styled";
import React, {useContext} from "react";
import { Themes } from "../../Context";
import Button from "../Button";

const Header = () => {
  const {mode, ToggleTheme} = useContext(Themes);

  return (
    <StyledHeader mode={mode}>
      <h1>Header</h1>
      <Button mode={mode} onClick={ToggleTheme}>Dark Mode</Button>
    </StyledHeader>
  );
};

export default Header;
