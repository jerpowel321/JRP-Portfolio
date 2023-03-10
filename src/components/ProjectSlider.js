import React, { Component } from 'react'
import Project from './Project'
import { createClient } from "contentful";
import Slider from "react-slick";
import { Helmet } from "react-helmet";


const SPACE_ID = 'vhqqfqor19w8';
const ACCESS_TOKEN = 'M_1QrEX-9hG9P5CL65RKxRmqQRIgyaU2KXtmFHEDFIc';

// Initiate the connection to the backend
const client = createClient({
	space: SPACE_ID,
	accessToken: ACCESS_TOKEN
});

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
class ProjectSlider extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		};
  }

	componentDidMount() {
    client.getEntries().then(({ items }) => {
      this.setState({ projects: items });
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
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        {this.state.projects ? (
          <Slider {...settings}>
            {this.state.projects.map((project) => (
              <div key={project.fields.name} item>
                <Project project={project} onClick={this.onClick.bind(this)} />
              </div>
            ))}
          </Slider>
        ) : (
          <p>"No project found"</p>
        )}
      </div>
    );
	}
}

export default ProjectSlider
