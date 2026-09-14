import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">{experience.label}</div>
        <h2 className="section-title">{experience.title}</h2>

        <div className="timeline">
          {experience.items.map((item) => (
            <div className="timeline-item" key={item.date + item.title}>
              <div className="date">{item.date}</div>
              <h3>{item.title}</h3>
              <div className="org">{item.org}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
