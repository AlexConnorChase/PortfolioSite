import React from "react";
import "./App.css";

class WelcomeSection extends Component {
  render() {
    return (
      <section className="Welcome">
        <div className="about-me">
          <h1>WELCOME!</h1>
          <p>
            Hello, my name is Alex Chase. I am a new grad software developer,
            and this is my portfolio website!
          </p>
          <p>
            Feel free to look around, I'm still getting things in order here.
          </p>
          <h2>About My Journey Here:</h2>
          <p>
            My journey with technology began when I enrolled in my high school's
            Project: Lead the Way program, learning the basics of engineering
            work, proper documentation and notarization, demension-taking, CAD
            modeling, etc. This led me to eventually complete a particular
            course "AP Computer Science", where I would be introduced to
            software development and begin developing an interest in coding. By
            the end of high school I had found myself enrolled in college at
            Santa Fe Community College in Gainesville as part of the Gator
            Engineering at Santa Fe program, where I would transfer to the
            University of Florida.
          </p>
          <p>
            I graduated from the University of Florida in May of 2024 after 5
            years of hard work earning myself a Bachelor's of Science in
            Computer Engineering. My curriculum taught me a lot about how
            hardware and software come together to enable computers to do what
            they do today. I've done high-level work like enabling IoT services
            in wi-fi enabled devices and designing UI's in Unity, and I've
            performed low-level work such as designing and programming
            microprocessors with VHDL and Assembly. As part of my breadth work I
            have also exposed myself to the development and fundamentals in
            machine learning, along with some of the data science work that goes
            along with that.
          </p>
          <p>
            Leading up to this point I have developed skills utilizing
            languagess such as C++, C#, Python, R, Java, VHDL, and ARM Assembly.
            I have made use of tools like MATLAB, Jupyter Notebooks, Microchiip
            Studio, LT Spice, and VSCode to work on a variety of projects. As
            for my current efforts I'm teaching myself more about front-end
            development, and as I'm writing this passage I'm currently teaching
            myself how to use React for webpages. I've been so incredibly lucky
            to get to go on this journey and I hope that whomever has found this
            little page of mine will continue to watch me and my journey as I
            continue to learn and grow.
          </p>
        </div>
      </section>
    );
  }
}

export default WelcomeSection;
