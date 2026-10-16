import { ContactForm } from "@/components/contact/ContactForm";
import { baseURL, contact, person } from "@/resources";
import {
  Button,
  Column,
  Heading,
  Icon,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" fillWidth gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth horizontal="center" align="center" gap="m">
        <RevealFx translateY="4" fillWidth horizontal="center">
          <Heading as="h1" wrap="balance" variant="display-strong-l">
            {contact.headline}
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
          <Column maxWidth="s">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {contact.subline}
            </Text>
          </Column>
        </RevealFx>
      </Column>

      <RevealFx translateY="16" delay={0.4}>
        <Row fillWidth gap="40" s={{ direction: "column" }}>
          <Column flex={3} fillWidth>
            <Column
              fillWidth
              padding="32"
              s={{ padding: "20" }}
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
            >
              <ContactForm />
            </Column>
          </Column>

          <Column flex={2} fillWidth gap="32" as="aside">
            {contact.calendar.display && (
              <Column
                fillWidth
                gap="12"
                padding="24"
                radius="l"
                border="brand-alpha-medium"
                background="brand-alpha-weak"
              >
                <Row gap="8" vertical="center">
                  <Icon name="calendar" onBackground="brand-weak" size="s" />
                  <Text variant="heading-strong-s">Vous préférez en parler ?</Text>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Réservez un appel découverte gratuit de 30 minutes pour présenter votre
                  projet de vive voix.
                </Text>
                <Button
                  href={contact.calendar.link}
                  variant="secondary"
                  size="m"
                  data-border="rounded"
                  arrowIcon
                  fillWidth
                >
                  Réserver un créneau
                </Button>
              </Column>
            )}

            <Column fillWidth gap="12" paddingX="8">
              <Row gap="8" vertical="center">
                <Icon name="email" onBackground="neutral-weak" size="s" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </Text>
              </Row>
              <Row gap="8" vertical="center">
                <Icon name="clock" onBackground="neutral-weak" size="s" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {contact.responseTime}
                </Text>
              </Row>
            </Column>

            <Line background="neutral-alpha-weak" />

            <Column fillWidth gap="20" paddingX="8">
              <Heading as="h2" variant="heading-strong-m">
                Comment ça se passe
              </Heading>
              {contact.process.map((step, index) => (
                <Row key={step.title} gap="16">
                  <Row
                    minWidth="32"
                    height="32"
                    radius="full"
                    border="neutral-alpha-medium"
                    horizontal="center"
                    vertical="center"
                  >
                    <Text variant="label-strong-s">{index + 1}</Text>
                  </Row>
                  <Column gap="4">
                    <Text variant="heading-strong-xs">{step.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {step.description}
                    </Text>
                  </Column>
                </Row>
              ))}
            </Column>
          </Column>
        </Row>
      </RevealFx>
    </Column>
  );
}
