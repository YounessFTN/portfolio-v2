import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { contact } from "@/resources";

type ContactCtaProps = {
  title?: string;
  description?: string;
};

export const ContactCta = ({
  title = "Un projet en tête ?",
  description = `Décrivez-le en 2 minutes : ${contact.responseTime.toLowerCase()}, sans engagement.`,
}: ContactCtaProps) => (
  <Column fillWidth gap="16" horizontal="center" align="center" paddingY="40">
    <Heading as="h2" variant="heading-strong-l" wrap="balance">
      {title}
    </Heading>
    <Text onBackground="neutral-weak" wrap="balance">
      {description}
    </Text>
    <Row gap="12" wrap horizontal="center">
      <Button href={contact.path} data-border="rounded" arrowIcon>
        Démarrer un projet
      </Button>
      {contact.calendar.display && (
        <Button
          href={contact.calendar.link}
          variant="secondary"
          data-border="rounded"
          prefixIcon="calendar"
        >
          Réserver un appel
        </Button>
      )}
    </Row>
  </Column>
);
