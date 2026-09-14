import { siteConfig, navLinks } from "../data/portfolioData";
import logoImage from "../assets/my_img.jpg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#home" className="logo" aria-label="Home">
            <img src={logoImage} alt="Mohiuzzaman logo" className="logo-image" />
            <span className="logo-text">{siteConfig.name}</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a className="btn mobile-menu" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
