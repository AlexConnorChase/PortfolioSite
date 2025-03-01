import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LIlogo from "./images/icons8-linkedin.svg";
import GHlogo from "./images/icons8-github-48.svg";
import FDIOsnap from "./images/FigureDrawingIO.JPG";
import UFR from "./images/UFRepo.JPG";
import FCCR from "./images/FCCR.JPG";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}

function AppHeader() {
  return (
    <header className="App-header">
      <nav>
        <a href="#Welcome">Welcome</a>
        <a href="#Projects">Projects</a>
        <a href="#Socials">Socials</a>
      </nav>
    </header>
  );
}

function AppBody() {
  return (
    <body className="App-body">
      <WelcomeSection />
      <ProjectsSection />
      <SocialsSection />
    </body>
  );
}

function WelcomeSection() {
  return (
    <section id="Welcome">
      <div id="about-me">
        <h1>About Me</h1>
        <p>
          Hello, my name is Alex Chase. I am a new grad software developer, and
          this is my portfolio website!
        </p>
        <p>Feel free to look around, I'm still getting things in order here.</p>
        <h2>About My Journey Here:</h2>
        <p>
          My journey with technology began when I enrolled in my high school's
          Project: Lead the Way program, learning the basics of engineering
          work, proper documentation and notarization, demension-taking, CAD
          modeling, etc. This led me to eventually complete a particular course
          "AP Computer Science", where I would be introduced to software
          development and begin developing an interest in coding. By the end of
          high school I had found myself enrolled in college at Santa Fe
          Community College in Gainesville as part of the Gator Engineering at
          Santa Fe program, where I would transfer to the University of Florida.
        </p>
        <p>
          I graduated from the University of Florida in May of 2024 after 5
          years of hard work earning myself a Bachelor's of Science in Computer
          Engineering. My curriculum taught me a lot about how hardware and
          software come together to enable computers to do what they do today.
          I've done high-level work like enabling IoT services in wi-fi enabled
          devices and designing UI's in Unity, and I've performed low-level work
          such as designing and programming microprocessors with VHDL and
          Assembly. As part of my breadth work I have also exposed myself to the
          development and fundamentals in machine learning, along with some of
          the data science work that goes along with that.
        </p>
        <p>
          Leading up to this point I have developed skills utilizing languagess
          such as C++, C#, Python, R, Java, VHDL, and ARM Assembly. I have made
          use of tools like MATLAB, Jupyter Notebooks, Microchiip Studio, LT
          Spice, and VSCode to work on a variety of projects. As for my current
          efforts I'm teaching myself more about front-end development, and as
          I'm writing this passage I'm currently teaching myself how to use
          React for webpages. I've been so incredibly lucky to get to go on this
          journey and I hope that whomever has found this little page of mine
          will continue to watch me and my journey as I continue to learn and
          grow.
        </p>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="Projects">
      <h1 id="projects-header">PROJECTS</h1>
      <div id="projects-section">
        <div id="project-display-back">
          <ProjectBlock
            link="https://alexconnorchase.github.io/FigureDrawingIO/"
            img={FDIOsnap}
            altTxt="Snapshot of Figure Drwing IO website, a project by Alex Chase"
            cardTitle="FigureDrawingIO"
          />
          <ProjectBlock
            link="https://github.com/AlexConnorChase/FreeCodeCampProjects"
            img={FCCR}
            altTxt="Snapshot of Free Code Camp Projects Repo, by Alex Chase"
            cardTitle="FreeCodeCamp Projects"
          />
          <ProjectBlock
            link="https://github.com/AlexConnorChase/UF_Projects_Repository"
            img={UFR}
            altTxt="Snapshot of School Projects Repo, by Alex Chase"
            cardTitle="Old School Assignments"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectBlock(props) {
  return (
    <div className="project-block">
      <a target="_blank" rel="norefferer" href={props.link}>
        <img src={props.img} alt={props.altTxt} />
        <p>{props.cardTitle}</p>
      </a>
    </div>
  );
}

function SocialsSection() {
  return (
    <section id="Socials">
      <div id="socials-section">
        <h1>SOCIALS</h1>
        <div className="BadgeSpan">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/alex-chase-5b915519b/"
          >
            <img
              src={LIlogo}
              alt="Linked In logo used as link to Alex Chase's profile"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AlexConnorChase"
          >
            <img
              src={GHlogo}
              alt="Git Hub logo used as link to Alex Chase's profile"
            />
          </a>
        </div>
        <div id="credit-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/8808/linkedin"
          >
            LinkedIn
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
          <p> </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/106567/github"
          >
            GitHub
          </a>{" "}
          icon by
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
