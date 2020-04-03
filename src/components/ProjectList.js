import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
// import * as contentful from 'contentful'
import Project from '../components/Project'
import { createClient } from "contentful";
import SearchIcon from '@material-ui/icons/Search';



const SPACE_ID = 'vhqqfqor19w8';
const ACCESS_TOKEN = 'M_1QrEX-9hG9P5CL65RKxRmqQRIgyaU2KXtmFHEDFIc';

// Initiate the connection to the backend
const client = createClient({
	space: SPACE_ID,
	accessToken: ACCESS_TOKEN
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		};
	}
	componentDidMount() {
		client.getEntries().then(({ items }) => {
			this.setState({ projects: items });
			// console.log(this.state.projects)
		});
	}
	getProjects() {
		client.getEntries({
			content_type: 'project',
			query: this.state.searchString
		})
			.then(response => {
				this.setState({
					projects: response.items
				})
				// console.log(response)
			})
			.catch((error) => {
				console.log("Error occrued while fetching data")
				console.log(error)
			})
	}
	onSearchInputChange = (event) => {
		if (event.target.value) {
			this.setState({
				searchString: event.target.value
			})
		} else {
			this.setState({
				searchString: ''
			})
		}
		this.getProjects()
	}
	onClick(key) {
		console.log(key);
	}
	render() {
		return (
			<div style={{ paddingBottom: "50px" }}>

				{this.state.projects ? (
					<div>
						<div>
							<SearchIcon style={{ paddingTop: 40, }} />
							<TextField style={{ padding: 24, }}
								id="searchInput"
								placeholder="Search for skills"
								margin="normal"
								onChange={this.onSearchInputChange} />
						</div>
						<Grid container spacing={10} style={{ padding: 24 }}>
							{this.state.projects.map(project => (
								<Grid key={project.fields.name} item xs={12} sm={6} lg={4} xl={3}>
									<Project project={project} onClick={this.onClick.bind(this)} />
								</Grid>
							))}
						</Grid>
					</div>
				) : "No project found"
				}
			</div>
		)
	}
}

export default App
