import "./Home.css";
import React, { useContext } from "react";
import { StyledHome } from "../../styles/Home.styled";
import { Themes } from "../../Context";

const Home = () => {
  const {mode, ToggleTheme} = useContext(Themes);

  return (
    <StyledHome  mode={mode}>
      <h1>Home</h1>
    </StyledHome>
  );
};

export default Home;
