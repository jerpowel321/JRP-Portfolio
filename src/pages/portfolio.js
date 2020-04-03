import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ProjectList from '../components/ProjectList'
import Container from '@material-ui/core/Container'
import Footer from "../components/Footer"


class Portfolio extends Component {


	render() {
		return (
			<div className="blackbg">
				<NavBar />
				<div className="bg"></div>
				<Container maxWidth="lg" >
					<div className="projectArea">
						<ProjectList />
					</div>
				</Container>
				<Footer />
			</div >
		);
	}

};

export default (Portfolio);
