import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Typography } from "@material-ui/core";
import { Element, Link } from "react-scroll";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

export default function Resume() {
    return (
        <Typography
            variant="h2"
            display="block"
            align="center"
            style={{
                margin: "1rem",
                fontSize: "35px",
                textTransform: "uppercase",
                fontFamily: '"Bungee", cursive'
            }}
        >
            <Element name="resume">Find Me</Element>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                marginTop: "35px"

            }}>
                <a href="https://drive.google.com/file/d/1Zwx3Gbu6WwkP4_bkQ_COlV80Qx1SwJtj/view?usp=sharing" target="_blank" rel="noreferrer" >
                    <AssignmentIndIcon style={{ height: "60px", width: "120px" }} color="primary" />
                </a>
                <a href="https://github.com/ameedasmah" target="_blank" rel="noreferrer" >
                    <GitHubIcon color="primary" style={{ paddingLeft: "6px", paddingRight: "6px", height: "60px", width: "120px" }} />
                </a>
                <a href="https://www.linkedin.com/in/ameed-asmah-1532431b7/" target="_blank" rel="noreferrer" >
                    <LinkedInIcon color="primary" style={{ height: "60px", width: "120px" }} />
                </a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: "20px",
                fontSize: "19px",
                // textTransform: "uppercase",
                fontFamily: "Work Sans"
            }}>
                <div>
                    <CallIcon color="primary" />
                    : (+970)-599-043-747
                    </div>
                <div>
                    <EmailIcon color="primary" />
                     ameed.asmah1@gmail.com
                    </div>
            </div>
        </Typography>
    )
}
