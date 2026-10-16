import { baseURL, person } from "@/resources";

export type Node = Record<string, unknown>;

const abs = (path = "/") => `${baseURL}${path}`;

export const ids = {
  person: `${baseURL}/#person`,
  service: `${baseURL}/#service`,
  website: `${baseURL}/#website`,
};

const sameAs = [
  "https://github.com/YounessFTN",
  "https://www.linkedin.com/in/youness-fatine-developpeur-lyon/",
  // ajouter ici Malt / Codeur / Comet, etc. si un profil public existe
];

const address = {
  "@type": "PostalAddress",
  addressLocality: "Lyon",
  addressRegion: "Auvergne-Rhône-Alpes",
  addressCountry: "FR",
};

const knowsAbout = [
  "Développement de logiciels SaaS",
  "Développement full stack",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Prisma",
  "SQL",
  "API REST",
  "Symfony",
  "PHP",
  "Stripe",
  "Docker",
  "UI/UX design",
];

const serviceDescription =
  "Conception, développement et mise en production de logiciels SaaS, MVP et applications web sur mesure, de l'idée au produit en ligne, pour clients à Lyon et partout en France.";

const offer = (name: string, description: string): Node => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@id": ids.service },
    areaServed: { "@type": "Country", name: "France" },
  },
});

export const siteNodes: Node[] = [
  {
    "@type": "Person",
    "@id": ids.person,
    name: person.name,
    givenName: person.firstName,
    familyName: person.lastName,
    url: abs("/"),
    mainEntityOfPage: abs("/about"),
    image: { "@type": "ImageObject", url: abs(person.avatar) },
    jobTitle: "Développeur Full Stack freelance",
    description:
      "Développeur full stack freelance basé à Lyon. Je conçois et développe des logiciels SaaS, MVP et applications web sur mesure (Next.js, Node.js, SQL).",
    email: person.email,
    address,
    homeLocation: { "@type": "Place", address },
    knowsLanguage: ["fr", "it", "en"],
    knowsAbout,
    alumniOf: [
      // à confirmer : diplômes obtenus
      { "@type": "EducationalOrganization", name: "WebTech Institute" },
      { "@type": "CollegeOrUniversity", name: "Universitat Pompeu Fabra" },
      { "@type": "CollegeOrUniversity", name: "Dublin City University" },
    ],
    sameAs,
  },
  {
    "@type": "ProfessionalService",
    "@id": ids.service,
    name: "Youness Fatine - Création de logiciels SaaS sur mesure",
    alternateName: "Youness Fatine, développeur full stack freelance à Lyon",
    url: abs("/"),
    image: abs(person.avatar),
    // logo : ajouter quand un vrai fichier existe, ex. "logo": abs("/images/logo.png"). Ne jamais émettre "".
    description: serviceDescription,
    founder: { "@id": ids.person },
    email: person.email,
    address,
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
      { "@type": "Country", name: "France" },
    ],
    availableLanguage: ["fr", "en", "it"],
    knowsAbout,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: person.email,
      url: abs("/contact"),
      availableLanguage: ["fr", "en", "it"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de développement",
      itemListElement: [
        offer("SaaS complet", "Conception et développement d'un logiciel SaaS de bout en bout."),
        offer("MVP / prototype", "Lancement rapide d'un MVP pour valider un produit."),
        offer("Application web métier", "Applications web sur mesure pour des processus métier."),
        offer("Refonte / évolution", "Refonte et évolution d'applications web existantes."),
        offer("Automatisation & intégrations", "Automatisation d'outils tiers et intégrations d'API (Stripe, n8n, cal.com)."),
      ],
    },
    // priceRange : volontairement omis. Les tranches de budget du formulaire ne sont pas des tarifs publiés.
    // Si tu veux publier un ordre de grandeur : priceRange: "€€€" (à décider, pas d'invention).
    sameAs,
  },
  {
    "@type": "WebSite",
    "@id": ids.website,
    url: abs("/"),
    name: "Youness Fatine - Développeur Full Stack & SaaS à Lyon",
    inLanguage: "fr-FR",
    publisher: { "@id": ids.person },
  },
];

export const breadcrumb = (items: { name: string; path: string }[]): Node => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const webPage = (o: {
  path: string;
  name: string;
  description: string;
  type?: string; // WebPage | ProfilePage | ContactPage | CollectionPage
  image?: string;
  extra?: Node;
}): Node => ({
  "@type": o.type ?? "WebPage",
  "@id": `${abs(o.path)}#webpage`,
  url: abs(o.path),
  name: o.name,
  description: o.description,
  inLanguage: "fr-FR",
  isPartOf: { "@id": ids.website },
  about: { "@id": ids.person },
  ...(o.image && {
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: o.image.startsWith("http") ? o.image : abs(o.image),
    },
  }),
  ...o.extra,
});

export const project = (p: {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string; // ISO 8601
  images: string[];
  link?: string;
  keywords?: string[];
}): Node => ({
  "@type": "CreativeWork", // WebApplication possible pour un vrai produit en ligne (ex. Poukaves)
  "@id": `${abs(`/work/${p.slug}`)}#project`,
  name: p.title,
  description: p.summary,
  datePublished: p.publishedAt,
  inLanguage: "fr-FR",
  creator: { "@id": ids.person },
  author: { "@id": ids.person },
  mainEntityOfPage: { "@id": `${abs(`/work/${p.slug}`)}#webpage` },
  ...(p.images[0] && { image: abs(p.images[0]) }),
  ...(p.link && { url: p.link }),
  ...(p.keywords?.length && { keywords: p.keywords.join(", ") }),
});
