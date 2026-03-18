import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import "./App.css";
import profile from "./assets/profile.jpg";

// Premium Motion Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// 3D Card Hover Effect Component
function TiltCard({ children, className, variants }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={variants}
      className={`perspective-wrap ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [formStatus, setFormStatus] = useState("idle");
  const [isHovering, setIsHovering] = useState(false);

  // Custom Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Handle Form Submission with Web3Forms
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms Access Key
    // You should get your own free key from web3forms.com
    formData.append("access_key", "725958fa-ead8-43f2-aab0-9b357c17fc03");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json();

      if (data.success) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000); // Reset after 5s
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <div
      className="portfolio"
      onMouseDown={() => setIsHovering(true)}
      onMouseUp={() => setIsHovering(false)}
    >
      {/* Custom Cursor */}
      <motion.div
        className={`custom-cursor ${isHovering ? "hovering" : ""}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />

      {/* Ambient Background Orbs */}
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />

      {/* Navbar: drops down smoothly */}
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="nav-logo">Himeth Silva</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <motion.div
            className="hero-text"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeUp} className="hero-tag">Computer Science Undergraduate</motion.p>
            <motion.h1 variants={fadeUp} className="gradient-text">Hi, I'm Himeth Randil Silva</motion.h1>
            <motion.p variants={fadeUp} className="hero-description">
              Frontend, Full-Stack, and IoT-focused developer building practical
              software systems and real-world technology solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-buttons">
              <a
                href="#projects"
                className="btn primary-btn"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn secondary-btn"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="photo-card"
              animate={floatAnimation}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="photo-badge">
                <span className="photo-dot" />
                Seeking Internship
              </div>
              <img className="hero-photo" src={profile} alt="Himeth Silva" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <motion.section
        className="section-card"
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2>About Me</h2>
        <p>
          I am a Computer Science undergraduate passionate about frontend
          development, full-stack systems, and embedded IoT solutions. I enjoy
          building practical software that solves real-world problems and helps
          me grow as an engineer.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="section-card"
        id="skills"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp}>Skills</motion.h2>
        <motion.div className="skill-list" variants={staggerContainer}>
          {["Java", "Python", "JavaScript", "React", "HTML", "CSS", "Git", "ESP32", "Arduino", "MQTT"].map((skill) => (
            <motion.span
              key={skill}
              variants={fadeUp}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="section-card"
        id="projects"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.div className="section-head" variants={fadeUp}>
          <h2>Projects</h2>
          <p className="muted">A few projects I’ve worked on recently.</p>
        </motion.div>

        <motion.div className="grid" variants={staggerContainer}>
          {/* Project 1 */}
          <TiltCard variants={fadeUp} className="card">
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
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Private / Coming soon
              </a>
            </div>
          </TiltCard>

          {/* Project 2 */}
          <TiltCard variants={fadeUp} className="card">
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
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                GitHub (add later)
              </a>
            </div>
          </TiltCard>

          {/* Project 3 */}
          <TiltCard variants={fadeUp} className="card">
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
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                GitHub Repo
              </a>
            </div>
          </TiltCard>
        </motion.div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="contactWrap"
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="contactHeader" variants={fadeUp}>
          <p className="contactKicker">GET IN TOUCH</p>
          <h2 className="contactTitle">
            Let&apos;s build <span className="accentText">something</span> great.
          </h2>
          <p className="contactSubtitle">
            Have a project or an internship opportunity in mind? I&apos;d love to hear about it.
            Send me a message and let&apos;s discuss how I can contribute.
          </p>
        </motion.div>

        <div className="contactGrid">
          {/* Left: Form */}
          <motion.div className="contactCard" variants={slideInLeft}>
            <form className="contactForm" onSubmit={handleFormSubmit}>
              <label>
                Name
                <input name="name" placeholder="Your name..." required />
              </label>

              <label>
                Email
                <input name="email" type="email" placeholder="your@email.com" required />
              </label>

              <label>
                Message
                <textarea name="message" rows="6" placeholder="Your message..." required />
              </label>

              <button
                className="sendBtn"
                type="submit"
                disabled={formStatus === "loading"}
                style={{ opacity: formStatus === "loading" ? 0.7 : 1 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {formStatus === "idle" && <><Send size={18} style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block', position: 'relative', top: '-2px' }} /> Send Message</>}
                {formStatus === "loading" && "Sending... "}
                {formStatus === "success" && <><CheckCircle2 size={18} style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block', position: 'relative', top: '-2px' }} /> Sent Successfully!</>}
                {formStatus === "error" && <><AlertCircle size={18} style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block', position: 'relative', top: '-2px' }} /> Error Sending</>}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div className="contactSide" variants={fadeUp}>
            <div className="contactInfoCard">
              <h3>Contact Information</h3>

              <div className="infoRow">
                <div className="infoIcon">
                  <Mail size={20} color="#38bdf8" />
                </div>
                <div>
                  <div className="infoLabel">Email</div>
                  <a
                    className="infoValue"
                    href="mailto:ghhrsilva@gmail.com"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    ghhrsilva@gmail.com
                  </a>
                </div>
              </div>

              <div className="infoRow">
                <div className="infoIcon">
                  <MapPin size={20} color="#38bdf8" />
                </div>
                <div>
                  <div className="infoLabel">Location</div>
                  <div className="infoValue">Sri Lanka</div>
                </div>
              </div>
            </div>

            <div className="internCard">
              <div className="internTop">
                <span className="greenDot" />
                Seeking Internship
              </div>
              <p className="internText">
                I&apos;m currently looking for an internship opportunity in the coming months.
                I&apos;m excited to apply my skills in full-stack development and build real-world systems.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;