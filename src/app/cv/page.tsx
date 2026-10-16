import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/utils/metadata";
import { breadcrumb, ids, webPage } from "@/resources/jsonld";
import CVContent from "@/components/cv/CVContent";
import { cv } from "@/resources";
import { Column, Heading, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return pageMetadata({ title: cv.title, description: cv.description, path: cv.path });
}

export default function CVPage() {
  return (
    <Column maxWidth="m" fillWidth paddingY="xl" horizontal="center">
      <JsonLd
        nodes={[
          webPage({
            type: "ProfilePage",
            path: cv.path,
            name: cv.title,
            description: cv.description,
            extra: { mainEntity: { "@id": ids.person } },
          }),
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: cv.label, path: cv.path },
          ]),
        ]}
      />

      <Column fillWidth horizontal="center" gap="m" marginBottom="l">
        <Heading as="h1" variant="display-strong-l">
          Mon CV
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Consultez et téléchargez mon CV
        </Text>
      </Column>

      <CVContent file={cv.file} downloadName={cv.downloadName} />
    </Column>
  );
}
