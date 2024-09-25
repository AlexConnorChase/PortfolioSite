import "./App.css";
import { useState } from "react";

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

export default App;
