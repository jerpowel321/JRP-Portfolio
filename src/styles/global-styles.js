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
    font-size: 30px;
    /* font-size: 16px;
    font-weight: 300;
    line-height: 1.625; */
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
};

export const Header = styled.h1`
  font-family: "Roboto";
  line-height: 100px;
  font-size: 100px;
  color: white;
  margin: 0px;
`;

export const PinkSubHeader = styled.p`
  font-family: "Open Sans";
  font-size: 35px;
  color: #fa6591;
  font-weight: 600;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 30px;
  width: 700px;
  color: white;
  font-weight: 400;
`;