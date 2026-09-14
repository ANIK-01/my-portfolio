import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">{skills.label}</div>
        <h2 className="section-title">{skills.title}</h2>

        <div className="skills">
          {skills.groups.map((group) => (
            <div className="card skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
