import "./App.css";
import { useState } from "react";

function App() {
  const [bodyState, setBS] = useState(0);
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
        <p>Welcome</p>
        <p>Projects</p>
        <p>Socials</p>
      </nav>
    </header>
  );
}

function AppBody({ sectVal }) {
  return (
    <body className="App-body">
      <section className="Welcome">
        <div>
          <h1>Hello, my name is Alex Chase</h1>
          <p>
            I am a new grad software developer, and this is my portfolio
            website!
          </p>
          <p>
            Feel free to look around, I'm still getting things in order here.
          </p>
        </div>
      </section>
    </body>
  );
}

export default App;
