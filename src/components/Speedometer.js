
import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

export default class Speedometer extends React.Component {
	render() {
		return (
			<div align="center" >
				<h3 align="center" style={{ paddingBottom: "50px" }}>	
				<i className="far fa-1x fa-clock" style={{ paddingRight: "5px" }}></i>What I enjoy doing in my spare time.</h3>
				<ReactSpeedometer
					width={380}
					needleHeightRatio={0.7}
					value={240}
					customSegmentStops={[0, 100, 180, 280, 390, 550, 730, 800, 900, 1000]}
					segmentColors={["#bcd9ea", "#8bbdd9", "#5ba4cf", "#298fca", "#0079bf", "#026aa7", "#055a8c", "#094c72", "#0c3953"]}
					currentValueText="Hobbies"
					customSegmentLabels={[
						{
							text: "Read",
							position: "OUTSIDE",
							color: "#212121",
						},
						{
							text: "Glamp",
							position: "OUTSIDE",
							color: "#212121",
						},
						{
							text: "Cook",
							position: "OUTSIDE",
							color: "#212121",
						},
						{
							text: "Karaoke",
							position: "OUTSIDE",
							color: "#212121",
						},
						{
							text: "Games",
							position: "OUTSIDE",
							color: "#212121",
						},
						{
							text: "Travel",
							position: "OUTSIDE",
							color: "#212121",
						},
						{
							text: "Ski",
							position: "OUTSIDE",
							color: "#212121",
						},
						{
							text: "Softball",
							position: "OUTSIDE",
							color: "#212121",
						},
						{
							text: "Swim",
							position: "OUTSIDE",
							color: "#212121",
						},
					]}
					ringWidth={47}
					needleTransitionDuration={3333}
					needleTransition="easeElastic"
					needleColor={"#b19cd9"}
					textColor={"#212121"}
				/>
			</div>
		);
	}
};


