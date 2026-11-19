import { Container } from "@/components/layout";

import { SectionHeading } from "@/components/ui";

import { skills } from "@/data/skills";

import { SkillCategoryCard } from "./SkillCategoryCard";

import styles from "./Skills.module.css";

export function Skills() {
    return (
        <section
            id="skills"
            tabIndex={-1}
            aria-labelledby="skills-title"
            className={styles.skills}
        >
            <Container>
                <div className={styles.content}>
                    <SectionHeading
                        id="skills-title"
                        eyebrow={skills.eyebrow}
                        title={skills.title}
                        subtitle={skills.subtitle}
                    />

                    <ul
                        className={styles.grid}
                        aria-label="Categorias de competências técnicas"
                        role="list"
                    >
                        {skills.categories.map((category) => (
                            <li
                                key={category.id}
                                className={styles.item}
                            >
                                <SkillCategoryCard
                                    category={category}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}