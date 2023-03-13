import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

const Project = (props) => {
  const { name, images, description, skills, githubLink } =
    props.project.fields
	return (
    <div>
      {props && (
        <Card
          className="cardWrap"
          id={name}
          style={{ margin: "auto" , marginBottom: "40px"}}
        >
          <CardMedia>
              <div className="projectImageContainer">
                {images.map((image) => (
                  <img
                    key={image.fields.file.title}
                    style={{ width: "100%" }}
                    src={image.fields.file.url}
                    alt={image.fields.file.title}
                  />
                ))}
              </div>
          </CardMedia>
          <CardContent style={{ paddingBottom: "0px" }}>
            <div style={{ height: "35px", overflow: "hidden" }}>
              <Typography gutterBottom variant="h6" component="h6">
                {name}
              </Typography>
            </div>
            <div style={{ height: "140px", overflow: "hidden" }}>
              <Typography component="p">
                {description}
              </Typography>
            </div>
              <div className="technicalSkills">
                <Typography variant="body2">
                  <b
                    style={{
                      display: "block",
                      padding: "5px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Technical Skills:{" "}
                  </b>
                  <span
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      margin: "0px",
                      fontSize: "14px",
                    }}
                  >
                    {skills.map((skill) => (
                      <li key={skill} style={{ paddingRight: "15px" }}>
                        {skill}
                      </li>
                    ))}
                  </span>
                </Typography>
              </div>
          </CardContent>
          <CardActions style={{ display: "flex", padding: "15px" }}>
            <Grid container justify="center" alignItems="center">
              <Grid item>
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ marginRight: "7px" }}
                      className="fab fa-2x fa-github hvr-grow"
                    ></i>
                  </a>
                )}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      )}
    </div>
  );
}

export default Project