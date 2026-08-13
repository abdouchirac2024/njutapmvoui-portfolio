import type { Locale } from "@/lib/i18n";

export type Social = {
  label: string;
  href: string;
  icon: "linkedin" | "gitlab" | "globe" | "mail";
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  description: string;
  longDescription: string;
  stack: string[];
  url?: string;
  featured?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  date: string;
  url?: string;
  location?: string;
  stack?: string[];
  bullets?: string[];
};

export type Education = {
  degree: string;
  school: string;
  date: string;
  mention?: string;
  detail?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  platform: string;
  date: string;
  verifyUrl: string;
};

type Badge = { label: string; href?: string };

export type Dictionary = {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    projects: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: { label: string; href: string }[];
  header: { menu: string; closeMenu: string; toggleTheme: string; home: string };
  hero: {
    greetingLines: [string, string];
    paragraph: { before: string; linkText: string; linkHref: string; after: string };
    badges: Badge[];
  };
  socials: Social[];
  featuredProject: Project & { cardTitle: string; trustedBy: string; visitSite: string; viewProject: string };
  projects: Project[];
  latestProjects: { heading: string; viewProject: string; viewAll: (n: number) => string };
  experiences: Experience[];
  experienceSection: { heading: string; downloadCV: string };
  education: Education[];
  certifications: Certification[];
  skills: { category: string; items: string[] }[];
  aboutPage: {
    intro1: string;
    intro2: string;
    sectionExperience: string;
    sectionEducation: string;
    sectionCertifications: string;
    sectionSkills: string;
  };
  projectsPage: { heading: string; intro: string; filterAll: string; noResults: string; visitSite: string };
  contactPage: { heading: string; intro: string };
  footer: { links: { label: string; href: string }[]; copyright: string };
  site: { name: string; role: string; email: string; location: string };
};

