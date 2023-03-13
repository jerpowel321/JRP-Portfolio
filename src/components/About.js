import React, { Component } from 'react'
import 'typeface-roboto';
import styled from "styled-components";

import {
  Header,
  PinkSubHeader,
  Text,
  SecondaryHeader,
  SubHeader,
  SmallText,
  breakpoints
} from "../styles/global-styles";
import {ACCOMPLISHMENTS, EDUCATION, VALUES } from "../utils/constants.js"
class About extends Component {
  render() {
    return (
      <>
        <ValuesContainer>
          <ValuesHeader>Values</ValuesHeader>
          <Container>
            {VALUES.map((value) => (
              <Card>
                <i
                  align="center"
                  style={{
                    color: "#F22276",
                  }}
                  className={`fas fa-4x ${value.icon}`}
                ></i>
                <SecondaryHeader>{value.label}</SecondaryHeader>
                <SmallText>{value.description}</SmallText>
              </Card>
            ))}
          </Container>
        </ValuesContainer>

        <EducationContainer>
          <Column>
            <SecondaryHeader>Accomplishments</SecondaryHeader>
            {ACCOMPLISHMENTS.map((accomplishment) => (
              <Flexbox>
                <ImageContainer>
                  <img
                    src={`/images/${accomplishment.icon}.png`}
                    alt={accomplishment.name}
                    width="100%"
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
          </Column>
        </EducationContainer>
      </>
    );
	}
}

export default About

const Container = styled.div`
  display: flex;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  padding: 40px 0px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${breakpoints.s}px) {
    padding: 20px 0px;
  }
`;

export const EducationContainer = styled(Container)`
  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Column = styled.div`
  width: 50%;
  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space=between;
  padding: 20px 0px;
  width: 85%;
`;

const ImageContainer = styled.div`
  min-width: 100px;
  /* margin-right: 40px; */
  @media (max-width: ${breakpoints.l}px) {
    /* width: 50px; */
  }
`;
const ValuesContainer = styled.div`
text-align: center;
`

const Card = styled.div`
  width: 30%;
  min-width: 380px;
  margin: 20px 60px;
  @media (max-width: ${breakpoints.s}px) {
    min-width: 100%;
  }
`;

const ValuesHeader = styled(Header)`
text-align: center;
margin: 50px 0px 20px;

`