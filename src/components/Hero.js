import React, { Component } from "react";
import styled from "styled-components";

class About extends Component {
  render() {
    return (
      <ContentContainer>
        <div>
          <Header>Hey! I'm</Header>
          <Header>Jennifer Powell</Header>
          <Text>
            Frontend focused software engineer with over two years of
            experience. Enjoys working with designers and creative agents to
            ideate and implement user friendly webpages and apps.
          </Text>
          <img src="/images/lets-talk.png" alt="Let's Talk" width="200" />
        </div>
        <div>
          <img src="/images/hero-1.png" alt="Creative Developer" width="100%" />
        </div>
      </ContentContainer>
    );
  }
}

export default About;

const ContentContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Header = styled.h1`
 font-family: 'Roboto';
 line-height: 100px;
 font-size: 100px;
 color: white;
 margin: 0px;
`;

const Text = styled.p`
  font-family: "Roboto";
  font-size: 30px;
  width: 700px;
  color: white;
  font-weight: 400;
`;