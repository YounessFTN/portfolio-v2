import { Column, Heading, Row, SmartLink, Text } from "@once-ui-system/core";
import { contact, saas } from "@/resources";

const offers = [
  {
    title: "SaaS sur mesure",
    description:
      "Abonnements Stripe, espaces clients, tableau de bord et back-office : un logiciel prêt à être commercialisé.",
    href: saas.path,
    cta: "Découvrir l'offre",
  },
  {
    title: "MVP pour tester votre idée",
    description:
      "Un périmètre resserré sur le parcours clé, mis en ligne rapidement pour confronter l'idée à de vrais utilisateurs.",
    href: contact.path,
    cta: "Parler de mon MVP",
  },
  {
    title: "Applications web métier",
    description:
      "Outils internes, automatisations (n8n, API) et intégrations pour remplacer tableurs et tâches répétitives.",
    href: contact.path,
    cta: "Décrire mon besoin",
  },
];

export const Offers = () => (
  <Column fillWidth gap="48" paddingX="l" s={{ paddingX: "0" }}>
    <Column fillWidth gap="24">
      <Heading as="h2" variant="display-strong-xs" wrap="balance">
        Ce que je construis pour vous
      </Heading>
      <Row fillWidth gap="16" s={{ direction: "column" }}>
        {offers.map((offer) => (
          <Column
            key={offer.title}
            flex={1}
            fillWidth
            gap="12"
            padding="24"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
          >
            <Heading as="h3" variant="heading-strong-m">
              {offer.title}
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {offer.description}
            </Text>
            <SmartLink href={offer.href} suffixIcon="arrowRight">
              {offer.cta}
            </SmartLink>
          </Column>
        ))}
      </Row>
    </Column>
  </Column>
);
