"use client";

import dynamic from "next/dynamic";
import { Column, Spinner } from "@once-ui-system/core";

const PDFViewer = dynamic(() => import("./PDFViewer"), {
  ssr: false,
  loading: () => (
    <Column
      fillWidth
      horizontal="center"
      vertical="center"
      padding="xl"
      style={{ minHeight: "400px" }}
    >
      <Spinner size="l" />
    </Column>
  ),
});

interface CVContentProps {
  file: string;
  downloadName: string;
}

export default function CVContent({ file, downloadName }: CVContentProps) {
  return <PDFViewer file={file} downloadName={downloadName} />;
}
