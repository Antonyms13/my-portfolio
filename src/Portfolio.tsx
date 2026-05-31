import "./Portfolio.css";
import certificate1 from "./assets/certificate1.png";
import certificate2 from "./assets/certificate2.png";
import nc2Certificate from "./assets/nc2-computer-systems-servicing.png";
import nc3Certificate from "./assets/nc3-events-management.png";
import profileImage from "./assets/picture1.png";
import project1 from "./assets/eis.png";
import project2 from "./assets/Ordering System.png";
import project3 from "./assets/recreating website.png";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiNodedotjs } from "react-icons/si";
import { MdDevices } from "react-icons/md";

function Portfolio() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const skills = [
  {
    name: "React",
    icon: <FaReact className="skill-icon react-icon" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="skill-icon typescript-icon" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="skill-icon javascript-icon" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="skill-icon html-icon" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="skill-icon css-icon" />,
  },
  {
    name: "Responsive Design",
    icon: <MdDevices className="skill-icon responsive-icon" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="skill-icon node-icon" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="skill-icon github-icon" />,
  },
];

 const achievements = [
  {
    title: "Front-End Development Libraries V8",
    description:
      "Earned a freeCodeCamp certification focused on React, JavaScript libraries, and frontend development.",
    image: certificate1,
  },
  {
    title: "Legacy Responsive Web Design V8",
    description:
      "Completed a freeCodeCamp certification covering HTML, CSS, accessibility, and responsive design.",
    image: certificate2,
  },
  {
    title: "National Certificate II - Computer Systems Servicing",
    description:
      "Awarded TESDA National Certificate II in Computer Systems Servicing, demonstrating skills in installation, configuration, maintenance, and repair of computer systems and networks.",
    image: nc2Certificate,
  },
  {
    title: "National Certificate III - Events Management Services",
    description:
      "Awarded TESDA National Certificate III in Events Management Services, showing competence in planning, coordinating, and supporting event operations.",
    image: nc3Certificate,
  },
];

  const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A modern shopping platform with product listings, cart features, and responsive design.",
    image: project1,
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for organizing daily tasks with status tracking and filtering.",
    image: project2,
  },
  {
    title: "Weather Dashboard",
    description:
      "A clean weather app that displays forecast information in a simple and user-friendly interface.",
    image: project3,
  },
];

  return (
    <div className="portfolio-app">
      <header className="portfolio-header">
        <div className="portfolio-logo">MyPortfolio</div>

        <nav className="portfolio-nav">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("achievements")}>
            Achievements
          </button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
  <div className="hero-container">
    <div className="hero-text">
      <h1 className="hero-title">
        Hi, I'm <span className="highlight">Anthony</span>
      </h1>

      <p className="hero-subtitle">
        A creative frontend developer passionate about building presentable,
        responsive, and user-friendly web applications.
      </p>

      <div className="hero-buttons">
        <button
          className="primary-button"
          onClick={() => scrollToSection("projects")}
        >
          View Projects
        </button>

        <button
          className="secondary-button"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>
      </div>
    </div>

    <div className="hero-image-wrapper">
      <img
        src={profileImage}
        alt="Anthony profile"
        className="profile-image"
      />
    </div>
  </div>
</section>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I enjoy creating modern websites and web applications with clean
            layouts, responsive design, and interactive user experiences. I like
            learning new technologies and improving my skills through projects
            and real-world practice.
          </p>

          <div className="skills-container">
  {skills.map((skill, index) => (
    <span key={index} className="skill-badge">
      {skill.icon}
      <span>{skill.name}</span>
    </span>
  ))}
</div>
        </section>

        <section id="achievements" className="section">
  <h2 className="section-title">Achievements</h2>
  <p className="section-text">
    Some highlights of my learning journey and development experience.
  </p>

  <div className="project-grid">
    {achievements.map((achievement, index) => (
      <div key={index} className="project-card">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="achievement-image"
        />
        <h3 className="project-title">{achievement.title}</h3>
        <p className="project-description">{achievement.description}</p>
      </div>
    ))}
  </div>
</section>

        <section id="projects" className="section">
  <h2 className="section-title">Projects</h2>

  <div className="project-grid">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    ))}
  </div>
</section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">
            Want to work together or discuss a project? Feel free to contact me.
          </p>

          <div className="contact-buttons">
            <button
              className="primary-button"
              onClick={() =>
                openLink("mailto:acmeparanum.student@Asiancollege.edu.ph")
              }
            >
              Email Me
            </button>

            <button
              className="secondary-button"
              onClick={() => openLink("https://github.com/Antonyns13")}
            >
              GitHub
            </button>

            <button
              className="secondary-button"
              onClick={() => openLink("https://linkedin.com")}
            >
              LinkedIn
            </button>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <p>© 2026 Anthony. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;