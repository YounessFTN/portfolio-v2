import { Meta } from "@once-ui-system/core";
import type { Metadata } from "next";
import { baseURL } from "@/resources";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

// Meta.generate + canonical URL and French Open Graph locale
export function pageMetadata({ title, description, path, image }: PageMetadataOptions): Metadata {
  const meta = Meta.generate({
    title,
    description,
    baseURL,
    path,
    image: image ?? `/api/og/generate?title=${encodeURIComponent(title)}`,
  });

  return {
    ...meta,
    alternates: { canonical: path },
    openGraph: { ...meta.openGraph, locale: "fr_FR", siteName: "Youness Fatine" },
  };
}
