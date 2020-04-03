import React, { Component } from 'react'
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Card from './Cards'
import Grid from '@material-ui/core/Grid'
import 'typeface-roboto';

const black = grey[900];
const white = grey[50];

class Values extends Component {

	render() {
		return (
			<div id="summarySkills " style={{ backgroundColor: white }}>
				<div style={{ padding: "40px" }}>
					<div className="d" align="center" >
						<i className=" fa-2x far fa-gem" style={{ paddingRight: "3px" }}></i>
						<h1 className="ib" align="center">
							<a id="values">Values</a> </h1>
					</div>
					<Container style={{ display: "flex", justifyContent: "center" }}>
						<Grid container justify="center" style={{ display: "flex" }}>
							<Grid item xs={12} sm={6} md={4} lg={3}>
								<Card
									icon="fas fa-4x fa-balance-scale"
									txtcolor={black}
									bgcolor={white}
									label="Integrity"
									description="Have a demonstrated track record of outstanding service; a calm, dependable professional who devotes every effort to achieving the best results." />
							</Grid>
							<Grid item xs={12} sm={6} md={4} lg={3}>
								<Card
									icon="fas fa-4x fa-seedling"
									txtcolor={black}
									bgcolor={white}
									label="Growth"
									description="Always looking to continuously learn and develop my core skills while challenging myself to learn new technologies and development techniques." />
							</Grid>
							<Grid item xs={12} sm={6} md={4} lg={3}>
								<Card
									icon="fas fa-4x fa-hands-helping"
									txtcolor={black}
									bgcolor={white}
									label="Teamwork"
									description="I believe we win as a team. I'm a team player who always wants to lend a helping hand and share knowledge." />
							</Grid>
						</Grid>
					</Container>
				</div>
				<div align="center" className="d" style={{ marginBottom: "40px" }} >
					<i className="fas fa-2x fa-tools" style={{ marginRight: "5px", color: black }}></i>
					<Typography variant="h4" className="ib" style={{ color: black }}>
						<a id="skills" >Core Skills	</a>
					</Typography>
				</div>
				<Container style={{ display: "flex", justifyContent: "center" }}>
					<Grid container justify="center" style={{ display: "flex" }}>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Card
								icon="fas fa-3x fa-users"
								txtcolor={black}
								bgcolor={white}
								label="Project Collaboration"
								description="Highly experienced in assessing true needs and expectations building lasting professional relationships. Grow and deepen strategic partnerships to achieve mutually beneficial outcome." />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Card
								icon="fas fa-3x fa-globe"
								txtcolor={black}
								bgcolor={white}
								label="Resource Coordination"
								description="Possess a proven ability to anticipate unique requirements or potential road-blocks in all situations. Continually develop back-up plans to minimize risk and deliver exceptional results; streamline communication and implementation channels to effectively meet client and organizational needs." />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Card
								icon="fas fa-3x fa-cogs"
								txtcolor={black}
								bgcolor={white}
								label="Process Streamlining"
								description="Effectively manage diverse tasks, with varying degrees of complexity, within a wide range of environments; evaluate situations, assess emergent needs, and implement solutions in a prompt and efficient/effective manner." />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Card
								icon="fas fa-3x fa-headset"
								txtcolor={black}
								bgcolor={white}
								label="Client First"
								description="Ability to communicate clearly and help resolve client inquires in a professional and timely manner." />
						</Grid>
					</Grid>
				</Container>
			</div>
		)
	}
}

export default Values