import "./Portfolio.css";

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
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Node.js",
    "Git",
  ];

  const achievements = [
    {
      title: "Frontend Development Certification",
      description:
        "Completed a certification focused on modern frontend technologies and responsive web design.",
    },
    {
      title: "Built 10+ Web Projects",
      description:
        "Created multiple personal and practice projects using React, TypeScript, and JavaScript.",
    },
    {
      title: "Hackathon Participant",
      description:
        "Participated in coding challenges and collaborative development events.",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A modern shopping platform with product listings, cart functionality, and responsive design.",
      live: "https://example.com",
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app for managing daily tasks with filtering, status tracking, and local storage.",
      live: "https://example.com",
      github: "https://github.com/yourusername/project2",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather app that displays forecasts with a simple and elegant interface.",
      live: "https://example.com",
      github: "https://github.com/yourusername/project3",
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
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Anthony</span>
            </h1>
            <p className="hero-subtitle">
              Confidence comes from dedication and experience. Believe in yourself and continue creating your path.
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
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            This portfolio represents not only my work, but also my passion for learning and improving. I aim to create meaningful experiences through dedication and creativity.
          </p>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="achievements" className="section">
          <h2 className="section-title">Achievements</h2>
          <p className="section-text">
            A few highlights of my learning journey, technical growth, and
            project experience.
          </p>

          <div className="project-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{achievement.title}</h3>
                <p className="project-description">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>

          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="card-buttons">
                  <button
                    className="primary-button"
                    onClick={() => openLink(project.live)}
                  >
                    Live Demo
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => openLink(project.github)}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">
            Want to work together or have a project in mind? Feel free to reach
            out.
          </p>

          <div className="contact-buttons">
            <button
              className="primary-button"
              onClick={() => openLink("mailto:your@email.com")}
            >
              Acmeparanum.student@asiancollege.edu.ph
            </button>

            <button
              className="secondary-button"
              onClick={() => openLink("https://github.com/yourusername")}
            >
              GitHub
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                openLink("https://linkedin.com/in/yourusername")
              }
            >
              LinkedIn
            </button>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <p>© 2026 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;