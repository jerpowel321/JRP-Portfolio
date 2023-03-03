import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import grey from '@material-ui/core/colors/grey';

const white = grey[50];

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false
		};
	}
	menuClick = () => {
		if (this.state.menuOpen === true) {
			this.setState({
				menuOpen: false
			})
		}
		else
			this.setState({
				menuOpen: true
			})

  }


  render() {
    const Links = [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/#about",
        text: "About",
      },
      {
        link: "/#skills",
        text: "Skills",
      },
      {
        link: "/#experience",
        text: "Experience",
      },
      {
        link: "/#projects",
        text: "Products",
      },
      {
        link: "/#contact",
        text: "Contact",
      },
    ];
		return (
      <AppBar id="nav" style={{ backgroundColor: "transparent" }} position="sticky">
        <Toolbar>
          <Grid container>
            <Grid item xs={7} style={{ alignSelf: "center" }}>
              <Grid
                id="navigation"
                container
                justify="space-between"
                alignItems="center"
                style={{ fontWeight: "bold" }}
              >
                <div id="name" style={{ marginRight: "20px" }}>
                  <img
                    src="/images/turtle-logo.png"
                    alt="Turtle"
                    width="60px"
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  {Links.map((link)=> 
                <Grid item style={{ paddingRight: "20px", color: white }}>
                    <a
                      style={{ color: white }}
                      href={link.link}
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </Grid>
                  )}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={5}>
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
                <a id="menu">
                  <i
                    className="fas fa-2x fa-bars"
                    style={{ color: white, cursor: "pointer" }}
                    onClick={this.menuClick}
                  ></i>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
	}
};


