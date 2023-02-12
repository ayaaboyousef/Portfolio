import React, { Component } from "react";
import ScrollableTabsButtonForce from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import Skill from "./components/Skill/Skill";
import ContactForm from "./components/Contact/Contact";
import Resume from './components/resume/Resume.jsx'
import "./App.css";
import Section from "./components/Section/Section.component";
import './App.css';

function App() {
  return (
    <div className="App">
     <ScrollableTabsButtonForce />
        <Section>
          <AboutMe />
        </Section>
        <Section bg>
          <ProjectCardList />
        </Section>
      
        <Section bg>
          <Skill />
        </Section>
        <Section>
          <ContactForm />
        </Section>
        <Section>
          <Resume />
        </Section>
    </div>
  );
}

export default App;
