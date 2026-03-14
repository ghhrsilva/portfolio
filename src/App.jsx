import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <section className="hero">
        <h1>Himeth Randil Silva</h1>
        <p>Computer Science Undergraduate</p>
        <p>Frontend, Full-Stack & IoT Developer</p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science undergraduate passionate about frontend
          development, full-stack systems, and embedded IoT solutions. I enjoy
          building practical software that solves real-world problems.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <span>Java</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Git</span>
          <span>ESP32</span>
          <span>Arduino</span>
          <span>MQTT</span>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>SDGP Project</h3>
          <p>
            A major software development group project focused on solving
            real-world problems through intelligent system design.
          </p>
        </div>

        <div className="project-card">
          <h3>Frontend Web Project</h3>
          <p>
            A modern frontend web application built using React with a focus on
            clean UI and responsive design.
          </p>
        </div>

        <div className="project-card">
          <h3>IoT Smart Parking System</h3>
          <p>
            An ESP32-based smart parking system using ultrasonic sensors, MQTT,
            and automated gate control.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email: ghhrsilva@gmail.com</p>
        <p>GitHub: github.com/ghhrsilva</p>
        <p>LinkedIn: linkedin.com/in/himeth-silva</p>
      </section>
    </div>
  );
}

export default App;