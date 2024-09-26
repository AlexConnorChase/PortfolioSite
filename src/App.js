import "./App.css";
import { useState } from "react";
import LIlogo from "./icons8-linkedin.svg";
import GHlogo from "./icons8-github-48.svg";

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
    <section className="Welcome">
      <div>
        <h1>WELCOME!</h1>
        <p>
          Hello, my name is Alex Chase. I am a new grad software developer, and
          this is my portfolio website!
        </p>
        <p>Feel free to look around, I'm still getting things in order here.</p>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="Projects">
      <div>
        <h1>PROJECTS</h1>
      </div>
    </section>
  );
}

function SocialsSection() {
  return (
    <section className="Socials">
      <h1>SOCIALS</h1>
      <div className="BadgeSpan">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/alex-chase-5b915519b/"
        >
          <img src={LIlogo} />
        </a>
        <a target="_blank" href="https://github.com/AlexConnorChase">
          <img src={GHlogo} />
        </a>
      </div>
      <a target="_blank" href="https://icons8.com/icon/8808/linkedin">
        LinkedIn
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
      <p> </p>
      <a target="_blank" href="https://icons8.com/icon/106567/github">
        GitHub
      </a>{" "}
      icon by
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </section>
  );
}

export default App;
