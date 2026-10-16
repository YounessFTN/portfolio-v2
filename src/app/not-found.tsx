import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page introuvable
      </Heading>
      <Text onBackground="neutral-weak" marginBottom="l">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </Text>
      <Row gap="12" wrap horizontal="center">
        <Button href="/" variant="secondary" data-border="rounded" prefixIcon="home">
          Retour à l'accueil
        </Button>
        <Button href="/contact" variant="tertiary" data-border="rounded" prefixIcon="chat">
          Me contacter
        </Button>
      </Row>
    </Column>
  );
}
