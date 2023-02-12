import React from "react";
import { SvgIcon, Typography } from "@material-ui/core";
import "./Skill.css";
import { Element } from "react-scroll";

import skillList from "../../utils/skill-list";

export default function Skill({ skill }) {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          fontFamily: '"Bungee", cursive'
        }}
      >
        <Element name="skill">Skills</Element>
      </Typography>
      <div className="skill-container">
        {/* <div>asssssssssssssd</div>
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
        <div>assssssssssssssssd</div>
        <div>asd</div> */}
        {
          skillList && skillList.map((skill, i) => {
            return <div key={i} className="imagewrap" >
              <img className="imgWrap" src={skill.value} alt="skill"/>
            </div>
          })
        }

        {/* {skillList.map((skill, i) => (
          <div className="skill-img" key={i}>
            <img src={skill.value}
              viewBox="0 0 24 24"
              color="primary" />
          </div>
        ))} */}
      </div>
    </React.Fragment>
  );
}
