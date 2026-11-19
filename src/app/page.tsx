import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <span className={styles.label}>
        Currículo Digital
      </span>

      <h1 className={styles.title}>
        Francisco Gemaque
      </h1>

      <h2 className={styles.subtitle}>
        Desenvolvedor Full Stack
      </h2>

      <p className={styles.description}>
        Transformando ideias em soluções digitais
        através da tecnologia e do desenvolvimento
        de software.
      </p>
    </main>
  );
}