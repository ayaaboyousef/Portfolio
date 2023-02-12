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
          <p style={{ textAlign:"left" }}>
            If your weakness lies in your intellect then you have to make doubly sure that you gain all the information and skills you need to prepare for your mission.I have Medical Representative with almost three years of experience. Successful at finding
            new clients and making effective calls and presentation as well as maintaining numerous relationships.
            Adept at explaining products and selling solutions.I want to add value to the firm, I will work in and help it to achieve its organizational goals, work very well with others, I always told I'm a highly energetic person with great communication skills.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
