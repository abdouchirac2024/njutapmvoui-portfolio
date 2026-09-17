import type { Locale } from "@/lib/i18n";

export type Social = {
  label: string;
  href: string;
  icon: "linkedin" | "gitlab" | "github" | "globe" | "mail";
};

export type ProjectVisibility = "public" | "private";

export type Project = {
  slug: string;
  title: string;
  period: string;
  description: string;
  longDescription: string;
  stack: string[];
  url?: string;
  visibility: ProjectVisibility;
  codeUrl?: string;
  achievements?: string[];
  featured?: boolean;
};

export type RoleType = "employee" | "freelance" | "venture";

export type Experience = {
  company: string;
  role: string;
  roleType: RoleType;
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
    articles: { title: string; description: string };
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
  gallery: { src: string; alt: string }[];
  featuredProject: Project & { cardTitle: string; trustedBy: string; visitSite: string; viewProject: string };
  projects: Project[];
  latestProjects: { heading: string; viewProject: string; viewAll: (n: number) => string };
  experiences: Experience[];
  experienceSection: {
    heading: string;
    downloadCV: string;
    previewCV: string;
    closePreview: string;
    roleTypeLabels: Record<RoleType, string>;
  };
  education: Education[];
  certifications: Certification[];
  skills: { category: string; items: { name: string; usage: string }[] }[];
  aboutPage: {
    intro1: string;
    intro2: string;
    sectionExperience: string;
    sectionEducation: string;
    sectionCertifications: string;
    sectionSkills: string;
  };
  projectsPage: {
    heading: string;
    intro: string;
    filterAll: string;
    noResults: string;
    visitSite: string;
    viewCode: string;
    privateBadge: string;
    privateBadgeDetailed: string;
  };
  articlesPage: {
    heading: string;
    intro: string;
    filterAll: string;
    noResults: string;
    readMore: string;
  };
  contactPage: { heading: string; intro: string; phoneLabel: string; whatsappCta: string };
  footer: { links: { label: string; href: string }[]; copyright: string };
  site: { name: string; role: string; email: string; phone: string; whatsapp: string; location: string };
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
    articles: {
      title: "Articles — Chirac Njutapmvoui",
      description: "Notes techniques de Chirac Njutapmvoui sur l'architecture, le backend et le cloud.",
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
    { label: "Articles", href: "/articles" },
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
        "Je suis un développeur Full Stack originaire du Cameroun, et je développe des ",
      linkText: "projets open source",
      linkHref: "/projects",
      after:
        ". Je conçois des architectures qui tiennent la charge en production — pas seulement en démo.",
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
    { label: "GitHub", href: "https://github.com/abdouchirac2024", icon: "github" },
    { label: "Email", href: "mailto:abdouchirac411@gmail.com", icon: "mail" },
  ],
  gallery: [
    { src: "/image_bureau.png", alt: "Chirac au travail, sur un projet" },
    { src: "/parchemin.png", alt: "Diplôme de Chirac" },
    { src: "/bibliotheque.png", alt: "Chirac en session de travail à la bibliothèque" },
  ],
  featuredProject: {
    slug: "helpdigischool",
    title: "HelpDigiSchool",
    cardTitle: "HelpDigiSchool — plateforme SaaS scolaire avec OCR et analytics",
    description:
        "SaaS de gestion scolaire multi-établissements pour administrations, enseignants, élèves et parents : bulletins automatisés par OCR, suivi des notes en temps réel.",
    longDescription:
      "Écosystème microservices (Spring Boot, Spring Cloud, Eureka) pour la gestion scolaire multi-établissements : extraction OCR des notes (Tesseract.js), moteur de scoring et bulletins automatisés, dashboards décisionnels en temps réel.",
    period: "2025 – Avr. 2026",
    stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker", "Prometheus", "Grafana", "MinIO/S3"],
    url: "https://helpdigischool.com",
    visibility: "private",
    featured: true,
    trustedBy: "Approuvé par plusieurs établissements scolaires",
    visitSite: "Visiter le site",
    viewProject: "Voir le projet",
  },
  projects: [
    {
      slug: "helpdigischool",
      title: "HelpDigiSchool",
      description:
        "SaaS de gestion scolaire multi-établissements pour administrations, enseignants, élèves et parents : bulletins automatisés par OCR, suivi des notes en temps réel.",
      longDescription:
        "Écosystème microservices (Spring Boot, Spring Cloud, Eureka) pour la gestion scolaire multi-établissements : extraction OCR des notes (Tesseract.js), moteur de scoring et bulletins automatisés, dashboards décisionnels en temps réel.",
      period: "2025 – Avr. 2026",
      stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker", "Prometheus", "Grafana", "MinIO/S3"],
      url: "https://helpdigischool.com",
      visibility: "private",
      featured: true,
      achievements: [
        "Architecture microservices en 5 services indépendants (frontend Next.js, API Gateway Spring Cloud Gateway, 2 services métier Spring Boot, service discovery Eureka), déployée sur 2 serveurs avec load balancing, circuit breakers et rate limiting.",
        "Isolation multi-tenant entre établissements scolaires sur la même infrastructure, via propagation de contexte (JWT + Feign) à travers les appels inter-services.",
        "Diagnostic et résolution d'un incident de production : le chargement des notes d'une classe de 170 élèves est passé de plus de 30 secondes (avec timeout) à moins de 3 secondes, en éliminant des requêtes N+1 et en introduisant du cache ciblé.",
        "Sous un test de charge réel, identification d'un épuisement du pool de connexions Redis provoquant des erreurs 503 ; correction vérifiée en production avec un taux d'échec ramené de 75% à moins de 10% sous rafale.",
        "Traitement asynchrone (Spring @Async) pour qu'une modification de note ne bloque plus la réponse HTTP pendant la régénération des bulletins de toute une classe.",
        "Observabilité complète sur l'ensemble des services (Prometheus, Grafana, Loki) pour les métriques et les logs centralisés.",
        "Migrations de base de données idempotentes (Flyway), permettant des déploiements sans coupure sur plusieurs répliques en production.",
      ],
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
      visibility: "private",
      achievements: [
        "Réduction de la facture d'infrastructure cloud de 1000€/mois à moins de 200€/mois (-80%), en refondant l'architecture et le mode d'hébergement.",
        "Découplage du monolithe Laravel : migration du frontend vers Angular consommant une API REST Laravel, réduisant la latence perçue et séparant les responsabilités.",
        "Migration de l'hébergement de Compute Engine (VM à facturation fixe) vers Cloud Run (conteneurs Docker, facturation à l'usage).",
        "Automatisation de l'arrêt/redémarrage programmé (Cloud Functions Node.js) des services restés sur VM durant les heures creuses (22h–6h).",
        "Passage au lazy loading des appels API, déclenchés par l'action utilisateur plutôt qu'au chargement systématique de la vue, réduisant les coûts de sortie réseau.",
        "Routine de purge automatique de Firestore (Cloud Functions) pour éviter l'explosion des coûts de stockage NoSQL.",
        "Pipeline CI/CD standardisé : conteneurisation Docker, gestion des images via Artifact Registry, déploiement automatisé sur Cloud Run.",
      ],
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
      visibility: "private",
      achievements: ["Gestion fluide de plus de 500 participants sur la plateforme, sans interruption de service."],
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
      visibility: "private",
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
      roleType: "employee",
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
      roleType: "venture",
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
      roleType: "employee",
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
      roleType: "employee",
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
      roleType: "employee",
      date: "06/2023 – 11/2023",
      url: "https://africaunity.net",
      location: "Douala, Cameroun",
      bullets: [
        "Développement d'Africa Unity : plateforme collaborative de gestion d'événements professionnels.",
        "CMS personnalisé avec gestion d'annuaires utilisateurs et contrôle des permissions.",
      ],
    },
  ],
  experienceSection: {
    heading: "Expérience",
    downloadCV: "Télécharger le CV",
    previewCV: "Aperçu du CV",
    closePreview: "Fermer l'aperçu",
    roleTypeLabels: { employee: "Salarié", freelance: "Freelance", venture: "Projet entrepreneurial" },
  },
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
      category: "Backend",
      items: [
        { name: "Java 21 & Spring Boot", usage: "architecture microservices en production (HelpDigiSchool)" },
        { name: "Spring Cloud (Gateway, Eureka)", usage: "API gateway et service discovery" },
        { name: "Laravel (PHP 8+)", usage: "API REST pour l'ERP logistique (Multi Canal Services)" },
        { name: "Node.js / Express.js", usage: "services API légers" },
        { name: "JWT & Feign", usage: "authentification et propagation de contexte multi-tenant" },
        { name: "Python", usage: "scripts de traitement de données" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "Angular 19", usage: "dashboards de pilotage métier en production" },
        { name: "Next.js 15 / React.js", usage: "ce portfolio et interfaces SaaS" },
        { name: "Vue.js 3", usage: "interfaces pour plateformes collaboratives" },
        { name: "TypeScript", usage: "utilisé sur l'ensemble des projets frontend" },
        { name: "Tailwind CSS", usage: "système de design de tous les projets récents" },
        { name: "Recharts", usage: "visualisation de données (dashboards analytiques)" },
        { name: "Tesseract.js (OCR)", usage: "extraction OCR des notes (HelpDigiSchool)" },
      ],
    },
    {
      category: "Infra & DevOps",
      items: [
        { name: "Docker / Docker Compose", usage: "conteneurisation de tous les services en production" },
        { name: "GCP Cloud Run, Firebase", usage: "hébergement et déploiement cloud" },
        { name: "Prometheus / Grafana / Loki", usage: "observabilité — métriques et logs centralisés (HelpDigiSchool)" },
        { name: "GitLab CI / GitHub Actions", usage: "pipelines CI/CD" },
        { name: "Traefik", usage: "reverse proxy et load balancing" },
      ],
    },
    {
      category: "Bases de données",
      items: [
        { name: "MySQL / MongoDB", usage: "bases relationnelles et documentaires en production" },
        { name: "Redis", usage: "cache applicatif — diagnostic et correction d'un incident de pool de connexions" },
        { name: "MinIO/S3", usage: "stockage d'objets pour fichiers et exports" },
        { name: "Flyway", usage: "migrations idempotentes, déploiements sans coupure" },
      ],
    },
  ],
  aboutPage: {
    intro1:
      "J'ai ramené le chargement des notes d'une classe de 170 élèves de plus de 30 secondes (avec timeout) à moins de 3 secondes, et fait passer le taux d'échec d'un service sous forte charge de 75% à moins de 10%. C'est le genre de problème concret que je résous au quotidien : je conçois et j'opère des architectures microservices en production, pas seulement des maquettes.",
    intro2:
      "Développeur Full Stack depuis près de 3 ans, formé à l'IUT d'Évry Val d'Essonne (Licence Professionnelle Métiers de l'Informatique, mention Bien), basé à Douala au Cameroun. J'ai architecturé et j'opère HelpDigiSchool, un SaaS de gestion scolaire multi-établissements, et modernisé un ERP logistique chez Multi Canal Services en réduisant de 40% la latence de ses requêtes critiques.",
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
    viewCode: "Voir le code",
    privateBadge: "🔒 Projet privé — code sous NDA",
    privateBadgeDetailed: "🔒 Code source privé (NDA) — architecture et résultats détaillés ci-dessous",
  },
  articlesPage: {
    heading: "Articles",
    intro: "Notes techniques sur l'architecture, le backend et le cloud — ce que j'apprends en construisant en production.",
    filterAll: "Tous",
    noResults: "Aucun article pour ce filtre.",
    readMore: "Lire l'article →",
  },
  contactPage: {
    heading: "Contact",
    intro:
      "Une question, un projet, ou simplement envie d'échanger ? N'hésitez pas à me contacter directement par e-mail ou via l'un des liens ci-dessous.",
    phoneLabel: "Téléphone",
    whatsappCta: "Discuter sur WhatsApp",
  },
  footer: {
    links: [
      { label: "À propos", href: "/about" },
      { label: "Projets", href: "/projects" },
      { label: "Articles", href: "/articles" },
      { label: "Contact", href: "/contact" },
    ],
    copyright: "© 2026 Chirac Njutapmvoui. Tous droits réservés.",
  },
  site: {
    name: "Chirac Njutapmvoui",
    role: "Développeur Full Stack · Data & Cloud",
    email: "abdouchirac411@gmail.com",
    phone: "+237 658 488 485",
    whatsapp: "https://wa.me/237658488485",
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
    articles: {
      title: "Articles — Chirac Njutapmvoui",
      description: "Chirac Njutapmvoui's technical notes on architecture, backend, and cloud.",
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
    { label: "Articles", href: "/articles" },
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
      before: "I'm a Full Stack developer from Cameroon, and I build ",
      linkText: "open source projects",
      linkHref: "/projects",
      after:
        ". I design architectures that hold up under real production load — not just in a demo.",
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
    { label: "GitHub", href: "https://github.com/abdouchirac2024", icon: "github" },
    { label: "Email", href: "mailto:abdouchirac411@gmail.com", icon: "mail" },
  ],
  gallery: [
    { src: "/image_bureau.png", alt: "Chirac at work on a project" },
    { src: "/parchemin.png", alt: "Chirac's diploma" },
    { src: "/bibliotheque.png", alt: "Chirac working at the library" },
  ],
  featuredProject: {
    slug: "helpdigischool",
    title: "HelpDigiSchool",
    cardTitle: "HelpDigiSchool — school SaaS platform with OCR and analytics",
    description:
        "Multi-school management SaaS for administrations, teachers, students and parents: OCR-automated report cards and real-time grade tracking.",
    longDescription:
      "Microservices ecosystem (Spring Boot, Spring Cloud, Eureka) for multi-school management: OCR grade extraction (Tesseract.js), an automated scoring and report-card engine, and real-time decision-making dashboards.",
    period: "2025 – Apr. 2026",
    stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker", "Prometheus", "Grafana", "MinIO/S3"],
    url: "https://helpdigischool.com",
    visibility: "private",
    featured: true,
    trustedBy: "Trusted by several schools",
    visitSite: "Visit website",
    viewProject: "View project",
  },
  projects: [
    {
      slug: "helpdigischool",
      title: "HelpDigiSchool",
      description:
        "Multi-school management SaaS for administrations, teachers, students and parents: OCR-automated report cards and real-time grade tracking.",
      longDescription:
        "Microservices ecosystem (Spring Boot, Spring Cloud, Eureka) for multi-school management: OCR grade extraction (Tesseract.js), an automated scoring and report-card engine, and real-time decision-making dashboards.",
      period: "2025 – Apr. 2026",
      stack: ["Java 21", "Spring Boot", "Spring Cloud", "Next.js 15", "MySQL", "Redis", "Docker", "Prometheus", "Grafana", "MinIO/S3"],
      url: "https://helpdigischool.com",
      visibility: "private",
      featured: true,
      achievements: [
        "Microservices architecture split into 5 independent services (Next.js frontend, Spring Cloud Gateway API gateway, 2 Spring Boot business services, Eureka service discovery), deployed across 2 servers with load balancing, circuit breakers, and rate limiting.",
        "Multi-tenant isolation between schools sharing the same infrastructure, via context propagation (JWT + Feign) across inter-service calls.",
        "Diagnosed and fixed a production incident: grade loading for a 170-student class dropped from 30+ seconds (timing out) to under 3 seconds, by eliminating N+1 queries and introducing targeted caching.",
        "Under a real load test, identified a Redis connection pool exhaustion causing 503 errors; the fix was verified in production, cutting the failure rate from 75% to under 10% under burst traffic.",
        "Asynchronous processing (Spring @Async) so a single grade edit no longer blocks the HTTP response while report cards regenerate for an entire class.",
        "Full observability across all services (Prometheus, Grafana, Loki) for centralized metrics and logs.",
        "Idempotent database migrations (Flyway), enabling zero-downtime deployments across multiple production replicas.",
      ],
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
      visibility: "private",
      achievements: [
        "Cut cloud infrastructure costs from €1,000/month to under €200/month (-80%) by redesigning the architecture and hosting model.",
        "Decoupled the Laravel monolith: migrated the frontend to Angular consuming a Laravel REST API, reducing perceived latency and separating concerns.",
        "Migrated hosting from Compute Engine (fixed-cost VM) to Cloud Run (Docker containers, pay-as-you-go billing).",
        "Automated scheduled start/stop (Node.js Cloud Functions) for services remaining on VMs during off-peak hours (10pm–6am).",
        "Switched API calls to lazy loading triggered by user action instead of loading on every view, cutting network egress costs.",
        "Set up an automated Firestore purge routine (Cloud Functions) to prevent NoSQL storage costs from ballooning.",
        "Standardized CI/CD pipeline: Docker containerization, image management via Artifact Registry, automated deployment to Cloud Run.",
      ],
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
      visibility: "private",
      achievements: ["Smooth management of 500+ participants on the platform, with no service interruption."],
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
      visibility: "private",
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
      roleType: "employee",
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
      roleType: "venture",
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
      roleType: "employee",
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
      roleType: "employee",
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
      roleType: "employee",
      date: "06/2023 – 11/2023",
      url: "https://africaunity.net",
      location: "Douala, Cameroon",
      bullets: [
        "Development of Africa Unity: a collaborative platform for managing professional events.",
        "Custom CMS with user directory management and permission control.",
      ],
    },
  ],
  experienceSection: {
    heading: "Experience",
    downloadCV: "Download CV",
    previewCV: "Preview CV",
    closePreview: "Close preview",
    roleTypeLabels: { employee: "Employee", freelance: "Freelance", venture: "Personal venture" },
  },
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
      category: "Backend",
      items: [
        { name: "Java 21 & Spring Boot", usage: "microservices architecture in production (HelpDigiSchool)" },
        { name: "Spring Cloud (Gateway, Eureka)", usage: "API gateway and service discovery" },
        { name: "Laravel (PHP 8+)", usage: "REST API for the logistics ERP (Multi Canal Services)" },
        { name: "Node.js / Express.js", usage: "lightweight API services" },
        { name: "JWT & Feign", usage: "authentication and multi-tenant context propagation" },
        { name: "Python", usage: "data-processing scripts" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "Angular 19", usage: "business dashboards in production" },
        { name: "Next.js 15 / React.js", usage: "this portfolio and SaaS interfaces" },
        { name: "Vue.js 3", usage: "interfaces for collaborative platforms" },
        { name: "TypeScript", usage: "used across all frontend projects" },
        { name: "Tailwind CSS", usage: "design system for every recent project" },
        { name: "Recharts", usage: "data visualization (analytics dashboards)" },
        { name: "Tesseract.js (OCR)", usage: "OCR grade extraction (HelpDigiSchool)" },
      ],
    },
    {
      category: "Infra & DevOps",
      items: [
        { name: "Docker / Docker Compose", usage: "containerization of every production service" },
        { name: "GCP Cloud Run, Firebase", usage: "cloud hosting and deployment" },
        { name: "Prometheus / Grafana / Loki", usage: "observability — centralized metrics and logs (HelpDigiSchool)" },
        { name: "GitLab CI / GitHub Actions", usage: "CI/CD pipelines" },
        { name: "Traefik", usage: "reverse proxy and load balancing" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL / MongoDB", usage: "relational and document stores in production" },
        { name: "Redis", usage: "application cache — diagnosed and fixed a connection pool incident" },
        { name: "MinIO/S3", usage: "object storage for files and exports" },
        { name: "Flyway", usage: "idempotent migrations, zero-downtime deployments" },
      ],
    },
  ],
  aboutPage: {
    intro1:
      "I brought grade-loading for a 170-student class from over 30 seconds (timing out) down to under 3 seconds, and cut a service's failure rate under heavy load from 75% to under 10%. That's the kind of concrete problem I solve day to day: I design and operate production microservices architectures, not just prototypes.",
    intro2:
      "Full Stack developer for nearly 3 years, trained at IUT d'Évry Val d'Essonne (Professional Bachelor's degree in IT Professions, Honors), based in Douala, Cameroon. I architected and operate HelpDigiSchool, a multi-tenant school management SaaS, and modernized a logistics ERP at Multi Canal Services, cutting critical query latency by 40%.",
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
    viewCode: "View code",
    privateBadge: "🔒 Private project — code under NDA",
    privateBadgeDetailed: "🔒 Private source code (NDA) — architecture and results detailed below",
  },
  articlesPage: {
    heading: "Articles",
    intro: "Technical notes on architecture, backend, and cloud — lessons learned building in production.",
    filterAll: "All",
    noResults: "No article matches this filter.",
    readMore: "Read the article →",
  },
  contactPage: {
    heading: "Contact",
    intro:
      "Got a question, a project, or just want to say hi? Feel free to reach out directly by email or via one of the links below.",
    phoneLabel: "Phone",
    whatsappCta: "Chat on WhatsApp",
  },
  footer: {
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Articles", href: "/articles" },
      { label: "Contact", href: "/contact" },
    ],
    copyright: "© 2026 Chirac Njutapmvoui. All rights reserved.",
  },
  site: {
    name: "Chirac Njutapmvoui",
    role: "Full Stack Developer · Data & Cloud",
    email: "abdouchirac411@gmail.com",
    phone: "+237 658 488 485",
    whatsapp: "https://wa.me/237658488485",
    location: "Douala, Cameroon",
  },
};

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr;
}
