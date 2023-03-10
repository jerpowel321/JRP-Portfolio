import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ProjectSlider from '../components/ProjectSlider'
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import { Header } from "../styles/global-styles";
import styled from "styled-components";
import Values from "../components/Values";

class Portfolio extends Component {


	render() {
		return (
      <div className="bg">
        <NavBar />
        <Container>
          <Hero />
          <About />
        </Container>
        <Skills />
        <Container>
          <Experience />
          <Container>
            <Header>Old Projects</Header>
          </Container>
          <ProjectSlider />
        </Container>
        <Values />
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
