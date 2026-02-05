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
  business: "Freelance",
  role: "Développeur Web & Designer",
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
    link: "/images/CV-Youness-Fatine.pdf",
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
      basé à Lyon. Passionné par le front-end, je conçois des interfaces
      modernes et des expériences utilisateur intuitives.
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
        Né en Italie, j'ai grandi entre deux cultures avant de m'installer en
        France à l'âge de huit ans, où j'ai décroché mon brevet, mon bac et
        l'Esabac. Passionné par le sport — notamment le basket et le surf — j'ai
        découvert en terminale une nouvelle passion : l'informatique, et plus
        spécifiquement le développement front-end. C'est là que j'ai trouvé mon
        terrain de jeu, explorant les aspects créatifs et innovants du
        développement web.
      </>
    ),
  },
  work: {
    display: false,
    title: "Expérience professionnelle",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "WebTech Institute",
        description: (
          <>
            Formation en développement web et technologies digitales. Projets
            pratiques incluant du développement front-end, back-end et IoT.
          </>
        ),
      },
      {
        name: "Lycée — Bac & Esabac",
        description: (
          <>
            Obtention du Baccalauréat et de l'Esabac (double diplôme
            franco-italien).
          </>
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
            Développement d'interfaces modernes et réactives avec React,
            Next.js, Tailwind CSS et SCSS.
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
          <>
            Construction d'API robustes et évolutives avec Node.js, PHP et SQL.
          </>
        ),
        tags: [{ name: "Node.js", icon: "javascript" }],
        images: [],
      },
      {
        title: "Design & Prototypage",
        description: (
          <>
            Conception de maquettes UX/UI, chartes graphiques et prototypes
            interactifs avec Figma et intégration d'éléments 3D.
          </>
        ),
        tags: [{ name: "Figma", icon: "figma" }],
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
