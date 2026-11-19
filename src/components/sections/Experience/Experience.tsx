import {
    ChartColumn,
    CodeXml,
    Microscope,
    Users,
    type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout";

import { SectionHeading } from "@/components/ui";

import { experiences } from "@/data/experiences";

import type {
    ExperienceIcon,
} from "@/types/experience";

import { ExperienceCard } from "./ExperienceCard";

import styles from "./Experience.module.css";

const experienceIcons: Record<
    ExperienceIcon,
    LucideIcon
> = {
    code: CodeXml,
    users: Users,
    chart: ChartColumn,
    microscope: Microscope,
};

const orderedExperiences = [...experiences].sort(
    (first, second) =>
        second.period.start.localeCompare(
            first.period.start,
        ),
);

export function Experience() {
    return (
        <section
            id="experience"
            tabIndex={-1}
            aria-labelledby="experience-title"
            className={styles.experience}
        >
            <Container>
                <div className={styles.content}>
                    <SectionHeading
                        id="experience-title"
                        eyebrow="Experiência e evolução"
                        title="Experiências profissionais"
                        subtitle="Uma trajetória de aprendizado, desenvolvimento e construção de competências."
                    />

                    <ol
                        className={styles.timeline}
                        aria-label="Trajetória profissional em ordem cronológica decrescente"
                        role="list"
                    >
                        {orderedExperiences.map(
                            (experience) => {
                                const Icon =
                                    experienceIcons[
                                    experience.icon
                                    ];

                                return (
                                    <li
                                        key={experience.id}
                                        className={
                                            styles.item
                                        }
                                    >
                                        <div
                                            className={
                                                styles.marker
                                            }
                                            aria-hidden="true"
                                        >
                                            <Icon
                                                size={22}
                                            />
                                        </div>

                                        <ExperienceCard
                                            experience={
                                                experience
                                            }
                                        />
                                    </li>
                                );
                            },
                        )}
                    </ol>
                </div>
            </Container>
        </section>
    );
}