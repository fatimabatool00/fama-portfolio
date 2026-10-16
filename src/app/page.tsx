
const projects = [
  {
    number: "01",
    category: "AI / E-COMMERCE",
    title: "AI Product Assistant",
    description:
      "An AI-powered assistant concept for generating product descriptions and supporting price recommendations for e-commerce sellers.",
    tags: ["Python", "OpenAI API", "REST APIs"],
  },
  {
    number: "02",
    category: "EDTECH / WEB",
    title: "EduPath PK",
    description:
      "An education platform concept to help Pakistani students explore academic pathways, universities, scholarships and admissions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Notes App",
    description:
      "A note-taking application concept focused on organizing notes, editing content and saving data locally.",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
  },
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "HTML & CSS",
  "SQL",
  "MySQL",
  "Python",
  "REST APIs",
  "Postman",
  "Swagger UI",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="logo" href="#home">
          Fatima Batool<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk ↗
          </a>
        </div>
      </nav>

      <section className="hero container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">BSCS GRADUATE · DEVELOPER · QA</p>

          <h1>
            Building digital
            <br />
            experiences with
            <br />
            <span className="gradient-text">purpose.</span>
          </h1>

          <p className="hero-description">
            I&apos;m a computer science graduate interested in building
            useful web applications, working with APIs, and creating
            reliable digital experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work ↘
            </a>
            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <span>📍 Pakistan</span>
            <span>✦ Web Development &amp; Quality Assurance</span>
          </div>
        </div>

        <div className="code-card">
          <div className="code-top">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>developer.ts</span>
            <span className="code-lang">TS</span>
          </div>

          <div className="code-body">
            <p><span className="line-no">01</span><span className="code-purple">const</span> developer = {"{"}</p>
            <p><span className="line-no">02</span>&nbsp; name: <span className="code-green">&quot;Fatima Batool&quot;</span>,</p>
            <p><span className="line-no">03</span>&nbsp; degree: <span className="code-green">&quot;BSCS&quot;</span>,</p>
            <p><span className="line-no">04</span>&nbsp; interests: [</p>
            <p><span className="line-no">05</span>&nbsp;&nbsp; <span className="code-green">&quot;Web Development&quot;</span>,</p>
            <p><span className="line-no">06</span>&nbsp;&nbsp; <span className="code-green">&quot;API Testing&quot;</span>,</p>
            <p><span className="line-no">07</span>&nbsp;&nbsp; <span className="code-green">&quot;AI Projects&quot;</span></p>
            <p><span className="line-no">08</span>&nbsp; ],</p>
            <p><span className="line-no">09</span>&nbsp; mindset: <span className="code-green">&quot;Always learning&quot;</span></p>
            <p><span className="line-no">10</span>{"}"};</p>
            <p className="code-comment"><span className="line-no">11</span>// Turning ideas into reality.</p>
          </div>

          <div className="code-bottom">
            <span><span className="status-dot" /> Ready to build</span>
            <span>UTF-8</span>
          </div>
        </div>

        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
      </section>

      <section className="section container" id="about">
        <p className="eyebrow">01 / ABOUT ME</p>
        <h2>
          Curious mind. <span className="muted">Practical builder.</span>
        </h2>

        <div className="about-grid">
          <p className="section-copy">
            With a Bachelor&apos;s degree in Computer Science, I enjoy
            exploring how technology solves real problems. My experience
            includes API testing, writing test cases, identifying bugs,
            and developing web application projects.
          </p>

          <div className="about-note">
            <span className="note-icon">✳</span>
            <div>
              <h3>My approach</h3>
              <p>
                Keep learning, solve problems thoughtfully, and build
                experiences that are useful, reliable and easy to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-border" id="skills">
        <div className="container">
          <p className="eyebrow">02 / TOOLKIT</p>
          <h2>
            Tools I work <span className="muted">with.</span>
          </h2>
          <p className="section-copy">
            Technologies and tools I have used or am developing experience with.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                <span className="skill-mark">✳</span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="projects">
        <p className="eyebrow">03 / SELECTED WORK</p>
        <h2>
          Ideas into <span className="muted">projects.</span>
        </h2>
        <p className="section-copy">
          A selection of projects and concepts across AI, education and web development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-art">
                <span className="art-bracket">&lt;</span>
                <span className="art-name">{project.title}</span>
                <span className="art-bracket">/&gt;</span>
                <div className="art-glow" />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="project-status">
                  Add your GitHub or live demo link
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-border" id="experience">
        <div className="container">
          <p className="eyebrow">04 / EXPERIENCE</p>
          <h2>
            Learning by <span className="muted">doing.</span>
          </h2>

          <div className="experience-card">
            <div className="experience-marker" />

            <div>
              <p className="experience-date">REMOTE INTERNSHIP</p>
              <h3>QA Engineer / API Testing Intern</h3>
              <p className="experience-company">DataSaz Solutions</p>

              <p className="section-copy">
                Worked with Postman and Swagger UI to test API endpoints,
                write and execute test cases, document bugs with reproduction
                steps, and collaborate with the team in a Scrum workflow.
              </p>

              <div className="tag-list">
                <span className="tag">Postman</span>
                <span className="tag">Swagger UI</span>
                <span className="tag">Test Cases</span>
                <span className="tag">Bug Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section container" id="contact">
        <p className="eyebrow">05 / CONTACT</p>
        <h2>Have a project in mind?</h2>
        <h2 className="muted">Let&apos;s make it happen.</h2>

        <p className="section-copy">
          I&apos;m open to suitable entry-level opportunities, collaborations
          and freelance projects.
        </p>

        <a
          className="button button-primary"
          href="mailto:fatimabatool4098@gmail.com"
        >
          Email me ↗
        </a>

        <div className="social-links">
          <a href="https://github.com/fatimabatool00" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/fatima-batool-791279253" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer className="footer container">
        <a className="logo" href="#home">
          Fatima Batool<span>.</span>
        </a>
        <p>Designed &amp; built with care · © {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
