import { awards } from "../data/portfolioData";

export default function Awards() {
  return (
    <section id="awards">
      <div className="container">
        <div className="section-label">{awards.label}</div>
        <h2 className="section-title">{awards.title}</h2>

        {awards.items.map((award) => (
          <div className="card award" key={award.title}>
            <div className="trophy">{award.icon}</div>
            <h3>{award.title}</h3>
            <p>{award.description}</p>
            {award.date && <p>{award.date}</p>}

            {award.link && (
              <div className="card-links" style={{ justifyContent: "center" }}>
                <a
                  href={award.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {award.link.label}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
