import {
    CalendarDays,
    MapPin,
} from "lucide-react";

import {
    Badge,
    Card,
} from "@/components/ui";

import { formatPeriod } from "@/lib/formatDate";

import type {
    Experience,
    ExperienceCategory,
} from "@/types/experience";

import styles from "./ExperienceCard.module.css";

interface ExperienceCardProps {
    experience: Experience;
}

const categoryLabels: Record<
    ExperienceCategory,
    string
> = {
    independent: "Projetos independentes",
    professional: "Experiência profissional",
    research: "Pesquisa científica",
};

const categoryVariants: Record<
    ExperienceCategory,
    "primary" | "default" | "outline"
> = {
    independent: "primary",
    professional: "default",
    research: "outline",
};

export function ExperienceCard({
    experience,
}: ExperienceCardProps) {
    const {
        title,
        organization,
        location,
        category,
        period,
        description,
        responsibilities,
        skills,
    } = experience;

    return (
        <Card
            variant="default"
            padding="md"
            className={styles.card}
        >
            <div className={styles.header}>
                <div className={styles.metadata}>
                    <div className={styles.period}>
                        <CalendarDays
                            size={16}
                            aria-hidden="true"
                        />

                        <span>
                            {formatPeriod(
                                period.start,
                                period.end,
                            )}
                        </span>
                    </div>

                    <Badge
                        variant={
                            categoryVariants[category]
                        }
                        size="sm"
                    >
                        {categoryLabels[category]}
                    </Badge>
                </div>

                <h3 className={styles.title}>
                    {title}
                </h3>

                <p className={styles.organization}>
                    {organization}
                </p>

                <div className={styles.location}>
                    <MapPin
                        size={16}
                        aria-hidden="true"
                    />

                    <span>{location}</span>
                </div>
            </div>

            <div className={styles.body}>
                <p className={styles.description}>
                    {description}
                </p>

                {responsibilities.length > 0 && (
                    <div
                        className={
                            styles.responsibilities
                        }
                    >
                        <h4
                            className={
                                styles.sectionTitle
                            }
                        >
                            Principais responsabilidades
                        </h4>

                        <ul
                            className={
                                styles.responsibilityList
                            }
                        >
                            {responsibilities.map(
                                (responsibility) => (
                                    <li
                                        key={
                                            responsibility
                                        }
                                    >
                                        {responsibility}
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                )}

                {skills.length > 0 && (
                    <div className={styles.skills}>
                        <h4
                            className={
                                styles.sectionTitle
                            }
                        >
                            Competências
                        </h4>

                        <ul
                            className={
                                styles.skillList
                            }
                            role="list"
                        >
                            {skills.map((skill) => (
                                <li key={skill}>
                                    <Badge
                                        variant="outline"
                                        size="sm"
                                    >
                                        {skill}
                                    </Badge>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Card>
    );
}