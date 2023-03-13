import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import grey from '@material-ui/core/colors/grey';
import styled from "styled-components";
import { breakpoints} from "../styles/global-styles";

const white = grey[50];
export default class NavBar extends React.Component {
  render() {
    const Links = [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/#values",
        text: "Values",
      },
      {
        link: "/#experience",
        text: "Experience",
      },
      {
        link: "/#skills",
        text: "Skills",
      },
      {
        link: "/#projects",
        text: "Projects",
      },
    ];
		return (
      <AppBar id="nav" style={{ backgroundColor: "transparent" }} position="sticky">
        <Toolbar>
          <Grid container>
            <Grid item xs={8} style={{ alignSelf: "center" }}>
              <Grid
                id="navigation"
                container
                justify="space-between"
                alignItems="center"
                style={{ fontWeight: "bold" }}
              >
                <div >
                  <img
                  id="logo"
                    src="/images/turtle-logo.png"
                    alt="Turtle"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid
                container
                justify="flex-end"
                style={{ alignContent: "center", height: "78px" }}
              >
                <Grid item style={{ color: white }}>
                  <a
                    href="https://github.com/jerpowel321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hideOnMobile"
                  >
                    <i
                      className="fab fa-2x fa-github hvr-grow"
                      style={{ color: white, paddingRight: "12px" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jenniferrpowell/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hideOnMobile"
                  >
                    <i
                      className="fab fa-2x fa-linkedin hvr-grow"
                      style={{ color: white, paddingRight: "12px" }}
                    ></i>
                  </a>
                  <a
                    href="/images/JenniferPowell_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hideOnMobile"
                  >
                    <i
                      className="fas fa-file-pdf fa-2x ml hvr-grow nml"
                      style={{ color: white, paddingRight: "12px" }}
                    ></i>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
	}
};


export const LinkContainer = styled.div`
  display: flex;
  justifycontent: "center";
  @media (max-width: ${breakpoints.l}px) {
 display:
  }
`;