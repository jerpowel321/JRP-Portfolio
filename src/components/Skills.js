import React, { Component } from "react";
import "typeface-roboto";
import styled from "styled-components";

import {
  Header,
} from "../styles/global-styles";

class Skills extends Component {
  render() {
    return (
    <Container>
        <Header>My Skills</Header>
          <img src="/images/word-cloud.png" alt="Me" width="100%" />
        </Container>
    );
  }
}

export default Skills;

const Container = styled.div`
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 100px;
  margin-right: 40px;
`;