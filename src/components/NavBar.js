import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';
const white = grey[50];

const styles = theme => ({
	root: {
		backgroundColor: "black" 
	},
	p: {
		paddingRight: "30px", 
		fontFamily: "Lato, sans-serif", 
		color: "#FFFFFF" 
	},
	grid: {
		paddingTop: "30px", 
		paddingRight: "20px", 
		color: white 
	},
	a: {
		color: white 
	},
	i: {
		color: white, 
		paddingRight: "12px" 
	},
	a2: {
		color: white, 
		paddingBottom: "15px"
	},
	container: {
		alignContent: "center", 
		height:"78px"
	}
  
  });

  class NavBar extends React.Component {
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
		const { classes } = this.props;
		return (
			<AppBar id="nav" classes={classes.root} position="sticky" >
				<Toolbar>
					<Grid container >
						<Grid item xs={6}>
							<Grid id="navigation" container justify="flex-start" style={{ fontWeight: "bold" }}>
								<div id="name" >
									<p classes={classes.p}>
										Jennifer Powell
              					</p>
								</div>
								<Grid item classes={classes.grid}>
									<a classes={classes.a} href="/about" rel="noopener noreferrer">About</a>
								</Grid>
								<Grid item classes={classes.grid}>
									<a classes={classes.a} href="/about/#values" rel="noopener noreferrer">Values</a>
								</Grid>
								<Grid item classes={classes.grid}>
									<a classes={classes.a} href="/about/#skills" rel="noopener noreferrer">Skills</a>
								</Grid>
								<Grid item classes={classes.grid}>
									<a classes={classes.a} href="/" rel="noopener noreferrer">Projects</a>
								</Grid>
							</Grid>
						</Grid>

						<Grid item xs={6}>
							<Grid container justify="flex-end" classes={classes.container} >
								<a id="menu" ><i className="fas fa-2x fa-bars" classes={classes.a} onClick={this.menuClick}>
								</i>
								</a>
								<Grid item style={{  color: white,}}>
									<a href="https://github.com/jerpowel321" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-2x fa-github hvr-grow" classes={classes.i}></i>
									</a>
									<a href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-2x fa-linkedin hvr-grow" classes={classes.i}></i>
									</a>
									<a href="https://www.dropbox.com/s/dvx6ymfli11cprt/JP_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
										<i className="fas fa-file-pdf fa-2x ml hvr-grow nml" classes={classes.i}></i>
									</a>
								</Grid>
							</Grid>
							<Grid container justify="center" >
								<Grid item style={{  }}>
									{this.state.menuOpen ? (
										<div id="littleMenu">
											<a classes={classes.a2} href="/about" rel="noopener noreferrer">About</a>
											<a classes={classes.a2} href="/about/#values" rel="noopener noreferrer">Values</a>
											<a classes={classes.a2} href="/about/#skills" rel="noopener noreferrer">Skills</a>
											<a classes={classes.a2} href="/" rel="noopener noreferrer">Projects</a>
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



export default  NavBar