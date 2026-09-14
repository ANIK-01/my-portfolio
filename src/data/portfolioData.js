// ============================================
// PORTFOLIO DATA - Edit this file to update content
// ============================================

export const siteConfig = {
  name: "MD. MOHIUZZAMAN",
  logo: "MOHIUZZAMAN.",
  title: "MD. MOHIUZZAMAN | Portfolio",
  description: "MD. MOHIUZZAMAN — Software Engineer, ML Researcher and Data Science enthusiast.",
  email: "anikmd445@gmail.com",
  github: "https://github.com/ANIK-01",
  linkedin: "https://www.linkedin.com/in/md-mohiuzzaman/",
  resume: "/assets/resume.pdf",
  year: new Date().getFullYear(),
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#awards", label: "Awards" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
];

export const hero = {
  eyebrow: "Software Engineer · ML Researcher · Data Science",
  titleLine1: "Building software.",
  titleLine2Prefix: "Exploring ",
  titleHighlight: "intelligent systems.",
  description:
    "I'm Md. Mohiuzzaman, a Software Engineer and BRAC University graduate with a background in Computer Science and Engineering. My interests span scalable backend systems, data science, machine learning, and federated learning research.",
  buttons: [
    { label: "Explore My Work", href: "#projects", primary: true },
    { label: "View Resume", href: "/assets/resume.pdf", external: true },
    { label: "GitHub ↗", href: "https://github.com/ANIK-01", external: true },
  ],
  stats: [
    { value: "3.84", label: "CGPA / 4.00" },
    { value: "2024", label: "B.Sc. CSE" },
    { value: "1+", label: "Years Engineering" },
    { value: "1", label: "Best Thesis Award" },
  ],
};

export const about = {
  label: "01 · About",
  title: "A little about me.",
  intro:
    "I enjoy working at the intersection of software engineering, data, and intelligent distributed systems. My academic background gave me exposure to machine learning and data science, while my professional experience has focused on building enterprise software and backend systems.",
  cards: [
    {
      title: "Software Engineering",
      description:
        "Building backend systems and enterprise applications using modern .NET technologies and clean architecture.",
    },
    {
      title: "Machine Learning",
      description:
        "Interested in practical machine learning, deep learning, federated learning, and resource-constrained systems.",
    },
    {
      title: "Data Science",
      description:
        "Exploring data analysis, visualization, statistics, and data-driven approaches to real-world problems.",
    },
  ],
};

export const experience = {
  label: "02 · Experience",
  title: "My professional journey.",
  items: [
    {
      date: "JUL 2025 — PRESENT",
      title: "Software Engineer",
      org: "Softrobotics Bangladesh Ltd",
      description:
        "Backend development with ASP.NET Core 8, enterprise application development, React-based features, and collaboration with cross-functional teams.",
    },
    {
      date: "JAN 2025 — JUN 2025",
      title: "Trainee Software Engineer",
      org: "Softrobotics Bangladesh Ltd",
      description:
        "Worked on ASP.NET Core backend development, API design, database-driven applications, and Clean Architecture.",
    },
    {
      date: "SEP 2023 — SEP 2024",
      title: "Student Tutor / Teacher Assistant",
      org: "BRAC University · Department of CSE",
      description:
        "Taught Python and Java programming to undergraduate students and guided them through fundamental and advanced programming concepts.",
    },
  ],
};

export const research = {
  label: "03 · Research",
  title: "Undergraduate research.",
  thesis: {
    eyebrow: "Bachelor's Thesis",
    title: "TRI-FED-RKD",
    description:
      "A scalable hybrid Federated Learning framework designed for distributed networks, investigating efficient learning under resource and communication constraints.",
    tags: [
      "Federated Learning",
      "Edge Computing",
      "Knowledge Distillation",
      "CNN",
      "SNN",
      "PyTorch",
    ],
    links: [
      {
        label: "University Repository ↗",
        href: "https://dspace.bracu.ac.bd/items/7eb49794-75f5-4ceb-862c-0164b345c801",
      },
      // { label: "Thesis PDF ↗", href: "assets/thesis.pdf" },
    ],
  },
  diagram: ["Cloud / Global Aggregation", "RSU / Middle Server", "Vehicles / Clients"],
};

