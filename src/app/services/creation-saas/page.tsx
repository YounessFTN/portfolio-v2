import { ContactCta } from "@/components";
import { JsonLd } from "@/components/JsonLd";
import { baseURL, contact, saas } from "@/resources";
import { breadcrumb, ids, webPage } from "@/resources/jsonld";
import { pageMetadata } from "@/utils/metadata";
import {
  Button,
  Column,
  Heading,
  Icon,
  Line,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return pageMetadata({ title: saas.title, description: saas.description, path: saas.path });
}

const comparison = [
  {
    title: "SaaS existant (sur étagère)",
    points: [
      "Coût initial faible, abonnement mensuel par utilisateur",
      "Disponible tout de suite",
      "Fonctionnalités génériques : c'est à vous de vous adapter à l'outil",
      "Données hébergées et contrôlées par l'éditeur",
      "Idéal pour un besoin standard (comptabilité, CRM classique…)",
    ],
  },
  {
    title: "Logiciel SaaS sur mesure",
    points: [
      "Investissement initial, puis seulement l'hébergement et la maintenance",
      "Quelques semaines pour un MVP, quelques mois pour un produit complet",
      "Construit autour de votre métier et de vos utilisateurs",
      "Code, données et comptes techniques à votre nom",
      "Idéal pour un produit à commercialiser ou un processus spécifique",
    ],
  },
];

const features = [
  {
    title: "Comptes et rôles",
    description: "Inscription, connexion, équipes et permissions par rôle (admin, membre, client).",
  },
  {
    title: "Abonnements et paiements",
    description: "Plans, essais gratuits, factures et portail client avec Stripe.",
  },
  {
    title: "Multi-entreprise",
    description: "Chaque client a ses propres données, isolées des autres comptes.",
  },
  {
    title: "Tableau de bord",
    description: "Les indicateurs et les actions clés de vos utilisateurs, au même endroit.",
  },
  {
    title: "Back-office",
    description: "Une interface d'administration pour gérer clients, contenus et abonnements.",
  },
  {
    title: "E-mails et automatisations",
    description: "E-mails transactionnels, notifications et intégrations (n8n, API tierces).",
  },
];

const deliverables = [
  "Compte rendu du besoin et premières pistes",
  "Périmètre du MVP, maquettes Figma, planning et devis détaillé",
  "Accès à un environnement de test mis à jour à chaque livraison",
  "Application en production, monitoring, puis maintenance et évolutions",
];

const stack = [
  { name: "Next.js et React", why: "interfaces rapides et bien référencées, une base très répandue" },
  { name: "TypeScript", why: "moins de bugs et un code plus facile à faire évoluer" },
  { name: "Node.js et API REST", why: "la logique métier et les intégrations avec vos outils" },
  { name: "Prisma et PostgreSQL", why: "une base de données relationnelle fiable et des migrations maîtrisées" },
  { name: "Stripe", why: "paiements, abonnements et facturation conformes" },
  { name: "Docker et Vercel", why: "des déploiements reproductibles et une mise en ligne sans friction" },
];

const budgets = [
  {
    range: contact.budgets[0],
    description: "Prototype cliquable, outil interne simple ou automatisation d'un processus existant.",
  },
  {
    range: contact.budgets[1],
    description: "MVP centré sur un parcours clé : comptes utilisateurs, une fonctionnalité cœur, paiement.",
  },
  {
    range: contact.budgets[2],
    description: "Première version complète : abonnements, rôles, tableau de bord et back-office.",
  },
  {
    range: contact.budgets[3],
    description: "Produit avancé : intégrations multiples, multi-entreprise, volumétrie importante.",
  },
];

