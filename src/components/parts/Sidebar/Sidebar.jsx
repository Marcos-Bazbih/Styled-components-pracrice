import "./Sidebar.css";
import React, { useContext } from "react";
import { StyledSidebar } from "../../styles/Sidebar.styled";
import { Themes } from "../../Context";

const Sidebar = () => {
  const {mode, ToggleTheme} = useContext(Themes);

  return (
    <StyledSidebar mode={mode}>
      <h1>Sidebar</h1>
    </StyledSidebar>
  );
};

export default Sidebar;
