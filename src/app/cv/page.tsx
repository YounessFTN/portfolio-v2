import CVContent from "@/components/cv/CVContent";
import { baseURL, cv, person } from "@/resources";
import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: cv.title,
    description: cv.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(cv.title)}`,
    path: cv.path,
  });
}

export default function CVPage() {
  return (
    <Column maxWidth="m" fillWidth paddingY="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={cv.title}
        description={cv.description}
        path={cv.path}
        image={`/api/og/generate?title=${encodeURIComponent(cv.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${cv.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
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
