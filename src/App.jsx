import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-logo">Himeth Silva</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-tag">Computer Science Undergraduate</p>
            <h1>Hi, I'm Himeth Randil Silva</h1>
            <p className="hero-description">
              Frontend, Full-Stack, and IoT-focused developer building practical
              software systems and real-world technology solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">View Projects</a>
              <a href="#contact" className="btn secondary-btn">Contact Me</a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <img className="hero-photo" src={profile} alt="Himeth Silva" />
          </div>
        </div>
      </section>

      <section className="section-card" id="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science undergraduate passionate about frontend
          development, full-stack systems, and embedded IoT solutions. I enjoy
          building practical software that solves real-world problems and helps
          me grow as an engineer.
        </p>
      </section>

      <section className="section-card" id="skills">
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

      <section className="section-card" id="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>SDGP Project</h3>
            <p>
              A major software development group project focused on solving
              real-world problems through intelligent system design and
              application development.
            </p>
            <div className="project-tags">
              <span>Software Engineering</span>
              <span>Team Project</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Frontend Web Project</h3>
            <p>
              A modern frontend web application built using React with a strong
              focus on clean user interface design and responsive layouts.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>Frontend</span>
            </div>
          </div>

          <div className="project-card">
            <h3>IoT Smart Parking System</h3>
            <p>
              An ESP32-based smart parking system using ultrasonic sensors,
              MQTT, and automated gate control for real-time parking
              management.
            </p>
            <div className="project-tags">
              <span>ESP32</span>
              <span>IoT</span>
              <span>MQTT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card contact-section" id="contact">
        <h2>Contact</h2>
        <div className="contact-list">
          <p>
            <strong>Email:</strong> ghhrsilva@gmail.com
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/ghhrsilva"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ghhrsilva
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/himeth-silva"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/himeth-silva
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;