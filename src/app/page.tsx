import {
  ArrowRight,
  Code,
  Download,
  Layers,
  Terminal,
} from "lucide-react";

import { Container } from "@/components/layout";
import { Badge, Button, Card } from "@/components/ui";

import styles from "./page.module.css";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Jest",
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            Curriculum Next
          </span>

          <h1 className={styles.title}>
            Design System
          </h1>

          <p className={styles.description}>
            Componentes reutilizáveis, acessíveis
            e consistentes para o currículo digital.
          </p>

          <Badge variant="primary">
            Desenvolvimento inicial
          </Badge>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Layers size={24} aria-hidden="true" />
            Buttons
          </h2>

          <Card>
            <div className={styles.componentGroup}>
              <Button leftIcon={<Download />}>
                Primary
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button
                variant="ghost"
                rightIcon={<ArrowRight />}
              >
                Ghost
              </Button>

              <Button disabled>
                Disabled
              </Button>
            </div>

            <div className={styles.componentGroup}>
              <Button size="sm">
                Small
              </Button>

              <Button size="md">
                Medium
              </Button>

              <Button size="lg">
                Large
              </Button>
            </div>

            <Button fullWidth variant="secondary">
              Full Width
            </Button>
          </Card>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Code size={24} aria-hidden="true" />
            Cards
          </h2>

          <div className={styles.cardGrid}>
            <Card hoverable>
              <div className={styles.cardContent}>
                <Badge variant="primary">
                  Default
                </Badge>

                <h3>Desenvolvimento Frontend</h3>

                <p>
                  Interfaces responsivas com React,
                  Next.js e TypeScript.
                </p>
              </div>
            </Card>

            <Card variant="outlined" hoverable>
              <div className={styles.cardContent}>
                <Badge variant="outline">
                  Outlined
                </Badge>

                <h3>Desenvolvimento Backend</h3>

                <p>
                  APIs REST, regras de negócio
                  e integração com bancos de dados.
                </p>
              </div>
            </Card>

            <Card variant="elevated" hoverable>
              <div className={styles.cardContent}>
                <Badge variant="success">
                  Elevated
                </Badge>

                <h3>Desenvolvimento Full Stack</h3>

                <p>
                  Soluções completas, da interface
                  à infraestrutura da aplicação.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Terminal size={24} aria-hidden="true" />
            Badges
          </h2>

          <Card>
            <div className={styles.componentGroup}>
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>

            <div className={styles.componentGroup}>
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </Card>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Tecnologias
          </h2>

          <Card>
            <div className={styles.technologies}>
              {technologies.map((technology) => (
                <Badge
                  key={technology}
                  variant="primary"
                >
                  {technology}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        <footer className={styles.footer}>
          <p>
            Curriculum Next — Design System v0.1.0
          </p>
        </footer>
      </Container>
    </main>
  );
}
