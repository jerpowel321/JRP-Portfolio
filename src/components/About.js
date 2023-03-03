import React, { Component } from 'react'
import 'typeface-roboto';
import styled from "styled-components";

import { Header, PinkSubHeader, Text } from "../styles/global-styles";
import {ACCOMPLISHMENTS, EDUCATION } from "../utils/constants.js"
class About extends Component {
  render() {
    return (
      <>
        <Container>
          <Column>
            <img src="/images/about.png" alt="Me" width="100%" />
          </Column>
          <Column>
            <Header>About Me</Header>
            <PinkSubHeader>I'm a Frontend Engineer</PinkSubHeader>
            <Text>
              Highly motivated Software Engineer seeking roles with tremendous
              <b>
                learning and growth opportunities while making a positive social
                impact
              </b>
              . 2 Years of experience working with React. 5 Years, Experience in
              Solution Implementation, Project Management, User/ Client
              relations,Resource Alignment, Consulting and Compliance.
            </Text>
          </Column>
        </Container>
        <Container>
          <Column>
            <p>My Accomplishment</p>
            <img src="/images/about.png" alt="Me" width="100%" />
          </Column>
          <Column>
            <Header>About Me</Header>
            <PinkSubHeader>I'm a Frontend Engineer</PinkSubHeader>
            <Text>
              Highly motivated Software Engineer seeking roles with tremendous
              <b>
                learning and growth opportunities while making a positive social
                impact
              </b>
              . 2 Years of experience working with React. 5 Years, Experience in
              Solution Implementation, Project Management, User/ Client
              relations,Resource Alignment, Consulting and Compliance.
            </Text>
          </Column>
        </Container>
        {/* <div
          className="l"
          style={{ color: white, paddingTop: "50px", paddingBottom: "20px" }}
        >
          <Typography
            id="underlineText"
            variant="h4"
            align="center"
            className="ib"
          >
            About
          </Typography>
          <Typography align="left" variant="body1" style={{ padding: "10px" }}>
            Jennifer Powell is a Frontend Engineer passionate about
            collaboration and delivering exceptional client experiences. After
            graduating Cum Laude at UC Santa Cruz (Bachelor of Business
            Management Economics), Jennifer obtained her CPA license and
            practiced as a Senior Tax Consultant at multiple firms including
            Deloitte. Seeking a change in career to follow her interests, she
            completed a 12 week Full Stack Web Development bootcamp course at UC
            Berkeley. She has experience working with technologies including
            React, Node as well as MongoDB and MySQL. Jennifer is a continuous
            learner who’s looking for opportunities to further develop her
            professional skills at a company making a positive social impact.
          </Typography>
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
        </div> */}
      </>
    );
	}
}

export default About

const Container = styled.div`
display: flex;
align-items: center;

`

const Column = styled.div`
width: 50%;`



