import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Himeth Silva</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
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
              <a href="#projects" className="btn primary-btn">
                View Projects
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="photo-card">
              <div className="photo-badge">
                <span className="photo-dot" />
                Seeking Internship
              </div>
              <img className="hero-photo" src={profile} alt="Himeth Silva" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-card" id="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science undergraduate passionate about frontend
          development, full-stack systems, and embedded IoT solutions. I enjoy
          building practical software that solves real-world problems and helps
          me grow as an engineer.
        </p>
      </section>

      {/* Skills */}
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

      {/* Projects */}
      <section className="section-card" id="projects">
        <div className="section-head">
          <h2>Projects</h2>
          <p className="muted">A few projects I’ve worked on recently.</p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-top">
              <h3>SDGP Project</h3>
              <span className="pill">Team</span>
            </div>
            <p className="muted">
              Main software development group project focused on real-world
              problem solving through system design and implementation.
            </p>
            <div className="tag-row">
              <span className="tag">System Design</span>
              <span className="tag">Web App</span>
              <span className="tag">Teamwork</span>
            </div>
            <div className="btn-row">
              <a
                className="link-btn"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Private / Coming soon
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <h3>Frontend Web Project</h3>
              <span className="pill">React</span>
            </div>
            <p className="muted">
              A modern React frontend focused on clean UI, responsive layouts,
              and smooth user experience.
            </p>
            <div className="tag-row">
              <span className="tag">React</span>
              <span className="tag">UI</span>
              <span className="tag">Responsive</span>
            </div>
            <div className="btn-row">
              <a
                className="link-btn"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                GitHub (add later)
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <h3>IoT Smart Parking System</h3>
              <span className="pill">ESP32</span>
            </div>
            <p className="muted">
              ESP32-based parking automation with ultrasonic sensing, servo gate
              control, and MQTT cloud publishing.
            </p>
            <div className="tag-row">
              <span className="tag">ESP32</span>
              <span className="tag">MQTT</span>
              <span className="tag">Sensors</span>
            </div>
            <div className="btn-row">
              <a
                className="link-btn"
                href="https://github.com/ghhrsilva/iot-smart-parking-system"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
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