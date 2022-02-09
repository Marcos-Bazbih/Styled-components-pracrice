import "./Footer.css";
import React, { useContext } from "react";
import { StyledFooter } from "../../styles/Footer.styled";
import { Themes } from "../../Context";

const Footer = () => {
  const {mode, ToggleTheme} = useContext(Themes);

  return (
    <StyledFooter mode={mode}>
      <h1>Footer</h1>
    </StyledFooter>
  );
};

export default Footer;
