import {
    Award,
    BookOpen,
    CalendarDays,
    Clock,
    CodeXml,
    ExternalLink,
    GraduationCap,
    MapPin,
    type LucideIcon,
} from "lucide-react";

import {
    Badge,
    Card,
} from "@/components/ui";

import {
    formatEducationPeriod,
} from "@/lib/formatDate";

import type {
    Education,
    EducationCategory,
    EducationIcon,
    EducationStatus,
} from "@/types/education";

import styles from "./EducationCard.module.css";

interface EducationCardProps {
    education: Education;
}

const educationIcons: Record<
    EducationIcon,
    LucideIcon
> = {
    graduation: GraduationCap,
    code: CodeXml,
    book: BookOpen,
    award: Award,
};

const categoryLabels: Record<
    EducationCategory,
    string
> = {
    degree: "Graduação",
    professional: "Formação profissional",
    course: "Curso complementar",
    certification: "Certificação",
};

const statusLabels: Record<
    EducationStatus,
    string
> = {
    completed: "Concluído",
    in_progress: "Em andamento",
    incomplete: "Não concluído",
};

const statusVariants: Record<
    EducationStatus,
    "success" | "primary" | "default"
> = {
    completed: "success",
    in_progress: "primary",
    incomplete: "default",
};

export function EducationCard({
    education,
}: EducationCardProps) {
    const {
        title,
        institution,
        category,
        status,
        icon,
        period,
        location,
        description,
        skills,
        workloadHours,
        credential,
        institutionUrl,
    } = education;

    const Icon = educationIcons[icon];

    const periodLabel = formatEducationPeriod(
        period?.start,
        period?.end,
    );

    return (
        <Card
            variant="default"
            padding="md"
            className={styles.card}
        >
            <div className={styles.header}>
                <div
                    className={styles.icon}
                    aria-hidden="true"
                >
                    <Icon size={26} />
                </div>

                <div className={styles.categories}>
                    <Badge
                        variant="outline"
                        size="sm"
                    >
                        {categoryLabels[category]}
                    </Badge>

                    <Badge
                        variant={statusVariants[status]}
                        size="sm"
                    >
                        {statusLabels[status]}
                    </Badge>
                </div>
            </div>

            <div className={styles.information}>
                <h3 className={styles.title}>
                    {title}
                </h3>

                <p className={styles.institution}>
                    {institutionUrl ? (
                        <a
                            href={institutionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            {institution}

                            <ExternalLink
                                size={14}
                                aria-hidden="true"
                            />

                            <span className={styles.srOnly}>
                                {" (abre em nova aba)"}
                            </span>
                        </a>
                    ) : (
                        institution
                    )}
                </p>

                <div className={styles.metadata}>
                    {periodLabel && (
                        <div className={styles.detail}>
                            <CalendarDays
                                size={16}
                                aria-hidden="true"
                            />

                            <span>{periodLabel}</span>
                        </div>
                    )}

                    {location && (
                        <div className={styles.detail}>
                            <MapPin
                                size={16}
                                aria-hidden="true"
                            />

                            <span>{location}</span>
                        </div>
                    )}

                    {workloadHours !== undefined &&
                        workloadHours > 0 && (
                            <div className={styles.detail}>
                                <Clock
                                    size={16}
                                    aria-hidden="true"
                                />

                                <span>
                                    {workloadHours} horas
                                </span>
                            </div>
                        )}
                </div>
            </div>

            <div className={styles.body}>
                <p className={styles.description}>
                    {description}
                </p>

                {skills.length > 0 && (
                    <div className={styles.skills}>
                        <h4 className={styles.sectionTitle}>
                            Competências desenvolvidas
                        </h4>

                        <ul
                            className={styles.skillList}
                            role="list"
                        >
                            {skills.map((skill) => (
                                <li key={skill}>
                                    <Badge
                                        variant="outline"
                                        size="sm"
                                        className={styles.skillBadge}
                                    >
                                        {skill}
                                    </Badge>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {(credential?.id || credential?.url) && (
                    <div className={styles.credential}>
                        <h4 className={styles.sectionTitle}>
                            Credencial
                        </h4>

                        {credential.id && (
                            <p className={styles.credentialId}>
                                ID: {credential.id}
                            </p>
                        )}

                        {credential.url && (
                            <a
                                href={credential.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Ver credencial

                                <ExternalLink
                                    size={14}
                                    aria-hidden="true"
                                />

                                <span className={styles.srOnly}>
                                    {" (abre em nova aba)"}
                                </span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
}