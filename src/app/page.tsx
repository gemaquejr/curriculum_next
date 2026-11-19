import { Container } from "@/components/layout";
import { Badge, Card } from "@/components/ui";

import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section
        id="home"
        tabIndex={-1}
        aria-labelledby="home-title"
        className={styles.hero}
      >
        <Container>
          <div className={styles.heroContent}>
            <Badge variant="primary">
              Currículo Digital
            </Badge>

            <h1
              id="home-title"
              className={styles.title}
            >
              {profile.name}
            </h1>

            <h2 className={styles.subtitle}>
              {profile.title}
            </h2>

            <p className={styles.description}>
              Transformando ideias em soluções
              digitais através da tecnologia e do
              desenvolvimento de software.
            </p>
          </div>
        </Container>
      </section>

      {navigationItems
        .filter((item) => item.id !== "home")
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
                      Esta seção será implementada
                      nas próximas etapas do projeto.
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