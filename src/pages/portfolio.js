import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ProjectList from '../components/ProjectList'
// import Container from '@material-ui/core/Container'
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import About from "../components/About";

import styled from "styled-components";

class Portfolio extends Component {


	render() {
		return (
      <div className="bg">
        <NavBar />
        <Container>
          <Hero />
          <About />

          <div className="projectArea">
            <ProjectList />
          </div>
        </Container>
        <Footer />
      </div>
    );
	}

};

export default (Portfolio);

const Container = styled.div`
width: 90%;
margin: auto;
`