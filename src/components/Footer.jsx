import { siteConfig } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>
          © {siteConfig.year} {siteConfig.name}
        </span>
        <span>Software Engineer · Research · Data</span>
      </div>
    </footer>
  );
}
