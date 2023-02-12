import React from "react";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";
// import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src="https://media.discordapp.net/attachments/938405759996276806/1074092461632262184/123.jpg" alt="profile_photo" className="img" />
        <h1 style={{ fontWeight: "lighter" }}>Aya Abu-Yosef</h1>
        <div className="subtitle">
          <h3>A pharmacist.</h3>
          <p>
            contribute, achieving goals, objectives design of
            appropriate intervention, monitoring and evaluation of practices
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
