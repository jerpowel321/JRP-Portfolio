import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    overscroll-behavior: none;
    color: white;
    font-family: 'Roboto';
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto';
    font-weight: 300;
    color: white;
  }
  input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
`;

export const breakpoints = {
  s: 600,
  m: 800,
  l: 1000,
  xl: 1200,
  xxl: 1500,
};

export const Header = styled.h1`
  font-family: "Roboto";
  line-height: 100px;
  font-size: 95px;
  color: white;
  margin: 0px;
  @media (max-width: ${breakpoints.xxl}px) {
    font-size: 90px;
    line-height: 80px;
    font-size: 70px;
  }
  @media (max-width: ${breakpoints.xl}px) {
    line-height: 80px;
    font-size: 70px;
  }
  @media (max-width: ${breakpoints.l}px) {
    line-height: 80px;
    font-size: 60px;
  }
  @media (max-width: ${breakpoints.s}px) {
    line-height: 1.2;
    font-size: 30px;
  }
`;

export const SecondaryHeader = styled.h4`
  font-family: "Open Sans";
  font-size: 40px;
  color: #fff5fd;
  font-weight: 600;
  margin: 20px 0px;
  @media (max-width: ${breakpoints.xxl}px) {
    font-size: 38px;
  }
  @media (max-width: ${breakpoints.xl}px) {
    font-size: 34px;
  }
  @media (max-width: ${breakpoints.m}px) {
    font-size: 30px;
  }
  @media (max-width: ${breakpoints.s}px) {
    line-height: 1.2;
    font-size: 24px;
    margin: 10px 0px;
  }
`;

export const SubHeader = styled.p`
  font-family: "Open Sans";
  font-size: 35px;
  color: #fff5fd;
  margin: 0px;
`;

export const PinkSubHeader = styled.p`
  font-family: "Open Sans";
  font-size: 35px;
  color: #fa6591;
  font-weight: 600;
  margin: 0px;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 28px;
  color: white;
  font-weight: 400;
  @media (max-width: ${breakpoints.xl}px) {
    line-height: 1.2;
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.s}px) {
    line-height: 1.2;
    font-size: 16px;
  }
`;

export const SmallText = styled.p`
  font-family: "Open Sans";
  font-size: 22px;
  color: #fff5fd;
  margin: 0px;
  @media (max-width: ${breakpoints.m}px) {
    line-height: 1.2;
    font-size: 16px;
  }
`;

export const TwoColumnFlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  justify-content: space-between;
  > div {
    width: 50%;
  }
  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column-reverse;
     > div {
      width: 100%;
    }
  }
`;

export const CenterContainer = styled.div`
  text-align: center;
`;
