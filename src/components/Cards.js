import React from 'react';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';

const Cards = (props) => {
	return (
		<Card style={{ boxShadow: "none", backgroundColor: props.bgcolor, color: props.txtcolor }}>
			<CardContent>
				<i align="center" style={{ color: props.txtcolor, paddingRight: "5px", paddingBottom: "20px", display: "block" }} className={props.icon}></i>
				<Typography variant="h6" align="center">
					{props.label}
				</Typography>
				<Typography variant="body1" component="p">
					{props.description}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default Cards