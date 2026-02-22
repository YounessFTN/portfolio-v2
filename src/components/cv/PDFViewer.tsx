"use client";

import {
  Button,
  Column,
  IconButton,
  Row,
  Spinner,
  Text,
} from "@once-ui-system/core";
import { useCallback, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure worker from unpkg CDN (more up-to-date than cdnjs)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
  downloadName: string;
}

export default function PDFViewer({ file, downloadName }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(800);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string>("");

  // Construct full URL for react-pdf
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPdfUrl(`${window.location.origin}${file}`);
    }
  }, [file]);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
      setIsLoading(false);
      setError(null);
    },
    [],
  );

  const onDocumentLoadError = useCallback((err: Error) => {
    console.error("Error loading PDF:", err);
    setIsLoading(false);
    setError(
      "Impossible de charger le fichier PDF. Vérifiez que le fichier existe.",
    );
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const containerWidth = Math.min(window.innerWidth - 48, 800);
      setPageWidth(containerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = downloadName;
    link.click();
  };

  return (
    <Column fillWidth horizontal="center" gap="l">
      {/* Toolbar */}
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        padding="m"
        background="surface"
        radius="l"
        border="neutral-alpha-weak"
        style={{
          position: "sticky",
          top: "80px",
          zIndex: 10,
          backdropFilter: "blur(16px)",
        }}
      >
        <Row gap="s" vertical="center">
          <IconButton
            href="/"
            icon="arrowLeft"
            variant="secondary"
            size="m"
            tooltip="Retour à l'accueil"
            aria-label="Retour à l'accueil"
          />
          <Row hide s={{ hide: false }}>
            <Button href="/" label="Accueil" variant="tertiary" size="s" />
          </Row>
        </Row>

        <Row gap="s" vertical="center">
          {numPages > 0 && (
            <Row
              paddingX="m"
              paddingY="4"
              background="neutral-alpha-weak"
              radius="m"
              s={{ hide: true }}
            >
              <span style={{ fontSize: "14px", opacity: 0.7 }}>
                {numPages} page{numPages > 1 ? "s" : ""}
              </span>
            </Row>
          )}
          <Button
            onClick={handleDownload}
            label="Télécharger"
            prefixIcon="download"
            variant="primary"
            size="s"
          />
        </Row>
      </Row>

      {/* PDF Container */}
      <Column
        fillWidth
        horizontal="center"
        padding="m"
        style={{ minHeight: "500px" }}
      >
        {(isLoading || !pdfUrl) && !error && (
          <Column
            fillWidth
            horizontal="center"
            vertical="center"
            padding="xl"
            gap="m"
            style={{ minHeight: "400px" }}
          >
            <Spinner size="l" />
            <span style={{ opacity: 0.6 }}>Chargement du CV...</span>
          </Column>
        )}

        {error && (
          <Column
            fillWidth
            horizontal="center"
            vertical="center"
            padding="xl"
            gap="m"
            background="danger-alpha-weak"
            radius="l"
            style={{ minHeight: "200px" }}
          >
            <Text variant="body-default-m" onBackground="danger-strong">
              {error}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Chemin attendu : {file}
            </Text>
          </Column>
        )}

        {!error && pdfUrl && (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
          >
            <Column gap="l" horizontal="center">
              {Array.from(new Array(numPages), (_, index) => (
                <Row
                  key={`page_${index + 1}`}
                  radius="l"
                  border="neutral-alpha-weak"
                  style={{
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Page
                    pageNumber={index + 1}
                    width={pageWidth}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Row>
              ))}
            </Column>
          </Document>
        )}
      </Column>
    </Column>
  );
}
