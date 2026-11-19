import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Projects,
  ShareResume,
  Skills,
} from "@/components/sections";

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

      <Contact />
    </main>
  );
}