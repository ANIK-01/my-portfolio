import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">{about.label}</div>
        <h2 className="section-title">{about.title}</h2>

        <p className="section-intro">{about.intro}</p>

        <div className="grid">
          {about.cards.map((card) => (
            <div className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
