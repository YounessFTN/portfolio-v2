import {
  About,
  BasePageConfig,
  Blog,
  Contact,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Youness",
  lastName: "Fatine",
  name: `Youness Fatine`,
  business: "Freelance",
  role: "Développeur Full Stack",
  avatar: "/images/avatar.webp",
  email: "youness@fatine.fr",
  location: "Europe/Paris",
  languages: ["Français", "Italien", "Anglais"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "Resume",
    icon: "resume",
    link: "/cv",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/YounessFTN",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/youness-fatine-developpeur-lyon/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Développeur full stack freelance à Lyon | ${person.name}`,
  description: `Développeur full stack freelance à Lyon, je conçois votre SaaS, MVP ou application web sur mesure (Next.js, Node.js, Prisma, Stripe). Devis détaillé sous 48 h.`,
  headline: (
    <>Votre SaaS, de l'idée à la mise en ligne.</>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projet à la une</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Poukaves : app full stack Next.js & Prisma
        </Text>
      </Row>
    ),
    href: "/work/poukaves",
  },
  subline: (
    <>
      Salut, je suis {person.name},{" "}
      <Text as="span" size="xl" weight="strong">
        développeur full stack freelance
      </Text>{" "}
      basé à Lyon. Je conçois des SaaS, des MVP et des applications web métier
      sur mesure : interface, API, base de données, paiements et mise en
      production. Vous validez à chaque étape.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}, développeur full stack freelance`,
  description: `${person.name}, développeur full stack freelance à Lyon depuis 2024 et étudiant en Mastère Ingénierie du Web (ESGI). Parcours, stack technique et expériences.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/youness-fatine/rendez-vous",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Développeur full stack freelance basé à Lyon, j'accompagne depuis 2024
        entrepreneurs, indépendants et PME dans la création de SaaS, de MVP et
        d'applications web sur mesure : de la maquette Figma à la mise en
        production, paiements Stripe et automatisations compris.
        <br />
        <br />
        En parallèle, je poursuis un Mastère Ingénierie du Web à l'ESGI
        (2026-2028) : je travaille chaque semaine sur des projets en production,
        ce qui me garde à jour sur Next.js, Node.js, Docker et les bases SQL.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2024 - Aujourd'hui",
        role: "Développeur full stack (SaaS, applications web, e-commerce)",
        achievements: [
          <p>
            Sites et applications web sur mesure : React, Next.js, Webflow ou
            Shopify selon le besoin du client.
          </p>,
          <p>
            Intégration de paiements et d'abonnements Stripe, prise de
            rendez-vous (cal.com), formulaires (Tally) et automatisations n8n.
          </p>,
          <p>
            Conception UX/UI sur Figma (charte, design system) avant le
            développement, pour valider le parcours avant d'écrire du code.
          </p>,
        ],
        images: [],
      },
      {
        company: "Mintfull Agency",
        timeframe: "2025 - 2026",
        role: "Développeur Web (alternance + stage)",
        achievements: [
          <p>
            Création de sites WordPress et Symfony (Bootstrap, SCSS, PHP,
            Oxygen, JavaScript).
          </p>,
          <p>
            Développement de modules et de sites e-commerce sous PrestaShop
            (Symfony, PHP).
          </p>,
          <p>Conception de maquettes UI/UX sur Figma.</p>,
          <p>Compétences supplémentaires : Docker, SQL, Time Tracking.</p>,
        ],
        images: [],
      },
      {
        company: "Les 1001 CLICKS de MIGUEL",
        timeframe: "2024 (2 mois)",
        role: "Stage développeur front-end",
        achievements: [
          <p>Réalisation d'une maquette Figma.</p>,
          <p>
            Développement de la partie front-end de sites avec HTML, CSS et
            JavaScript.
          </p>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "ESGI — M1 Mastère Ingénierie du Web (2026-2028)",
        description: (
          <>
            Titre RNCP niv.7 : « Expert en ingénierie informatique ».
            Développeur full stack en alternance.
          </>
        ),
      },
      {
        name: "WebTech Institute — B3 Bachelor Informatique (2023-2026)",
        description: (
          <>
            Titre RNCP niv.6 : « Concepteur développeur d'applications ».
            Next.js, Node.js, React, Vue.js, Python, Django, PHP, Symfony, SQL,
            Git, React Native. Photoshop, Illustrator, montage vidéo, création
            3D (Spline).
          </>
        ),
      },
      {
        name: "Universitat Pompeu Fabra — Barcelone (2024)",
        description: (
          <>Apprentissage en anglais : Node.js, React, Tailwind CSS, GitHub.</>
        ),
      },
      {
        name: "Dublin City University — Dublin (2023)",
        description: (
          <>Apprentissage en anglais : HTML, CSS, JavaScript, GitHub.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Front-end",
        description: (
          <>Développement d'interfaces modernes, réactives et performantes.</>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Vue.js", icon: "vuejs" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "HTML5", icon: "html5" },
          { name: "CSS3", icon: "css3" },
          { name: "SCSS", icon: "sass" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
          { name: "Bootstrap", icon: "bootstrap" },
        ],
        images: [],
      },
      {
        title: "Back-end",
        description: <>Construction d'API robustes et évolutives.</>,
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "PHP", icon: "php" },
          { name: "Symfony", icon: "symfony" },
          { name: "Python", icon: "python" },
          { name: "Django", icon: "django" },
          { name: "Java", icon: "java" },
          { name: "Spring Boot", icon: "springboot" },
          { name: "SQL", icon: "mysql" },
          { name: "Prisma", icon: "prisma" },
        ],
        images: [],
      },
      {
        title: "CMS & E-commerce",
        description: <>Création de sites vitrines et boutiques en ligne.</>,
        tags: [
          { name: "WordPress", icon: "wordpress" },
          { name: "Webflow", icon: "webflow" },
          { name: "Shopify", icon: "shopify" },
          { name: "PrestaShop", icon: "prestashop" },
        ],
        images: [],
      },
      {
        title: "Design & Prototypage",
        description: (
          <>Conception de maquettes UX/UI, chartes graphiques et création 3D.</>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Photoshop", icon: "photoshop" },
          { name: "Illustrator", icon: "illustrator" },
        ],
        images: [],
      },
      {
        title: "DevOps & Outils",
        description: <>Déploiement, versioning et automatisation.</>,
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Stripe", icon: "stripe" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Articles sur le design et la tech",
  description: `Découvrez les dernières publications de ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets full stack & applications web | ${person.name}`,
  description: `Projets full stack de ${person.name} : application Next.js et Prisma, e-commerce React avec Stripe, objets connectés, interfaces 3D. Contexte, rôle et choix techniques.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie photo – ${person.name}`,
  description: `Une collection de photos par ${person.name}`,
  images: [],
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact & devis – Projet SaaS ou MVP | ${person.name}`,
  description: `Un projet de SaaS, de MVP ou d'application web ? Décrivez-le en 2 minutes : appel découverte d'une heure offert et devis détaillé sous 48 h. Basé à Lyon.`,
  headline: <>Lançons votre logiciel SaaS</>,
  subline: (
    <>
      De l'idée au produit en ligne : je conçois, développe et mets en
      production des SaaS et applications web sur mesure. Décrivez votre projet,
      je reviens vers vous avec une première estimation.
    </>
  ),
  calendar: {
    display: true,
    link: "https://cal.com/youness-fatine/rendez-vous",
  },
  responseTime: "Réponse sous 24 h ouvrées",
  projectTypes: [
    "SaaS complet",
    "MVP / prototype",
    "Application web métier",
    "Refonte / évolution",
    "Automatisation & intégrations",
    "Autre",
  ],
  budgets: [
    "Moins de 3 000 €",
    "3 000 – 8 000 €",
    "8 000 – 20 000 €",
    "Plus de 20 000 €",
    "Je ne sais pas encore",
  ],
  timelines: ["Dès que possible", "Sous 1 à 3 mois", "Plus tard / exploratoire"],
  process: [
    {
      title: "Appel découverte",
      description: (
        <>Une heure pour comprendre votre besoin, vos utilisateurs et vos contraintes.</>
      ),
    },
    {
      title: "Cadrage & devis",
      description: (
        <>Périmètre du MVP, choix techniques, planning et devis détaillé sous 48 h.</>
      ),
    },
    {
      title: "Développement itératif",
      description: (
        <>Livraisons régulières sur un environnement de test : vous validez à chaque étape.</>
      ),
    },
    {
      title: "Mise en ligne & suivi",
      description: (
        <>Déploiement, paiements, monitoring, puis maintenance et nouvelles fonctionnalités.</>
      ),
    },
  ],
};

const saas: BasePageConfig = {
  path: "/services/creation-saas",
  label: "Création SaaS",
  title: `Création de logiciel SaaS sur mesure à Lyon | ${person.name}`,
  description: `Développeur freelance à Lyon, je crée votre logiciel SaaS sur mesure : cadrage, MVP, abonnements Stripe, comptes utilisateurs, mise en ligne et maintenance.`,
};

// Configuration du CV - Modifier le chemin ici pour changer le fichier affiché
const cv = {
  path: "/cv",
  label: "CV",
  title: `CV de ${person.name} - ${person.role}`,
  description: `Consultez et téléchargez le CV de ${person.name}, ${person.role}. Découvrez mon parcours, mes compétences techniques et mes expériences professionnelles.`,
  // Chemin vers le fichier PDF (relatif à /public)
  file: "/images/CV-Youness-Fatine.pdf",
  // Nom du fichier lors du téléchargement
  downloadName: "CV-Youness-Fatine.pdf",
};

export {
  about,
  blog,
  contact,
  cv,
  gallery,
  home,
  newsletter,
  person,
  saas,
  social,
  work,
};
