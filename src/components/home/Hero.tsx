import Image from "next/image";
import Link from "next/link";
import { Avatar, Button, Icon, Text } from "@once-ui-system/core";
import { about, contact, person } from "@/resources";
import styles from "./Hero.module.scss";

const steps = ["Appel découverte", "Cadrage & devis", "Développement", "Mise en ligne"];

export const Hero = () => (
  <section className={styles.hero} aria-labelledby="hero-title">
    <div className={styles.copy}>
      <Link href={about.path} className={styles.identity}>
        <Avatar src={person.avatar} size="m" />
        <span>
          <Text as="span" variant="label-strong-m" onBackground="neutral-strong">
            {person.name}
          </Text>
          <Text as="span" variant="body-default-s" onBackground="neutral-weak">
            Développeur full stack freelance · Lyon
          </Text>
        </span>
      </Link>

      <h1 id="hero-title" className={styles.title}>
        Votre SaaS, de l'idée à la{" "}
        <span className={styles.highlight}>
          mise en ligne
          <svg viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true">
            <path d="M3 13 C 70 4, 150 4, 297 9" pathLength="1" />
          </svg>
        </span>
        .
      </h1>

      <Text as="p" variant="heading-default-l" onBackground="neutral-medium" className={styles.lede}>
        Je conçois et développe des SaaS, des MVP et des applications web sur mesure :
        interface, API, base de données, paiements Stripe et déploiement. Vous validez à chaque
        étape.
      </Text>

      <div className={styles.actions}>
        <Button href={contact.path} size="l" data-border="rounded" arrowIcon>
          Démarrer un projet
        </Button>
        {contact.calendar.display && (
          <Button
            href={contact.calendar.link}
            size="l"
            variant="secondary"
            data-border="rounded"
            prefixIcon="calendar"
          >
            Réserver un appel découverte
          </Button>
        )}
      </div>

      <ol className={styles.track} aria-label="Déroulé d'un projet">
        {steps.map((step, index) => (
          <li key={step} className={index === steps.length - 1 ? styles.trackLast : undefined}>
            <span className={styles.trackDot} aria-hidden="true" />
            <Text as="span" variant="label-default-s">
              {step}
            </Text>
          </li>
        ))}
      </ol>

      <Text as="p" variant="body-default-s" onBackground="neutral-weak" wrap="balance">
        {contact.responseTime} · Devis sous 48 h · Partout en France
      </Text>
    </div>

    <figure className={styles.artifact}>
      <div className={styles.window}>
        <div className={styles.chrome}>
          <span className={styles.url}>
            <Icon name="globe" size="xs" onBackground="neutral-weak" />
            poukaves.vercel.app
          </span>
          <span className={styles.live}>
            <span className={styles.liveDot} aria-hidden="true" />
            En ligne
          </span>
        </div>
        <Image
          src="/images/poukaves-screen.webp"
          alt="Page d'accueil de Poukaves, plateforme de signalement anonyme développée avec Next.js et Prisma"
          width={1108}
          height={666}
          sizes="(max-width: 1024px) 100vw, 560px"
          priority
          className={styles.screenshot}
        />
      </div>
      <figcaption>
        <Link href="/work/poukaves" className={styles.caption}>
          <Text as="span" variant="label-strong-s" onBackground="brand-medium">
            Projet à la une
          </Text>
          <Text as="span" variant="body-default-s" onBackground="neutral-strong">
            Poukaves, application full stack Next.js & Prisma
          </Text>
          <Icon name="arrowRight" size="xs" onBackground="neutral-strong" />
        </Link>
      </figcaption>
    </figure>
  </section>
);