export const projects = {
  label: "04 · Projects",
  title: "Selected work.",
  intro:
    "A selection of academic and personal projects. Add more cards as your project collection grows.",
  items: [
    {
      title: "Chatbot AI",
      description:
        "Context-aware AI chatbot using retrieval-augmented generation, LangChain, Gemini, embeddings, and a vector database.",
      tags: ["LangChain", "RAG", "Gemini", "Pinecone"],
      links: [{ label: "GitHub ↗", href: "https://github.com/ANIK-01/chatbot-ai" }],
    },
    {
      title: "TaskFlow",
      description:
        "Task management tool designed to streamline workflows and track productivity.",
      tags: ["Next.js", "Firebase"],
      links: [{ label: "GitHub ↗", href: "https://github.com/ANIK-01/TaskFlow" }],
    },
    {
      title: "Tutor for Hire",
      description:
        "Backend platform connecting tutors and students with class management and payment-related functionality.",
      tags: ["Express.js", "Prisma", "Backend"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/ANIK-01/tutorForHire_backend" },
      ],
    },
    // Add more projects here by copying an object above
  ],
};

export const certificates = {
  label: "05 · Certificates",
  title: "Learning & credentials.",
  intro:
    "Keep academic documents and professional certificates organized in one place. Replace the example links below with your actual PDF/image files.",
  items: [
    {
      icon: "🎓",
      title: "B.Sc. Certificate",
      description: "Computer Science & Engineering · BRAC University",
      link: { label: "View Certificate ↗", href: "assets/academic/bsc-certificate.pdf" },
    },
    {
      icon: "📄",
      title: "Academic Transcript",
      description: "B.Sc. in Computer Science & Engineering",
      link: { label: "View Transcript ↗", href: "assets/academic/transcript.pdf" },
    },
    {
      icon: "📊",
      title: "DataCamp Certificates",
      description: "Data Science, Python, analytics and related learning.",
      link: { label: "View Certificates ↓", href: "#datacamp" },
    },
    {
      id: "datacamp",
      icon: "🏅",
      title: "DataCamp Certificate 01",
      description: "Replace with the actual course/certificate title.",
      link: { label: "View ↗", href: "assets/certificates/datacamp-01.pdf" },
    },
    // Add more certificates here
  ],
};

export const awards = {
  label: "06 · Awards",
  title: "Recognition.",
  items: [
    {
      icon: "🏆",
      title: "Best Thesis Award",
      description: "BRAC University · Department of Computer Science and Engineering",
      date: "Summer 2024",
      link: {
        label: "View Award Certificate ↗",
        href: "assets/awards/best-thesis-award.pdf",
      },
    },
  ],
};

export const leadership = {
  label: "07 · Leadership",
  title: "Beyond technical work.",
  items: [
    {
      title: "Student Tutor",
      description:
        "Supported undergraduate learning in Python and Java and helped students understand programming concepts.",
      tags: ["Teaching", "Mentoring", "Communication"],
    },
    {
      title: "Academic Research",
      description:
        "Conducted undergraduate research in federated learning and distributed machine learning systems.",
      tags: ["Research", "Problem Solving", "Technical Writing"],
    },
    {
      title: "Activities",
      description:
        "Add robotics, datathon, student organization, volunteering, or other activities here when you want to showcase them.",
      tags: ["Leadership", "Teamwork"],
    },
  ],
};

export const skills = {
  label: "08 · Skills",
  title: "Technical toolkit.",
  groups: [
    {
      title: "Programming",
      items: ["Python", "C#", "Java", "C++"],
    },
    {
      title: "Backend & Web",
      items: ["ASP.NET Core 8", "Quarkus", "Express.js", "React.js"],
    },
    {
      title: "Machine Learning & AI",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Federated Learning",
        "Deep Learning",
        "NLP",
        "LangChain",
      ],
    },
    {
      title: "Data",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Power BI",
        "Data Science",
        "Data Analytics",
      ],
    },
    {
      title: "Databases & Tools",
      items: ["MySQL", "PostgreSQL", "Docker", "Git", "Postman"],
    },
    {
      title: "Hardware & Other",
      items: ["Arduino Uno", "Raspberry Pi", "LaTeX", "Overleaf", "Web Scraping"],
    },
  ],
};

export const contact = {
  label: "09 · Contact",
  title: "Let's connect.",
  intro:
    "Interested in software engineering, research, data science, or collaboration? Feel free to reach out.",
  buttons: [
    { label: "Email Me", href: "mailto:anikmd445@gmail.com", primary: true },
    { label: "GitHub", href: "https://github.com/ANIK-01", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-mohiuzzaman/",
      external: true,
    },
  ],
};
