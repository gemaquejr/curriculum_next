import { Container } from "@/components/layout";
import { SectionHeading } from "@/components/ui";

import { about } from "@/data/about";

import { AboutHighlights } from "./AboutHighlights";

import styles from "./About.module.css";

export function About() {
    return (
        <section
            id="about"
            tabIndex={-1}
            aria-labelledby="about-title"
            className={styles.about}
        >
            <Container>
                <div className={styles.content}>
                    <SectionHeading
                        id="about-title"
                        eyebrow={about.eyebrow}
                        title={about.title}
                        subtitle={about.subtitle}
                    />

                    <div className={styles.layout}>
                        <div
                            className={styles.biography}
                        >
                            {about.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={
                                            styles.paragraph
                                        }
                                    >
                                        {paragraph}
                                    </p>
                                ),
                            )}
                        </div>

                        <AboutHighlights
                            highlights={about.highlights}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}