const fr: Dictionary = {
  meta: {
    home: {
      title: "Chirac Njutapmvoui — Développeur Full Stack, Data & Cloud",
      description:
        "Portfolio de Chirac Njutapmvoui, développeur Full Stack spécialisé Data & Cloud basé à Douala, Cameroun.",
    },
    about: {
      title: "À propos — Chirac Njutapmvoui",
      description: "Parcours, expériences et compétences de Chirac Njutapmvoui.",
    },
    projects: {
      title: "Projets — Chirac Njutapmvoui",
      description: "Tous les projets de Chirac Njutapmvoui, filtrables par stack technique.",
    },
    contact: {
      title: "Contact — Chirac Njutapmvoui",
      description: "Contactez Chirac Njutapmvoui.",
    },
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projects" },
    { label: "Certifications", href: "/about#certifications" },
    { label: "Contact", href: "/contact" },
  ],
  header: {
    menu: "Menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    home: "Accueil",
  },
  hero: {
    greetingLines: ["Salut, je suis Chirac NJUTAPMVOUI,", "mais vous pouvez m'appeler Chirac."],
    paragraph: {
      before:
        "Je suis un développeur Full Stack spécialisé Data & Cloud originaire du Cameroun, et je développe des ",
      linkText: "projets open source",
      linkHref: "/projects",
      after:
        ". Je suis passionné par la création d'applications cloud-native performantes et de pipelines de données temps réel.",
    },
    badges: [
      { label: "🇨🇲 Douala, Cameroun" },
      { label: "🎓 IUT d'Évry Val d'Essonne" },
      { label: "🏆 4 certifications Coursera", href: "/about#certifications" },
    ],
  },
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/abdou-njutapmvoui", icon: "linkedin" },
    { label: "GitLab", href: "https://gitlab.com/abdouchirac2024", icon: "gitlab" },
    { label: "Portfolio", href: "https://chirac-portfolio.vercel.app", icon: "globe" },
    { label: "Email", href: "mailto:abdouchirac411@gmail.com", icon: "mail" },
  ],
  featuredProject: {
    slug: "helpdigischool",
    title: "HelpDigiSchool",
    cardTitle: "HelpDigiSchool — plateforme SaaS scolaire avec OCR et analytics",
    description: "Plateforme SaaS scolaire avec OCR et analytics",
    longDescription:
      "Écosystème microservices (Spring Boot, Spring Cloud, Eureka) pour la gestion scolaire multi-établissements : extraction OCR des notes (Tesseract.js), moteur de scoring et bulletins automatisés, dashboards décisionnels en temps réel.",
    period: "2025 – Avr. 2026",
    stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker", "Prometheus", "Grafana", "MinIO/S3"],
    url: "https://helpdigischool.com",
    featured: true,
    trustedBy: "Approuvé par plusieurs établissements scolaires",
    visitSite: "Visiter le site",
    viewProject: "Voir le projet",
  },
  projects: [
    {
      slug: "helpdigischool",
      title: "HelpDigiSchool",
      description: "Plateforme SaaS scolaire avec OCR et analytics",
      longDescription:
        "Écosystème microservices (Spring Boot, Spring Cloud, Eureka) pour la gestion scolaire multi-établissements : extraction OCR des notes (Tesseract.js), moteur de scoring et bulletins automatisés, dashboards décisionnels en temps réel.",
      period: "2025 – Avr. 2026",
      stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker", "Prometheus", "Grafana", "MinIO/S3"],
      url: "https://helpdigischool.com",
      featured: true,
    },
    {
      slug: "multi-canal-services",
      title: "Multi Canal Services — ERP Logistique",
      description:
        "Orchestration d'un écosystème ERP cloud-native absorbant 500+ commandes/jour, avec pipelines temps réel pour le suivi des livraisons.",
      longDescription:
        "Modernisation et déploiement d'un ERP de gestion logistique et commerciale sur GCP via Docker. Pipelines asynchrones (Cloud Functions) pour l'automatisation du suivi des livraisons et la synchronisation bidirectionnelle des stocks. Refonte des couches d'accès aux données et mise en cache Redis (-40% de latence). Dashboards Angular pour le pilotage métier.",
      period: "Mai 2025 – Mai 2026",
      stack: ["Angular 19", "Laravel 11", "Node.js", "GCP Cloud Run", "GCP Functions", "Docker", "Redis"],
      url: "https://livraison-express.net",
    },
    {
      slug: "congres-adna",
      title: "Congrès ADNA",
      description:
        "Plateforme collaborative de gestion de congrès, conçue et modélisée sur une architecture microservices sécurisée.",
      longDescription:
        "Conception et modélisation de la plateforme collaborative Congrès ADNA, avec sécurisation des flux de données utilisateurs (JWT, gestion des rôles) sur une architecture microservices.",
      period: "Juin 2024 – Mai 2025",
      stack: ["React", "Node.js", "Laravel", "JWT"],
    },
    {
      slug: "africa-unity",
      title: "Africa Unity",
      description:
        "Plateforme collaborative de gestion d'événements professionnels avec CMS personnalisé et annuaires utilisateurs.",
      longDescription:
        "Développement d'Africa Unity, plateforme collaborative de gestion d'événements professionnels. CMS personnalisé avec gestion d'annuaires utilisateurs et contrôle des permissions.",
      period: "Juin 2023 – Nov. 2023",
      stack: ["PHP", "CMS", "MySQL"],
      url: "https://africaunity.net",
    },
  ],
  latestProjects: {
    heading: "Derniers projets",
    viewProject: "Voir le projet →",
    viewAll: (n) => `Voir tous les projets (${n})`,
  },
  experiences: [
    {
      company: "Multi Canal Services",
      role: "Développeur Full Stack Angular & Cloud",
      date: "05/2025 – 05/2026",
      url: "https://livraison-express.net",
      location: "Douala, Cameroun",
      stack: ["Angular 19", "Laravel 11", "Node.js", "GCP", "Docker", "Redis"],
      bullets: [
        "Orchestration et déploiement de l'écosystème ERP via Docker sur GCP, résilience face à 500+ commandes/jour.",
        "Pipelines asynchrones (GCP Cloud Functions) pour l'automatisation du suivi des livraisons et la synchronisation des stocks.",
        "Refonte des couches d'accès aux données et mise en cache Redis : -40% de latence sur les requêtes critiques.",
        "Logging centralisé et monitoring des flux transactionnels pour l'intégrité des données de facturation.",
        "Interfaces Angular de pilotage métier : KPIs et rapports analytiques automatisés.",
      ],
    },
    {
      company: "HelpDigiSchool",
      role: "Développeur Full Stack — Data & SaaS",
      date: "2025 – 04/2026",
      url: "https://helpdigischool.com",
      location: "Douala, Cameroun",
      stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker"],
      bullets: [
        "Module Tesseract.js d'extraction OCR des notes, avec score de confiance et pattern matching pour la validation des données.",
        "Moteur d'analytics et de scoring scolaire : moyennes pondérées, classements dynamiques, statistiques par classe et par cycle.",
        "Architecture microservices haute disponibilité (Spring Cloud, Eureka, API Gateway), multi-tenant et sécurisée.",
        "Dashboards interactifs (Recharts) et export massif PDF/Excel.",
        "Orchestration Docker Compose avec monitoring Prometheus/Grafana.",
      ],
    },
    {
      company: "DA Vinci IT Solutions",
      role: "Développeur Full Stack Microservices",
      date: "06/2024 – 05/2025",
      location: "Douala, Cameroun",
      stack: ["React", "Node.js", "Laravel", "JWT"],
      bullets: [
        "Développement d'applications web sur architecture microservices.",
        "Sécurisation et gestion des flux de données utilisateurs (JWT, gestion des rôles).",
        "Conception et modélisation de la plateforme collaborative Congrès ADNA.",
      ],
    },
    {
      company: "ADAA",
      role: "Développeur Full Stack & Testeur",
      date: "12/2023 – 05/2024",
      url: "https://adaacertif.com",
      location: "Douala, Cameroun",
      bullets: [
        "Développement de ADAA Learning, plateforme e-learning collaborative.",
        "Administration et structuration des données utilisateurs, tests fonctionnels et d'intégration.",
      ],
    },
    {
      company: "GENO CONSULTING",
      role: "Développeur Full Stack",
      date: "06/2023 – 11/2023",
      url: "https://africaunity.net",
      location: "Douala, Cameroun",
      bullets: [
        "Développement d'Africa Unity : plateforme collaborative de gestion d'événements professionnels.",
        "CMS personnalisé avec gestion d'annuaires utilisateurs et contrôle des permissions.",
      ],
    },
  ],
  experienceSection: { heading: "Expérience", downloadCV: "Télécharger le CV" },
  education: [
    {
      degree: "Licence Professionnelle — Métiers de l'Informatique : Applications Web (MIAW)",
      school: "IUT d'Évry Val d'Essonne (délocalisé à Douala)",
      date: "2023 – 2024",
      mention: "Mention Bien · 15,23/20",
      detail: "Modélisation des données, Python, Bases de données relationnelles, Activités en entreprise.",
    },
    {
      degree: "BTS Génie Informatique — Spécialité Génie Logiciel",
      school: "Institut ISTAMA, Douala",
      date: "2022 – 2023",
      mention: "Mention Bien · 14,60/20 · Classé 23ème/700+ au concours national",
      detail: "Algorithmique & Structures de données, Programmation Orientée Objet, Systèmes informatiques.",
    },
    {
      degree: "Baccalauréat Série D — Sciences",
      school: "Collège Bilingue FO KAMGA 2, Douala",
      date: "2018",
    },
  ],
  certifications: [
    {
      title: "Angular 17 Overview & Basics",
      issuer: "LearnQuest",
      platform: "Coursera",
      date: "12 août 2026",
      verifyUrl: "https://coursera.org/verify/XHPX62YECTKV",
    },
    {
      title: "CI/CD for Software Developers",
      issuer: "Codio",
      platform: "Coursera",
      date: "7 août 2026",
      verifyUrl: "https://coursera.org/verify/VXDWFB7OIZW4",
    },
    {
      title: "Building HTTP APIs with Spring",
      issuer: "Vanderbilt University",
      platform: "Coursera",
      date: "3 août 2026",
      verifyUrl: "https://coursera.org/verify/QQKQ50RYXOPP",
    },
    {
      title: "Java Microservices with Spring Boot",
      issuer: "Edureka",
      platform: "Coursera",
      date: "29 juil. 2026",
      verifyUrl: "https://coursera.org/verify/T72FRHQ9MPWW",
    },
  ],
  skills: [
    {
      category: "Data & Cloud",
      items: ["Python (Data Science)", "GCP Cloud Run", "Firebase", "Docker", "MinIO/S3", "Prometheus", "Grafana", "MySQL", "MongoDB", "Redis"],
    },
    {
      category: "Frontend",
      items: ["Angular 19", "React.js", "Next.js 15", "Vue.js 3", "TypeScript", "Tailwind CSS", "Recharts", "Tesseract.js (OCR)"],
    },
    {
      category: "Backend",
      items: ["Java 21", "Spring Boot", "Laravel (PHP 8+)", "Node.js", "Express.js", "API REST", "JWT", "Spring Cloud"],
    },
    {
      category: "DevOps & CI/CD",
      items: ["Docker", "Docker Compose", "Traefik", "GitLab CI", "GitHub Actions", "CI/CD pipelines"],
    },
  ],
  aboutPage: {
    intro1:
      "Développeur Full Stack avec plus de 2 ans d'expérience professionnelle, spécialisé dans le déploiement d'applications cloud-native (GCP, Docker) et le traitement de données en production. Basé à Douala, Cameroun, je développe des pipelines de données temps réel, des interfaces de visualisation et des architectures microservices.",
    intro2:
      "Diplômé d'une Licence Professionnelle Métiers de l'Informatique : Applications Web de l'IUT d'Évry Val d'Essonne (mention Bien), je continue d'approfondir mes compétences en science des données pour connecter ingénierie logicielle et analyse décisionnelle.",
    sectionExperience: "Expérience",
    sectionEducation: "Formation",
    sectionCertifications: "Certifications",
    sectionSkills: "Compétences",
  },
  projectsPage: {
    heading: "Projets",
    intro:
      "Une sélection de projets professionnels et entrepreneuriaux, du pipeline de données temps réel aux architectures microservices.",
    filterAll: "Tous",
    noResults: "Aucun projet pour ce filtre.",
    visitSite: "Visiter le site",
  },
  contactPage: {
    heading: "Contact",
    intro:
      "Une question, un projet, ou simplement envie d'échanger ? N'hésitez pas à me contacter directement par e-mail ou via l'un des liens ci-dessous.",
  },
  footer: {
    links: [
      { label: "À propos", href: "/about" },
      { label: "Projets", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
    copyright: "© 2026 Chirac Njutapmvoui. Tous droits réservés.",
  },
  site: {
    name: "Chirac Njutapmvoui",
    role: "Développeur Full Stack · Data & Cloud",
    email: "abdouchirac411@gmail.com",
    location: "Douala, Cameroun",
  },
};

const en: Dictionary = {
  meta: {
    home: {
      title: "Chirac Njutapmvoui — Full Stack Developer, Data & Cloud",
      description:
        "Chirac Njutapmvoui's portfolio — a Full Stack developer specialized in Data & Cloud, based in Douala, Cameroon.",
    },
    about: {
      title: "About — Chirac Njutapmvoui",
      description: "Chirac Njutapmvoui's background, experience, and skills.",
    },
    projects: {
      title: "Projects — Chirac Njutapmvoui",
      description: "All of Chirac Njutapmvoui's projects, filterable by tech stack.",
    },
    contact: {
      title: "Contact — Chirac Njutapmvoui",
      description: "Get in touch with Chirac Njutapmvoui.",
    },
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Certifications", href: "/about#certifications" },
    { label: "Contact", href: "/contact" },
  ],
  header: {
    menu: "Menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    home: "Home",
  },
  hero: {
    greetingLines: ["Hi, I'm Chirac NJUTAPMVOUI,", "but you can call me Chirac."],
    paragraph: {
      before: "I'm a Full Stack developer specialized in Data & Cloud from Cameroon, and I build ",
      linkText: "open source projects",
      linkHref: "/projects",
      after:
        ". I'm passionate about building high-performance cloud-native applications and real-time data pipelines.",
    },
    badges: [
      { label: "🇨🇲 Douala, Cameroon" },
      { label: "🎓 IUT d'Évry Val d'Essonne" },
      { label: "🏆 4 Coursera certifications", href: "/about#certifications" },
    ],
  },
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/abdou-njutapmvoui", icon: "linkedin" },
    { label: "GitLab", href: "https://gitlab.com/abdouchirac2024", icon: "gitlab" },
    { label: "Portfolio", href: "https://chirac-portfolio.vercel.app", icon: "globe" },
    { label: "Email", href: "mailto:abdouchirac411@gmail.com", icon: "mail" },
  ],
  featuredProject: {
    slug: "helpdigischool",
    title: "HelpDigiSchool",
    cardTitle: "HelpDigiSchool — school SaaS platform with OCR and analytics",
    description: "School SaaS platform with OCR and analytics",
    longDescription:
      "Microservices ecosystem (Spring Boot, Spring Cloud, Eureka) for multi-school management: OCR grade extraction (Tesseract.js), an automated scoring and report-card engine, and real-time decision-making dashboards.",
    period: "2025 – Apr. 2026",
    stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker", "Prometheus", "Grafana", "MinIO/S3"],
    url: "https://helpdigischool.com",
    featured: true,
    trustedBy: "Trusted by several schools",
    visitSite: "Visit website",
    viewProject: "View project",
  },
  projects: [
    {
      slug: "helpdigischool",
      title: "HelpDigiSchool",
      description: "School SaaS platform with OCR and analytics",
      longDescription:
        "Microservices ecosystem (Spring Boot, Spring Cloud, Eureka) for multi-school management: OCR grade extraction (Tesseract.js), an automated scoring and report-card engine, and real-time decision-making dashboards.",
      period: "2025 – Apr. 2026",
      stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker", "Prometheus", "Grafana", "MinIO/S3"],
      url: "https://helpdigischool.com",
      featured: true,
    },
    {
      slug: "multi-canal-services",
      title: "Multi Canal Services — Logistics ERP",
      description:
        "Orchestration of a cloud-native ERP ecosystem handling 500+ orders/day, with real-time pipelines for delivery tracking.",
      longDescription:
        "Modernization and deployment of a logistics and commercial management ERP on GCP via Docker. Asynchronous pipelines (Cloud Functions) automating delivery tracking and bidirectional stock synchronization. Overhaul of data access layers and Redis caching (-40% latency). Angular dashboards for business steering.",
      period: "May 2025 – May 2026",
      stack: ["Angular 19", "Laravel 11", "Node.js", "GCP Cloud Run", "GCP Functions", "Docker", "Redis"],
      url: "https://livraison-express.net",
    },
    {
      slug: "congres-adna",
      title: "Congrès ADNA",
      description:
        "Collaborative conference management platform, designed and modeled on a secure microservices architecture.",
      longDescription:
        "Design and modeling of the Congrès ADNA collaborative platform, with secured user data flows (JWT, role management) on a microservices architecture.",
      period: "June 2024 – May 2025",
      stack: ["React", "Node.js", "Laravel", "JWT"],
    },
    {
      slug: "africa-unity",
      title: "Africa Unity",
      description:
        "Collaborative platform for managing professional events, with a custom CMS and user directories.",
      longDescription:
        "Development of Africa Unity, a collaborative platform for managing professional events. Custom CMS with user directory management and permission control.",
      period: "June 2023 – Nov. 2023",
      stack: ["PHP", "CMS", "MySQL"],
      url: "https://africaunity.net",
    },
  ],
  latestProjects: {
    heading: "Latest projects",
    viewProject: "View project →",
    viewAll: (n) => `View all projects (${n})`,
  },
  experiences: [
    {
      company: "Multi Canal Services",
      role: "Full Stack Angular & Cloud Developer",
      date: "05/2025 – 05/2026",
      url: "https://livraison-express.net",
      location: "Douala, Cameroon",
      stack: ["Angular 19", "Laravel 11", "Node.js", "GCP", "Docker", "Redis"],
      bullets: [
        "Orchestration and deployment of the ERP ecosystem via Docker on GCP, resilient to 500+ orders/day.",
        "Asynchronous pipelines (GCP Cloud Functions) automating delivery tracking and stock synchronization.",
        "Overhaul of data access layers and Redis caching: -40% latency on critical queries.",
        "Centralized logging and monitoring of transactional flows to ensure billing data integrity.",
        "Angular business dashboards: KPIs and automated analytical reports.",
      ],
    },
    {
      company: "HelpDigiSchool",
      role: "Full Stack Developer — Data & SaaS",
      date: "2025 – 04/2026",
      url: "https://helpdigischool.com",
      location: "Douala, Cameroon",
      stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker"],
      bullets: [
        "Tesseract.js OCR module for grade extraction, with confidence scoring and pattern matching for data validation.",
        "Analytics and scoring engine: weighted averages, dynamic rankings, statistics by class and cycle.",
        "High-availability microservices architecture (Spring Cloud, Eureka, API Gateway), multi-tenant and secure.",
        "Interactive dashboards (Recharts) and bulk PDF/Excel export.",
        "Docker Compose orchestration with Prometheus/Grafana monitoring.",
      ],
    },
    {
      company: "DA Vinci IT Solutions",
      role: "Full Stack Microservices Developer",
      date: "06/2024 – 05/2025",
      location: "Douala, Cameroon",
      stack: ["React", "Node.js", "Laravel", "JWT"],
      bullets: [
        "Development of web applications on a microservices architecture.",
        "Securing and managing user data flows (JWT, role management).",
        "Design and modeling of the Congrès ADNA collaborative platform.",
      ],
    },
    {
      company: "ADAA",
      role: "Full Stack Developer & Tester",
      date: "12/2023 – 05/2024",
      url: "https://adaacertif.com",
      location: "Douala, Cameroon",
      bullets: [
        "Development of ADAA Learning, a collaborative e-learning platform.",
        "Administration and structuring of user data, functional and integration testing.",
      ],
    },
    {
      company: "GENO CONSULTING",
      role: "Full Stack Developer",
      date: "06/2023 – 11/2023",
      url: "https://africaunity.net",
      location: "Douala, Cameroon",
      bullets: [
        "Development of Africa Unity: a collaborative platform for managing professional events.",
        "Custom CMS with user directory management and permission control.",
      ],
    },
  ],
  experienceSection: { heading: "Experience", downloadCV: "Download CV" },
  education: [
    {
      degree: "Professional Bachelor's — IT Professions: Web Applications (MIAW)",
      school: "IUT d'Évry Val d'Essonne (Douala campus)",
      date: "2023 – 2024",
      mention: "Honors (Bien) · 15.23/20",
      detail: "Data modeling, Python, Relational databases, Work-study activities.",
    },
    {
      degree: "Higher Technician's Diploma — Computer Engineering, Software Engineering",
      school: "Institut ISTAMA, Douala",
      date: "2022 – 2023",
      mention: "Honors (Bien) · 14.60/20 · Ranked 23rd/700+ nationwide",
      detail: "Algorithms & data structures, Object-oriented programming, Computer systems.",
    },
    {
      degree: "Baccalaureate, Series D — Sciences",
      school: "Collège Bilingue FO KAMGA 2, Douala",
      date: "2018",
    },
  ],
  certifications: [
    {
      title: "Angular 17 Overview & Basics",
      issuer: "LearnQuest",
      platform: "Coursera",
      date: "August 12, 2026",
      verifyUrl: "https://coursera.org/verify/XHPX62YECTKV",
    },
    {
      title: "CI/CD for Software Developers",
      issuer: "Codio",
      platform: "Coursera",
      date: "August 7, 2026",
      verifyUrl: "https://coursera.org/verify/VXDWFB7OIZW4",
    },
    {
      title: "Building HTTP APIs with Spring",
      issuer: "Vanderbilt University",
      platform: "Coursera",
      date: "August 3, 2026",
      verifyUrl: "https://coursera.org/verify/QQKQ50RYXOPP",
    },
    {
      title: "Java Microservices with Spring Boot",
      issuer: "Edureka",
      platform: "Coursera",
      date: "July 29, 2026",
      verifyUrl: "https://coursera.org/verify/T72FRHQ9MPWW",
    },
  ],
  skills: [
    {
      category: "Data & Cloud",
      items: ["Python (Data Science)", "GCP Cloud Run", "Firebase", "Docker", "MinIO/S3", "Prometheus", "Grafana", "MySQL", "MongoDB", "Redis"],
    },
    {
      category: "Frontend",
      items: ["Angular 19", "React.js", "Next.js 15", "Vue.js 3", "TypeScript", "Tailwind CSS", "Recharts", "Tesseract.js (OCR)"],
    },
    {
      category: "Backend",
      items: ["Java 21", "Spring Boot", "Laravel (PHP 8+)", "Node.js", "Express.js", "REST API", "JWT", "Spring Cloud"],
    },
    {
      category: "DevOps & CI/CD",
      items: ["Docker", "Docker Compose", "Traefik", "GitLab CI", "GitHub Actions", "CI/CD pipelines"],
    },
  ],
  aboutPage: {
    intro1:
      "Full Stack developer with over 2 years of professional experience, specialized in deploying cloud-native applications (GCP, Docker) and production data processing. Based in Douala, Cameroon, I build real-time data pipelines, visualization interfaces, and microservices architectures.",
    intro2:
      "A graduate of a Professional Bachelor's degree in IT Professions: Web Applications from IUT d'Évry Val d'Essonne (Honors), I keep deepening my data science skills to connect software engineering with decision-making analysis.",
    sectionExperience: "Experience",
    sectionEducation: "Education",
    sectionCertifications: "Certifications",
    sectionSkills: "Skills",
  },
  projectsPage: {
    heading: "Projects",
    intro:
      "A selection of professional and entrepreneurial projects, from real-time data pipelines to microservices architectures.",
    filterAll: "All",
    noResults: "No project matches this filter.",
    visitSite: "Visit website",
  },
  contactPage: {
    heading: "Contact",
    intro:
      "Got a question, a project, or just want to say hi? Feel free to reach out directly by email or via one of the links below.",
  },
  footer: {
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
    copyright: "© 2026 Chirac Njutapmvoui. All rights reserved.",
  },
  site: {
    name: "Chirac Njutapmvoui",
    role: "Full Stack Developer · Data & Cloud",
    email: "abdouchirac411@gmail.com",
    location: "Douala, Cameroon",
  },
};

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr;
}
