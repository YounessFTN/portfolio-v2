import { siteNodes, type Node } from "@/resources/jsonld";

// Server-rendered JSON-LD: the script is in the initial HTML, unlike once-ui's <Schema> (next/script afterInteractive)
export function JsonLd({ nodes = [] }: { nodes?: Node[] }) {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [...siteNodes, ...nodes],
  }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
