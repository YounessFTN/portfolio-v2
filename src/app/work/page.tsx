import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/utils/metadata";
import { breadcrumb, webPage } from "@/resources/jsonld";
import { getPosts } from "@/utils/utils";
import { Column, Heading } from "@once-ui-system/core";
import { baseURL, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return pageMetadata({ title: work.title, description: work.description, path: work.path });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <JsonLd
        nodes={[
          webPage({
            type: "CollectionPage",
            path: work.path,
            name: work.title,
            description: work.description,
            extra: {
              mainEntity: {
                "@type": "ItemList",
                itemListElement: getPosts(["src", "app", "work", "projects"]).map((post, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  url: `${baseURL}${work.path}/${post.slug}`,
                  name: post.metadata.title,
                })),
              },
            },
          }),
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: work.label, path: work.path },
          ]),
        ]}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        Projets & réalisations
      </Heading>
      <Projects />
    </Column>
  );
}
