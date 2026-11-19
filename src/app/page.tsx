import { Container } from "@/components/layout";

import {
    About,
    Education,
    Experience,
    Hero,
    Projects,
    ShareResume,
    Skills,
} from "@/components/sections";

import { Badge, Card } from "@/components/ui";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <About />

      <Experience />

      <Education />

      <Skills />

      <Projects />

      <ShareResume />

      <section
        id="contact"
        tabIndex={-1}
        aria-labelledby="contact-title"
        className={styles.section}
      >
        <Container>
          <div className={styles.sectionContent}>
            <h2
              id="contact-title"
              className={styles.sectionTitle}
            >
              Contato
            </h2>

            <Card variant="outlined">
              <div className={styles.placeholder}>
                <Badge variant="outline">
                  Em desenvolvimento
                </Badge>

                <p>
                  Esta seção será implementada
                  nas próximas etapas do projeto.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}