import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';


const Project = (props) => {

	return (
		<div >
			{props.project ? (
				<Card id={props.project.fields.name} style={{ height: "550px" }} >
					<CardMedia>
						{props.project.fields.images !== undefined ? (
							<div style={{ height: "180px", overflow: "hidden" }}>
								{props.project.fields.images.map(image => (
									<img key={image.fields.file.title} style={{ width: "100%" }} src={image.fields.file.url} alt={image.fields.file.title} />
								))
								}
							</div>
						) : null
						}
					</CardMedia>
					<CardContent style={{ paddingBottom: "0px" }}>
						<div style={{ height: "35px", overflow: "hidden" }}>
							<Typography gutterBottom variant="h6" component="h6">
								{props.project.fields.name}
							</Typography>
						</div>
						<div style={{ height: "120px", overflow: "hidden" }}>
							<Typography component="p">
								{props.project.fields.description}
							</Typography>
						</div>
						{props.project.fields.skills !== undefined ? (
							<Typography style={{ height: "125px", overflow: "hidden" }} variant="body2">
								<b style={{ display: "block", paddingTop: "5px" }} >Technical Skills: </b>
								<span style={{ display: "flex", flexWrap: "wrap", margin: "0px" }}>
									{props.project.fields.skills.map(skill => (
										<li key={skill} style={{ paddingRight: "15px" }} >{skill}</li>
									))
									}
								</span>
							</Typography>
						) : null
						}
					</CardContent>
					<CardActions style={{ display: "flex", padding: "15px" }} >
						<Grid container justify="center" alignItems="center">
							<Grid item>

								<a href={props.project.fields.githubLink} target="_blank" rel="noopener noreferrer"><i style={{ marginRight: "7px" }} className="fab fa-2x fa-github hvr-grow"></i></a>
								{props.project.fields.deployedSite ? (
									<a href={props.project.fields.deployedSite} target="_blank" rel="noopener noreferrer"><i style={{ marginRight: "7px" }} className="fas fa-2x fa-rocket hvr-grow"></i></a>) : null
								}
								{/* <a ><i style={{ marginRight: "7px" }} className="fas fa-2x fa-plus-circle hvr-grow"></i></a> */}
							</Grid>
						</Grid>
					</CardActions>

				</Card>
			) : null}
		</div>
	)
}

export default Project