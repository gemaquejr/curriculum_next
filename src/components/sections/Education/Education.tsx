import { Container } from "@/components/layout";

import { SectionHeading } from "@/components/ui";

import { education } from "@/data/education";

import type { EducationCategory } from "@/types/education";

import { EducationCard } from "./EducationCard";

import styles from "./Education.module.css";

interface EducationGroup {
    id: string;
    title: string;
    categories: readonly EducationCategory[];
}

const educationGroups: readonly EducationGroup[] = [
    {
        id: "academic",
        title: "Formação acadêmica e profissional",
        categories: ["degree", "professional"],
    },
    {
        id: "certifications",
        title: "Certificações",
        categories: ["certification"],
    },
    {
        id: "courses",
        title: "Cursos complementares",
        categories: ["course"],
    },
];

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

                    {educationGroups.map((group) => {
                        const items = education.items.filter(
                            (item) =>
                                group.categories.includes(
                                    item.category,
                                ),
                        );

                        if (items.length === 0) {
                            return null;
                        }

                        return (
                            <div
                                key={group.id}
                                className={styles.group}
                            >
                                <h3
                                    id={`education-${group.id}`}
                                    className={styles.groupTitle}
                                >
                                    {group.title}
                                </h3>

                                <ul
                                    className={styles.grid}
                                    aria-labelledby={`education-${group.id}`}
                                    role="list"
                                >
                                    {items.map((item) => (
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
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}