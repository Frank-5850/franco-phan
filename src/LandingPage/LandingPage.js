import React from "react";
import {
  Greeting,
  HeaderText,
  LandingPageContainer,
  LandingPageWrapper,
  Skills,
} from "./landingPage.styles";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingPageContainer>
        <Greeting>Hello, my name is</Greeting>
        <HeaderText> Franco Phan</HeaderText>
        <HeaderText>I enjoy developing the web</HeaderText>
        <Skills>MERN stack developer</Skills>
      </LandingPageContainer>
    </LandingPageWrapper>
  );
};

export default LandingPage;
