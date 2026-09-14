import { certificates } from "../data/portfolioData";

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <div className="section-label">{certificates.label}</div>
        <h2 className="section-title">{certificates.title}</h2>
        <p className="section-intro">{certificates.intro}</p>

        <div className="grid">
          {certificates.items.map((cert) => (
            <div
              className="card certificate"
              key={cert.title}
              id={cert.id || undefined}
            >
              <div>
                <div className="certificate-icon">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
              <div className="card-links">
                <a
                  href={cert.link.href}
                  {...(cert.link.href.startsWith("http") || cert.link.href.endsWith(".pdf")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {cert.link.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
