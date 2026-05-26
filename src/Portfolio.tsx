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
    "Responsive Design",
    "Node.js",
    "Git",
  ];

  const achievements = [
    {
      title: "Frontend Development Certification",
      description:
        "Completed training focused on modern frontend tools, responsive design, and clean UI development.",
     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Built Multiple Web Projects",
      description:
        "Developed several personal and academic web applications using React, TypeScript, and JavaScript.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Hackathon and Team Collaboration",
      description:
        "Worked with others in coding activities and project collaboration to improve teamwork and development skills.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A modern shopping platform with product listings, cart features, and responsive design.",
      live: "https://example.com",
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app for organizing daily tasks with status tracking and filtering.",
      live: "https://example.com",
      github: "https://github.com/yourusername/project2",
    },
    {
      title: "Weather Dashboard",
      description:
        "A clean weather app that displays forecast information in a simple and user-friendly interface.",
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
              Hi, I'm <span className="highlight">Your Name</span>
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
                {skill}
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
            Want to work together or discuss a project? Feel free to contact me.
          </p>

          <div className="contact-buttons">
            <button
              className="primary-button"
              onClick={() => openLink("mailto:your@email.com")}
            >
              Email Me
            </button>

            <button
              className="secondary-button"
              onClick={() => openLink("https://github.com/yourusername")}
            >
              GitHub
            </button>

            <button
              className="secondary-button"
              onClick={() => openLink("https://linkedin.com/in/yourusername")}
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