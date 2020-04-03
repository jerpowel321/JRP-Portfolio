import React, { Component } from 'react'
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import 'typeface-roboto';
import Card from './Cards'
import Grid from '@material-ui/core/Grid'
const black = grey[900];
const white = grey[50];

class Accomplishments extends Component {
	render() {
		return (
			<Container>
				<Grid container justify="center" style={{ display: "flex" }}>
					<Grid item xs={12} md={6} className="l" align="center">
						<i style={{ color: white, paddingRight: "10px" }} className="fas fa-2x fa-award"></i>
						<h1 className="ib" align="center" style={{ color: white }}> Accomplishments</h1>
						<Grid container align="left" >
							<Grid item xs={12} sm={6} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
								<Card
									txtcolor={white}
									bgcolor={black}
									label="College Graduate"
									icon="fas fa-2x fa-graduation-cap"
									description="Graduated from UC Santa Cruz a year early and received cum laude distinction."
								/>
							</Grid>
							<Grid item xs={12} sm={6} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
								<Card
									txtcolor={white}
									bgcolor={black}
									label="Coding Bootcamp"
									icon='fas fa-2x fa-code'
									description="Followed my passion for technology and interest in coding." />
							</Grid>
							<Grid item xs={12} sm={6} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
								<Card
									txtcolor={white}
									bgcolor={black}
									label="CPA Licensed"
									icon='fas fa-2x fa-calculator'
									description="Passed all four parts of the CPA Exam within two years of graduation." />
							</Grid>
							<Grid item xs={12} sm={6} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
								<Card
									txtcolor={white}
									bgcolor={black}
									label="Hackathon Winner"
									icon="fas fa-2x fa-trophy"
									description="Won third place out of twenty-two teams with our business idea FoodDrop." />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6} align="center" className='l'>
						<i className="fas fa-2x fa-university" style={{ color: white, paddingRight: "10px" }}></i>
						<h1 className="ib" style={{ color: white }}> Education</h1>
						<Grid container style={{ color: white }} align="left">
							<Grid item xs={12} style={{ padding: "20px" }}>
								<Typography variant="h6">
									UC BERKELEY EXTENSION
								</Typography>
								<Typography variant="subtitle1">
									2019 Certificate in Full-stack Web Development San Francisco, CA
								</Typography>
								<Typography variant="body1">
									Completed intensive full stack web development program focused on gaining technical programming skills in the latest coding platforms as a Full-Stack Web Developer.
								</Typography>
							</Grid>
							<Grid item xs={12} style={{ padding: "20px" }}>
								<Typography variant="h6">
									UC SANTA CRUZ
								</Typography>
								<Typography variant="subtitle1">
									2015 Bachelor of Arts in Business Management Economics Santa Cruz, CA
								</Typography>
								<Typography variant="body1">
									Accounting Emphasis, Cum Laude Distinction • University of London at Queen Mary, Study Abroad.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		)
	}
}

export default Accomplishments