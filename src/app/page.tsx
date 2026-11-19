import { Container } from "@/components/layout";

import {
  About,
  Education,
  Experience,
  Hero,
  Skills,
} from "@/components/sections";

import { Badge, Card } from "@/components/ui";

import { navigationItems } from "@/data/navigation";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <About />

      <Experience />

      <Education />

      <Skills />

      {navigationItems
        .filter(
          (item) =>
            item.id !== "home" &&
            item.id !== "about" &&
            item.id !== "experience" &&
            item.id !== "education" &&
            item.id !== "skills",
        )
        .map((item) => (
          <section
            key={item.id}
            id={item.id}
            tabIndex={-1}
            aria-labelledby={`${item.id}-title`}
            className={styles.section}
          >
            <Container>
              <div className={styles.sectionContent}>
                <h2
                  id={`${item.id}-title`}
                  className={styles.sectionTitle}
                >
                  {item.label}
                </h2>

                <Card variant="outlined">
                  <div className={styles.placeholder}>
                    <Badge variant="outline">
                      Em desenvolvimento
                    </Badge>

                    <p>
                      Esta seção será
                      implementada nas
                      próximas etapas
                      do projeto.
                    </p>
                  </div>
                </Card>
              </div>
            </Container>
          </section>
        ))}
    </main>
  );
}