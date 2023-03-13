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
} from "../styles/global-styles";
import {ACCOMPLISHMENTS, EDUCATION, VALUES } from "../utils/constants.js"
class About extends Component {
  render() {
    return (
      <>
        <ValuesContainer>
          <Header align="center">
            <a id="values" className='anchor'>My Values</a>
          </Header>
          <Container>
            {VALUES.map((value) => (
              <div>
                <i
                  align="center"
                  style={{
                    color: "#F22276",
                    paddingRight: "5px",
                    paddingBottom: "20px",
                    display: "block",
                  }}
                  className={`fas fa-4x ${value.icon}`}
                ></i>
                <SecondaryHeader>{value.label}</SecondaryHeader>
                <ValueText>{value.description}</ValueText>
              </div>
            ))}
          </Container>
        </ValuesContainer>

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

const Flexbox = styled.div`
  display: flex;
  justify-content: space=between;
  padding: 20px 0px;
  width: 85%;
`;

const ImageContainer = styled.div`
width: 100px;
margin-right: 40px;
`
const ValuesContainer = styled.div`
text-align: center;
`
const ValueText = styled(SmallText)`
padding: 20px;`