const faq = [
  {
    question: "Combien coûte la création d'un SaaS sur mesure ?",
    answer:
      "Tout dépend du périmètre. Un MVP centré sur un parcours clé démarre généralement entre 3 000 et 8 000 €, une première version complète se situe plutôt entre 8 000 et 20 000 €. Après l'appel découverte, vous recevez un devis détaillé par lot sous 48 h.",
  },
  {
    question: "Combien de temps faut-il pour développer un MVP SaaS ?",
    answer:
      "Comptez quelques semaines pour un MVP bien cadré, et quelques mois pour un produit complet. Le développement avance par livraisons régulières : vous testez le produit sur un environnement de test bien avant la mise en ligne.",
  },
  {
    question: "Qui est propriétaire du code et des données ?",
    answer:
      "Vous. Le dépôt de code, l'hébergement et la base de données sont créés à votre nom, ce qui vous laisse libre de faire évoluer le logiciel avec le prestataire de votre choix.",
  },
  {
    question: "Pouvez-vous reprendre un projet existant ?",
    answer:
      "Oui. Je commence par un audit du code et de l'architecture pour identifier ce qui peut être conservé, puis je propose un plan de refonte ou d'évolution par étapes.",
  },
  {
    question: "Travaillez-vous uniquement à Lyon ?",
    answer:
      "Je suis basé à Lyon et je peux vous rencontrer sur place, mais je suis des projets à distance partout en France. Les échanges se font en français, en anglais ou en italien.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "Je reste disponible pour la maintenance (mises à jour, correctifs, surveillance) et pour faire évoluer le produit à partir des retours de vos utilisateurs.",
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Heading as="h2" variant="display-strong-xs" wrap="balance">
    {children}
  </Heading>
);

export default function CreationSaas() {
  return (
    <Column maxWidth="m" fillWidth gap="64" paddingY="12">
      <JsonLd
        nodes={[
          webPage({
            path: saas.path,
            name: saas.title,
            description: saas.description,
            extra: { mainEntity: { "@id": `${baseURL}${saas.path}#service` } },
          }),
          {
            "@type": "Service",
            "@id": `${baseURL}${saas.path}#service`,
            name: "Création de logiciel SaaS sur mesure",
            serviceType: "Développement de logiciel SaaS",
            description: saas.description,
            provider: { "@id": ids.service },
            areaServed: [
              { "@type": "City", name: "Lyon" },
              { "@type": "Country", name: "France" },
            ],
            url: `${baseURL}${saas.path}`,
          },
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: saas.label, path: saas.path },
          ]),
        ]}
      />

      <Column fillWidth horizontal="center" align="center" gap="m">
        <Heading as="h1" wrap="balance" variant="display-strong-l">
          Création de logiciel SaaS sur mesure, par un développeur freelance à Lyon
        </Heading>
        <Column maxWidth="s">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
            Vous avez une idée de SaaS ou un outil métier à remplacer ? Je conçois et développe
            votre logiciel de A à Z (comptes utilisateurs, abonnements, tableau de bord,
            back-office), avec des livraisons régulières que vous validez à chaque étape.
          </Text>
        </Column>
        <Row gap="12" wrap horizontal="center" paddingTop="12">
          <Button href={contact.path} data-border="rounded" arrowIcon size="l">
            Démarrer un projet
          </Button>
          <Button
            href={contact.calendar.link}
            variant="secondary"
            data-border="rounded"
            prefixIcon="calendar"
            size="l"
          >
            Réserver un appel de 30 min
          </Button>
        </Row>
      </Column>

      <Column fillWidth gap="24">
        <SectionTitle>SaaS existant ou logiciel sur mesure : lequel choisir ?</SectionTitle>
        <Text onBackground="neutral-weak">
          Avant de développer quoi que ce soit, il faut vérifier qu'un outil du marché ne fait pas
          déjà le travail. Le sur mesure se justifie quand votre besoin est spécifique, ou quand le
          logiciel est lui-même le produit que vous vendez.
        </Text>
        <Row fillWidth gap="16" s={{ direction: "column" }}>
          {comparison.map((column) => (
            <Column
              key={column.title}
              flex={1}
              fillWidth
              gap="12"
              padding="24"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
            >
              <Heading as="h3" variant="heading-strong-m">
                {column.title}
              </Heading>
              <Column as="ul" gap="8" paddingLeft="20" margin="0">
                {column.points.map((point) => (
                  <Text as="li" key={point} variant="body-default-m" onBackground="neutral-weak">
                    {point}
                  </Text>
                ))}
              </Column>
            </Column>
          ))}
        </Row>
      </Column>

      <Column fillWidth gap="24">
        <SectionTitle>Ce que comprend un SaaS que je développe</SectionTitle>
        <Row fillWidth wrap gap="16">
          {features.map((feature) => (
            <Column
              key={feature.title}
              gap="8"
              padding="20"
              radius="l"
              border="neutral-alpha-weak"
              style={{ flex: "1 1 15rem" }}
            >
              <Row gap="8" vertical="center">
                <Icon name="checkCircle" onBackground="brand-weak" size="s" />
                <Heading as="h3" variant="heading-strong-s">
                  {feature.title}
                </Heading>
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {feature.description}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      <Column fillWidth gap="24">
        <SectionTitle>Ma méthode en 4 étapes</SectionTitle>
        {contact.process.map((step, index) => (
          <Row key={step.title} gap="16">
            <Row
              minWidth="40"
              height="40"
              radius="full"
              border="neutral-alpha-medium"
              horizontal="center"
              vertical="center"
            >
              <Text variant="label-strong-m">{index + 1}</Text>
            </Row>
            <Column gap="4">
              <Heading as="h3" variant="heading-strong-m">
                {step.title}
              </Heading>
              <Text onBackground="neutral-weak">{step.description}</Text>
              <Text variant="body-default-s" onBackground="brand-weak">
                Livrable : {deliverables[index]}
              </Text>
            </Column>
          </Row>
        ))}
      </Column>

      <Column fillWidth gap="24">
        <SectionTitle>Une stack technique standard et reprenable</SectionTitle>
        <Text onBackground="neutral-weak">
          J'utilise des technologies éprouvées et très répandues : n'importe quel développeur
          pourra reprendre votre code demain.
        </Text>
        <Column fillWidth gap="12">
          {stack.map((item) => (
            <Row key={item.name} gap="12" vertical="start" s={{ direction: "column", gap: "4" }}>
              <Text variant="heading-strong-s" style={{ minWidth: "11rem" }}>
                {item.name}
              </Text>
              <Text onBackground="neutral-weak">{item.why}</Text>
            </Row>
          ))}
        </Column>
      </Column>

      <Column fillWidth gap="24">
        <SectionTitle>Budgets indicatifs</SectionTitle>
        <Text onBackground="neutral-weak">
          Chaque projet est chiffré au forfait, par lot, après l'appel découverte. Ces fourchettes
          vous donnent un premier ordre de grandeur.
        </Text>
        <Column fillWidth radius="l" border="neutral-alpha-weak" overflow="hidden">
          {budgets.map((budget, index) => (
            <Row
              key={budget.range}
              fillWidth
              gap="16"
              padding="20"
              s={{ direction: "column" }}
              borderTop={index > 0 ? "neutral-alpha-weak" : undefined}
            >
              <Text variant="heading-strong-s" style={{ minWidth: "11rem" }}>
                {budget.range}
              </Text>
              <Text onBackground="neutral-weak">{budget.description}</Text>
            </Row>
          ))}
        </Column>
      </Column>

      <Column fillWidth gap="16">
        <SectionTitle>Un exemple : Poukaves</SectionTitle>
        <Text onBackground="neutral-weak">
          Poukaves est une application full stack en ligne de signalement anonyme : formulaire
          simplifié, catégorisation et statistiques interactives par catégorie et par zone. Elle
          est construite avec Next.js et Prisma et déployée sur Vercel, la même stack que celle que
          j'utilise pour les SaaS de mes clients.
        </Text>
        <SmartLink href="/work/poukaves" suffixIcon="arrowRight">
          Voir le projet Poukaves
        </SmartLink>
      </Column>

      <Column fillWidth gap="16">
        <SectionTitle>Pourquoi un freelance plutôt qu'une agence ?</SectionTitle>
        <Text onBackground="neutral-weak">
          Vous parlez directement à la personne qui conçoit et code votre produit : pas
          d'intermédiaire, des décisions rapides et un coût sans frais de structure. Pour un projet
          qui demande une équipe de plusieurs développeurs à plein temps, une agence sera plus
          adaptée, et je vous le dirai dès le premier appel.
        </Text>
      </Column>

      <Column fillWidth gap="24">
        <SectionTitle>Questions fréquentes</SectionTitle>
        <Column fillWidth gap="24">
          {faq.map((item, index) => (
            <Column key={item.question} gap="8">
              {index > 0 && <Line background="neutral-alpha-weak" marginBottom="16" />}
              <Heading as="h3" variant="heading-strong-m">
                {item.question}
              </Heading>
              <Text onBackground="neutral-weak">{item.answer}</Text>
            </Column>
          ))}
        </Column>
      </Column>

      <ContactCta title="Parlons de votre SaaS" />
    </Column>
  );
}
