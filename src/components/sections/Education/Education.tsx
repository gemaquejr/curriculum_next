import { Container } from "@/components/layout";

import { SectionHeading } from "@/components/ui";

import { education } from "@/data/education";

import { EducationCard } from "./EducationCard";

import styles from "./Education.module.css";

export function Education() {
    return (
        <section
            id="education"
            tabIndex={-1}
            aria-labelledby="education-title"
            className={styles.education}
        >
            <Container>
                <div className={styles.content}>
                    <SectionHeading
                        id="education-title"
                        eyebrow={education.eyebrow}
                        title={education.title}
                        subtitle={education.subtitle}
                    />

                    <ul
                        className={styles.grid}
                        aria-label="Formações acadêmicas e profissionais"
                        role="list"
                    >
                        {education.items.map((item) => (
                            <li
                                key={item.id}
                                className={styles.item}
                            >
                                <EducationCard
                                    education={item}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}