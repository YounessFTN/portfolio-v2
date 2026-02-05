import {
  About,
  Blog,
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
  business: "Mintfull Agency",
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
    link: "/images/CV-Youness-Fatine-V2.pdf",
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
  title: `Portfolio de ${person.name}`,
  description: `Site portfolio présentant mon travail en tant que ${person.role}`,
  headline: <>Créer des expériences numériques exceptionnelles</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projet</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projet à la une
        </Text>
      </Row>
    ),
    href: "/work/iberic-x",
  },
  subline: (
    <>
      Salut, je suis {person.name},{" "}
      <Text as="span" size="xl" weight="strong">
        {person.role}
      </Text>{" "}
      en alternance chez{" "}
      <Text as="span" size="xl" weight="strong">
        {person.business}
      </Text>
      . Basé à Lyon, je conçois des interfaces modernes et des expériences
      utilisateur intuitives.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Découvrez ${person.name}, ${person.role} basé à Lyon`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/youness-fatine/entretien",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Étudiant en 3ᵉ année d’informatique, je souhaite intégrer une 4ᵉ année
        (Mastère) en tant que développeur full stack en alternance (2026/2027)
        afin de renforcer mes compétences et d’acquérir une expérience.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "Mintfull Agency",
        timeframe: "2025 - Aujourd'hui",
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
        company: "Freelance",
        timeframe: "2024 - Aujourd'hui",
        role: "Développeur Web",
        achievements: [
          <p>
            Création de sites web (Webflow, React, Next.js, Shopify selon les
            besoins clients).
          </p>,
          <p>
            Réalisation de maquettes UI/UX (charte graphique, Figma, design
            system, Mockups).
          </p>,
          <p>Automatisation d'outils tiers (n8n, cal.com, Tally, Stripe).</p>,
          <p>Acquisition clients : prospection, contenu organique, setting.</p>,
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
          <>
            React, Next.js, Vue.js, JavaScript, TypeScript, HTML, CSS, SCSS,
            Tailwind CSS, Bootstrap, React Native.
          </>
        ),
        tags: [
          { name: "React", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Back-end",
        description: (
          <>Node.js, PHP, Symfony, Python, Django, SQL, Prisma, API REST.</>
        ),
        tags: [{ name: "Node.js", icon: "javascript" }],
        images: [],
      },
      {
        title: "CMS & E-commerce",
        description: (
          <>WordPress, Webflow, Shopify, PrestaShop, Oxygen Builder.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Design & Prototypage",
        description: (
          <>
            Figma, Photoshop, Illustrator, Spline (3D), montage vidéo. Chartes
            graphiques, design systems, maquettes UX/UI.
          </>
        ),
        tags: [{ name: "Figma", icon: "figma" }],
        images: [],
      },
      {
        title: "DevOps & Outils",
        description: <>Docker, Git, GitHub, n8n, cal.com, Tally, Stripe.</>,
        tags: [{ name: "GitHub", icon: "github" }],
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
  title: `Projets – ${person.name}`,
  description: `Projets de design et développement par ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie photo – ${person.name}`,
  description: `Une collection de photos par ${person.name}`,
  images: [],
};

export { about, blog, gallery, home, newsletter, person, social, work };
