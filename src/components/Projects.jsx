import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">{projects.label}</div>
        <h2 className="section-title">{projects.title}</h2>
        <p className="section-intro">{projects.intro}</p>

        <div className="grid">
          {projects.items.map((project) => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
