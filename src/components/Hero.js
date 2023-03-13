import React, { Component } from "react";
import styled from "styled-components";
import {
  Header,
  Text,
  breakpoints,
  TwoColumnFlexContainer
} from "../styles/global-styles";
class Hero extends Component {
  render() {
    return (
      <TwoColumnFlexContainer>
        <ContentContainer>
          <Header>Hey! I'm</Header>
          <Header>Jennifer Powell</Header>
          <Text>
            Frontend focused software engineer with over three years of
            experience with React, two years with React Native and Redux. I enjoy working cross functionally to ideate and
            implement user friendly webpages and apps, and I'm looking for opportunities to make a positive social impact.
          </Text>
          <CtaContainer>
            <a href="mailto:jerpowel321@gmail.com">
              <img src="/images/lets-talk.png" alt="Let's Talk" width="100%" />
            </a>
          </CtaContainer>
        </ContentContainer>
        <ImageContainer>
          <img src="/images/hero-1.png" alt="Creative Developer" width="100%" />
        </ImageContainer>
      </TwoColumnFlexContainer>
    );
  }
}

export default Hero;

const ImageContainer = styled.div`
width: 100%;
  @media (max-width: ${breakpoints.xl}px) {
    max-width: 600px;
  }
`;
export const ContentContainer = styled.div`
  text-align: left;
  @media (max-width: ${breakpoints.l}px) {
    text-align: center;
  }
`;

export const CtaContainer = styled.div`
  display: flex;
  img {
    width: 200px;
  }
  @media (max-width: ${breakpoints.l}px) {
    justify-content: center;
  }
  @media (max-width: ${breakpoints.s}px) {
    img {
      width: 140px;
    }
  }
`;