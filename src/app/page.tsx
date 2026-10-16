import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/utils/metadata";
import { webPage } from "@/resources/jsonld";
import { Column, Heading, Line, Row } from "@once-ui-system/core";
import { home, routes } from "@/resources";
import { ContactCta, Mailchimp } from "@/components";
import { Hero } from "@/components/home/Hero";
import { Offers } from "@/components/home/Offers";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return pageMetadata({ title: home.title, description: home.description, path: home.path, image: home.image });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <JsonLd
        nodes={[
          webPage({ path: "/", name: home.title, description: home.description, image: home.image }),
        ]}
      />
      <Hero />
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Offers />
      <Projects />
      <ContactCta />
      <Mailchimp />
    </Column>
  );
}
