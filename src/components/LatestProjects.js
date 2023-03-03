import React, { Component } from "react";
import "typeface-roboto";
import styled from "styled-components";

import { Header } from "../styles/global-styles";

class Projects extends Component {
  render() {
    return (
      <Container>
        <Header>Latest Projects</Header>
        {/* <img src="/images/word-cloud.png" alt="Me" width="700px" /> */}
      </Container>
    );
  }
}

export default Projects;

const Container = styled.div`
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 100px;
  margin-right: 40px;
`;
