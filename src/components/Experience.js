import React, { Component } from "react";
import "typeface-roboto";
import styled from "styled-components";

import { Header } from "../styles/global-styles";

class Experience extends Component {
  render() {
    return (
      <Container>
        <Header>My Experience</Header>
      </Container>
    );
  }
}

export default Experience;

const Container = styled.div`
  text-align: center;
`;
