import React from 'react';
import Container from '@material-ui/core/Container'
import { HorizontalBar } from 'react-chartjs-2';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink'

const black = grey[900];

const data = {
	labels: ['HTML', 'CSS', 'JavaScript', 'React', 'MySql', 'MongoDB', 'Node'],
	datasets: [
		{
			label: 'Proficiency',
			backgroundColor: pink[400],
			hoverBackgroundColor: pink[100],
			hoverBorderColor: black,
			data: [8, 7, 7, 6, 5, 4, 8],
		}
	],
};

const options = {
	scales: {
		xAxes: [{
			gridLines: {
				display: false,
			},
			ticks: {
				min: 0,
				max: 10,
				// display: false
			}
		}],
		yAxes: [{
			gridLines: {
				display: false,
			}
		}]
	}
}

export default class Barchart extends React.Component {
	render() {
		return (
			<Container maxWidth="sm" align="center">
				<div>
					<h3><i className="fas fa-laptop" style={{ paddingRight: "5px" }}></i>Full Stack Web Development</h3>
					<HorizontalBar data={data} options={options} />
				</div>
			</Container>
		);
	}
};