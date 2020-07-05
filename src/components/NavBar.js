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
		return (
			<AppBar id="nav" style={{ backgroundColor: "black" }} position="sticky" >
				<Toolbar>
					<Grid container >
						<Grid item xs={6}>
							<Grid id="navigation" container justify="flex-start" style={{ fontWeight: "bold" }}>
								<div id="name" >
									<p style={{ paddingRight: "30px", fontFamily: "Lato, sans-serif", color: "#FFFFFF" }}>
										Jennifer Powell
              					</p>
								</div>
								<Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
									<a style={{ color: white }} href="/about" rel="noopener noreferrer">About</a>
								</Grid>
								<Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
									<a style={{ color: white }} href="/about/#values" rel="noopener noreferrer">Values</a>
								</Grid>
								<Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
									<a style={{ color: white }} href="/about/#skills" rel="noopener noreferrer">Skills</a>
								</Grid>
								<Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
									<a style={{ color: white }} href="/" rel="noopener noreferrer">Projects</a>
								</Grid>
							</Grid>
						</Grid>

						<Grid item xs={6}>
							<Grid container justify="flex-end" style={{alignContent: "center", height:"78px"}} >
								<a id="menu" ><i className="fas fa-2x fa-bars" style={{ color: white }} onClick={this.menuClick}>
								</i>
								</a>
								<Grid item style={{  color: white,}}>
									<a href="https://github.com/jerpowel321" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-2x fa-github hvr-grow" style={{ color: white, paddingRight: "12px" }}></i>
									</a>
									<a href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-2x fa-linkedin hvr-grow" style={{ color: white, paddingRight: "12px" }}></i>
									</a>
									<a href="jennifer-powell.io/images/JenniferPowell_Resume.pdf" target="_blank" rel="noopener noreferrer">
										<i className="fas fa-file-pdf fa-2x ml hvr-grow nml" style={{ color: white, paddingRight: "12px" }}></i>
									</a>
								</Grid>
							</Grid>
							<Grid container justify="center" >
								<Grid item style={{  }}>
									{this.state.menuOpen ? (
										<div id="littleMenu">
											<a style={{ color: white, paddingBottom: "15px" }} href="/about" rel="noopener noreferrer">About</a>
											<a style={{ color: white, paddingBottom: "15px" }} href="/about/#values" rel="noopener noreferrer">Values</a>
											<a style={{ color: white, paddingBottom: "15px" }} href="/about/#skills" rel="noopener noreferrer">Skills</a>
											<a style={{ color: white, paddingBottom: "15px"  }} href="/" rel="noopener noreferrer">Projects</a>
										</div>
									) : null
									}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>

			</AppBar>
		);
	}
};


