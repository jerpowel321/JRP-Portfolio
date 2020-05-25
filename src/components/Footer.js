import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram, faAngellist, faYelp, faMediumM, faLinkedinIn, faAdobe } from '@fortawesome/free-brands-svg-icons'

const black = grey[900];
const white = grey[50];

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: black,
		height: "100px",
		bottom: "0",
		width: "100%"
	},
	i: {
		color: white,
		paddingRight: "10px",
		paddingTop: "30px",
	}
})
);


const Footer = () => {
	const classes = useStyles();
	return (
		<BottomNavigation className={classes.root}>
			<a href="https://github.com/jerpowel321" target="_blank" rel="noopener noreferrer" className="hvr-grow">
				<FontAwesomeIcon className={classes.i} icon={faGithub} size='2x' />
			</a>
			<a href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank" rel="noopener noreferrer" className="hvr-grow">
				<FontAwesomeIcon className={classes.i} icon={faLinkedinIn} size='2x' />
			</a>
			<a href="https://www.dropbox.com/s/dvx6ymfli11cprt/JP_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="hvr-grow">
				<FontAwesomeIcon className={classes.i} icon={faAdobe} size='2x' />
			</a>
			<a href="https://twitter.com/Jennpowpow" target="_blank" rel="noopener noreferrer" className="hvr-grow">
				<FontAwesomeIcon className={classes.i} icon={faTwitter} size='2x' />
			</a>
			<a href="https://www.instagram.com/jennpowell321/" target="_blank" rel="noopener noreferrer" className="hvr-grow">
				<FontAwesomeIcon className={classes.i} icon={faInstagram} size='2x' />
			</a>
			<a href="https://angel.co/jennifer-powell-10" target="_blank" rel="noopener noreferrer" className="hvr-grow">
				<FontAwesomeIcon className={classes.i} icon={faAngellist} size='2x' />
			</a>
			<a href="https://jennpowell.yelp.com" target="_blank" rel="noopener noreferrer" className="hvr-grow">
				<FontAwesomeIcon className={classes.i} icon={faYelp} size='2x' />
			</a>
			<a href="https://medium.com/@jerpowel321" target="_blank" rel="noopener noreferrer" className="hvr-grow">
				<FontAwesomeIcon className={classes.i} icon={faMediumM} size='2x' />
			</a>
		</BottomNavigation>
	)
}

export default Footer;