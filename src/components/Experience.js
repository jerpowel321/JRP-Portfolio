import React, { Component } from "react";
import "typeface-roboto";

import { Header, CenterContainer } from "../styles/global-styles";

class Experience extends Component {
  render() {
    return (
      <CenterContainer>
        <Header>My Experience</Header>
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
      </CenterContainer>
    );
  }
}

export default Experience;

