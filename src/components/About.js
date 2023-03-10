import React, { Component } from 'react'
import 'typeface-roboto';
import styled from "styled-components";
import Card from "./Cards";

import {
  Header,
  PinkSubHeader,
  Text,
  SecondaryHeader,
  SubHeader,
  SmallText,
} from "../styles/global-styles";
import {ACCOMPLISHMENTS, EDUCATION, VALUES } from "../utils/constants.js"
class About extends Component {
  render() {
    return (
      <>
        <Container center>
          <Column>
            <img src="/images/about.png" alt="Me" width="100%" />
          </Column>
          <Column>
            <Header>About Me</Header>
            <PinkSubHeader>I'm a Frontend Engineer</PinkSubHeader>
            <Text>
              Highly motivated Software Engineer seeking roles with tremendous{" "}
              <b>
                learning and growth opportunities while making a positive social
                impact
              </b>
              . 3 Years of experience working with React. 2 Years of experience
              working with React Native and Redux. 5 Years, Experience in
              Solution Implementation, Project Management, User/ Client
              relations,Resource Alignment, Consulting and Compliance.
            </Text>
          </Column>
        </Container>
        <i className=" fa-2x far fa-gem" style={{ paddingRight: "3px" }}></i>
        <h1 className="ib" align="center">
          <a id="values">Values</a>
        </h1>
        <Container>
          {VALUES.map((value) => (
            <Card
              icon={`fas fa-4x ${value.icon}`}
              label={value.label}
              description={value.description}
            />
          ))}
        </Container>
        <Container>
          <Column>
            <SecondaryHeader>Accomplishments</SecondaryHeader>
            {ACCOMPLISHMENTS.map((accomplishment) => (
              <Flexbox>
                <ImageContainer>
                  <img
                    src={`/images/${accomplishment.icon}.png`}
                    alt={accomplishment.name}
                  />
                </ImageContainer>
                <div>
                  <SubHeader>{accomplishment.name}</SubHeader>
                  <SmallText>{accomplishment.detail}</SmallText>
                </div>
              </Flexbox>
            ))}
          </Column>
          <Column>
            <SecondaryHeader>Education</SecondaryHeader>
            {EDUCATION.map((school) => (
              <div>
                <PinkSubHeader>{school.name}</PinkSubHeader>
                <SmallText>{school.detail}</SmallText>
              </div>
            ))}
            <div
              className="l"
              style={{ paddingTop: "50px", paddingBottom: "20px" }}
            >
              <a
                href="/images/JenniferPowell_Resume.pdf"
                alt="My Resume"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="buttonContainer">
                  <button className="button">
                    Resume
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                  </button>
                </div>
              </a>
            </div>
          </Column>
        </Container>
      </>
    );
	}
}

export default About

const Container = styled.div`
  display: flex;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
`;

const Column = styled.div`
width: 50%;`

export const Flexbox = styled.div`
  display: flex;
  justify-content: space=between;
  padding: 20px 0px;
  width: 85%;
`;

export const ImageContainer = styled.div`
width: 100px;
margin-right: 40px;
`