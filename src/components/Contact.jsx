import { contact } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">{contact.label}</div>
        <h2 className="section-title">{contact.title}</h2>

        <p className="section-intro">{contact.intro}</p>

        <div className="buttons">
          {contact.buttons.map((btn) => (
            <a
              key={btn.label}
              className={`btn ${btn.primary ? "primary" : ""}`}
              href={btn.href}
              {...(btn.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
