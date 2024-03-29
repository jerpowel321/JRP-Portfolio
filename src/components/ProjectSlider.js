import React, { Component } from 'react'
import Project from './Project'
import { createClient } from "contentful";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import {
  Header,
  CenterContainer,
} from "../styles/global-styles";
import styled from "styled-components";

// Initiate the connection to the backend
const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      // style={{
      //   position: "absolute",
      //   bottom: -40,
      //   left: "52%",
      //   pointer: "cursor",
      // }}
      onClick={onClick}
    >
      <img src="/images/right-arrow.png" alt="arrow_right" width="40px" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      // style={{position: 'absolute', bottom: -40, left: '45%', pointer: 'cursor'}}
      onClick={onClick}
    >
      <img src="/images/left-arrow.png" alt="arrow_left" width="40px" />
    </div>
  );
}
const settings = {
 
  }
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
      <div style={{ paddingBottom: "50px", display: "relative" }}>
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
        <CenterContainer>
          <Header>Projects</Header>
        </CenterContainer>
        <SliderContainer>
          {this.state.projects ? (
            <Slider
              dots
              infinite
              slidesToShow={3}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={2000}
              // nextArrow={<NextArrow />}
              // prevArrow={<PrevArrow />}
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 1500,
                  },
                },
              ]}
            >
              {this.state.projects.map((project) => (
                <div key={project.fields.name} item>
                  <Project
                    project={project}
                    onClick={this.onClick.bind(this)}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p>"No project found"</p>
          )}
        </SliderContainer>
      </div>
    );
	}
}

export default ProjectSlider

const SliderContainer = styled.div`
padding: 20px 0px;
`