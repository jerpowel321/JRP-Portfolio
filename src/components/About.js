import React, { Component } from 'react'
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import 'typeface-roboto';

const white = grey[50];

class About extends Component {
	render() {
		return (
			<Container maxWidth='md'>
				<div className="l" style={{ color: white, paddingTop: "50px", paddingBottom: "20px" }}>
					<Typography id="underlineText" variant="h4" align="center" className="ib">
						About
					</Typography>
					<Typography align="left" variant="body1" style={{ padding: "10px" }}>
						Jennifer Powell is a Frontend Engineer passionate about collaboration and delivering exceptional client experiences. After graduating Cum Laude at UC Santa Cruz (Bachelor of Business Management Economics), Jennifer obtained her CPA license and practiced as a Senior Tax Consultant at multiple firms including Deloitte. Seeking a change in career to follow her interests, she completed a 12 week Full Stack Web Development bootcamp course at UC Berkeley. She has experience working with technologies including React, Node as well as MongoDB and MySQL. Jennifer is a continuous learner who’s looking for opportunities to further develop her professional skills at a company making a positive social impact.
					</Typography>
					<a href="https://www.dropbox.com/s/jv0f7sp6eqj13v4/JP_Resume.pdf?dl=0" alt="My Resume" rel="noopener noreferrer" target="_blank">
						<div className="buttonContainer" >
							<button className="button" >
								Resume
                <div className="button__horizontal"></div>
								<div className="button__vertical"></div>
							</button>
						</div>
					</a>
				</div>
			</Container>
		)
	}
}

export default About