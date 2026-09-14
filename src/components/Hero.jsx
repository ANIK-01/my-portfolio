import { hero } from "../data/portfolioData";
import heroPortrait from "../assets/my_img.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">{hero.eyebrow}</div>

          <h1>
            {hero.titleLine1}
            <br />
            {hero.titleLine2Prefix}
            <span>{hero.titleHighlight}</span>
          </h1>

          <p className="hero-description">{hero.description}</p>

          <div className="buttons">
            {hero.buttons.map((btn) => (
              <a
                key={btn.label}
                className={`btn ${btn.primary ? "primary" : ""}`}
                href={btn.href}
                {...(btn.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {btn.label}
              </a>
            ))}
          </div>

          <div className="stats">
            {hero.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroPortrait} alt="Mohiuzzaman portrait" className="hero-portrait" />
        </div>
      </div>
    </section>
  );
}
