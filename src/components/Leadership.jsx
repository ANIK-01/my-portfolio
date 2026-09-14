import { leadership } from "../data/portfolioData";

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="container">
        <div className="section-label">{leadership.label}</div>
        <h2 className="section-title">{leadership.title}</h2>

        <div className="grid">
          {leadership.items.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
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
