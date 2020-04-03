import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Container from '@material-ui/core/Container';
import Footer from "../components/Footer";
import About from "../components/About";
import Values from "../components/Values";
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Barchart from "../components/Barchart";
import Speedometer from "../components/Speedometer"
import Accomplishments from "../components/Accomplishments"
const black = grey[900];
const white = grey[50];

class AboutPage extends Component {


	render() {
		return (
			<div id="aboutPage">
				<NavBar />
				<div id="about" align="center" style={{ backgroundColor: black, paddingTop: "60px", margin: "0px" }}>
					<div className="circular--landscape">
						<img src="/images/me.jpeg" alt="Me"/>
					</div>
					<About />
				</div>
				<Values />
				<div id="firstgradient">
				</div>
				<div className="achomplishmentSection" style={{ backgroundColor: black }}>
					<Accomplishments/>
				</div>
				<div id="secondgradient"></div>
				<div id="chartArea" style={{ backgroundColor: white }}>
					<Container style={{ display: "flex", justifyContent: "center", backgroundColor: white }}>
						<Grid container justify="center" style={{ display: "flex" }}>
							<Grid item xs={12} sm={12} md={6}>
								<Barchart />
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								<Speedometer />
							</Grid>

						</Grid>
					</Container>
				</div>

				<Footer />
			</div >
		);
	}

};

export default (AboutPage);
