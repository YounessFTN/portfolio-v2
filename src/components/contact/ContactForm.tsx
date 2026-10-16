"use client";

import { useState } from "react";
import {
  Button,
  Chip,
  Column,
  Feedback,
  Input,
  Row,
  Text,
  Textarea,
} from "@once-ui-system/core";
import { contact, person } from "@/resources";
import styles from "./ContactForm.module.scss";

type Status = "idle" | "loading" | "success" | "error";

type ChoiceGroupProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const ChoiceGroup = ({ label, options, value, onChange }: ChoiceGroupProps) => (
  <Column gap="8" fillWidth role="group" aria-label={label}>
    <Text variant="label-default-s" onBackground="neutral-weak">
      {label}
    </Text>
    <Row wrap gap="8">
      {options.map((option) => (
        <Chip
          key={option}
          label={option}
          selected={value === option}
          onClick={() => onChange(value === option ? "" : option)}
        />
      ))}
    </Row>
  </Column>
);

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          projectType,
          budget,
          timeline,
          message,
          website,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "L'envoi a échoué.");
      }

      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "L'envoi a échoué.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Column
        fillWidth
        gap="16"
        padding="32"
        radius="l"
        border="brand-alpha-medium"
        background="brand-alpha-weak"
        horizontal="center"
        align="center"
      >
        <Text variant="heading-strong-l">Merci {name.split(" ")[0]}, c'est bien reçu !</Text>
        <Text onBackground="neutral-weak" wrap="balance">
          Je reviens vers vous à {email} ({contact.responseTime.toLowerCase()}). En
          attendant, vous pouvez réserver directement un appel découverte.
        </Text>
        {contact.calendar.display && (
          <Button
            href={contact.calendar.link}
            prefixIcon="calendar"
            variant="secondary"
            data-border="rounded"
          >
            Réserver un appel
          </Button>
        )}
      </Column>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Column fillWidth gap="24">
        <Row fillWidth gap="16" s={{ direction: "column" }}>
          <Input
            id="contact-name"
            name="name"
            label="Nom complet"
            autoComplete="name"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="contact-email"
            name="email"
            type="email"
            label="Email professionnel"
            autoComplete="email"
            required
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Row>
        <Input
          id="contact-company"
          name="company"
          label="Entreprise / projet (optionnel)"
          autoComplete="organization"
          maxLength={160}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <ChoiceGroup
          label="Type de projet"
          options={contact.projectTypes}
          value={projectType}
          onChange={setProjectType}
        />
        <ChoiceGroup
          label="Budget estimé"
          options={contact.budgets}
          value={budget}
          onChange={setBudget}
        />
        <ChoiceGroup
          label="Délai souhaité"
          options={contact.timelines}
          value={timeline}
          onChange={setTimeline}
        />

        <Textarea
          id="contact-message"
          name="message"
          label="Votre projet"
          description="Le problème à résoudre, vos utilisateurs, les fonctionnalités clés, l'existant…"
          lines={6}
          required
          minLength={20}
          maxLength={5000}
          resize="vertical"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Honeypot anti-spam, hidden from humans */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="contact-website">Site web</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        {status === "error" && (
          <Feedback variant="danger" icon={false} title="Message non envoyé" description={error}>
            <Text variant="body-default-s" onBackground="danger-strong">
              Vous pouvez aussi m'écrire directement à{" "}
              <a href={`mailto:${person.email}`}>{person.email}</a>.
            </Text>
          </Feedback>
        )}

        <Row fillWidth horizontal="between" vertical="center" gap="16" s={{ direction: "column" }}>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {contact.responseTime} · Sans engagement
          </Text>
          <Button
            type="submit"
            size="l"
            data-border="rounded"
            arrowIcon
            loading={status === "loading"}
            disabled={status === "loading"}
          >
            Envoyer ma demande
          </Button>
        </Row>
      </Column>
    </form>
  );
};
