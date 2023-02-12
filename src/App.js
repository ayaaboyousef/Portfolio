import React, { Component } from "react";
import ScrollableTabsButtonForce from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import Experience from "./components/Experience/Experience";
import Skill from "./components/Skill/Skill";
import ContactForm from "./components/Contact/Contact";
import Resume from './components/resume/Resume.jsx'
import "./App.css";
import Section from "./components/Section/Section.component";

class App extends Component { //
  render() {
    
    return (
      <React.Fragment>
        <ScrollableTabsButtonForce />
        <Section>
          <AboutMe />
        </Section>
    
        <Section bg>
          <Experience />
        </Section>
        <Section >
          <Skill />
        </Section>
        <Section>
          <ContactForm />
        </Section>
        <Section>
          <Resume />
        </Section>
      </React.Fragment>
    );
  }
}

export default App;
