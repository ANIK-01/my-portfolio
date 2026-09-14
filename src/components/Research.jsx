import { research } from "../data/portfolioData";

export default function Research() {
  const { thesis, diagram } = research;

  return (
    <section id="research">
      <div className="container">
        <div className="section-label">{research.label}</div>
        <h2 className="section-title">{research.title}</h2>

        <div className="research">
          <div className="card">
            <div className="eyebrow">{thesis.eyebrow}</div>
            <h3>{thesis.title}</h3>
            <p>{thesis.description}</p>

            <div className="tag-list">
              {thesis.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="card-links">
              {thesis.links.map((link) => (
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

          <div className="card research-diagram">
            <div className="flow">
              {diagram.map((node, i) => (
                <div key={node}>
                  <div className="node">{node}</div>
                  {i < diagram.length - 1 && <div className="arrow">↓</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
