import {
    Database,
    FlaskConical,
    Monitor,
    Network,
    Server,
    ShieldCheck,
    Smartphone,
    Terminal,
    type LucideIcon,
} from "lucide-react";

import {
    Badge,
    Card,
} from "@/components/ui";

import type {
    SkillCategory,
    SkillCategoryIcon,
} from "@/types/skill";

import styles from "./SkillCategoryCard.module.css";

interface SkillCategoryCardProps {
    category: SkillCategory;
}

const categoryIcons: Record<
    SkillCategoryIcon,
    LucideIcon
> = {
    monitor: Monitor,
    server: Server,
    database: Database,
    smartphone: Smartphone,
    flask: FlaskConical,
    terminal: Terminal,
    shield: ShieldCheck,
    network: Network,
};

export function SkillCategoryCard({
    category,
}: SkillCategoryCardProps) {
    const {
        id,
        icon,
        title,
        description,
        skills,
    } = category;

    const Icon = categoryIcons[icon];

    const skillCount = skills.length;

    const skillCountLabel =
        skillCount === 1
            ? "1 competência"
            : `${skillCount} competências`;

    return (
        <Card
            variant="default"
            padding="md"
            hoverable
            className={styles.card}
        >
            <div className={styles.header}>
                <div
                    className={styles.icon}
                    aria-hidden="true"
                >
                    <Icon size={26} />
                </div>

                <div className={styles.heading}>
                    <h3
                        id={`skill-category-${id}`}
                        className={styles.title}
                    >
                        {title}
                    </h3>

                    <p className={styles.count}>
                        {skillCountLabel}
                    </p>
                </div>
            </div>

            <p className={styles.description}>
                {description}
            </p>

            {skills.length > 0 && (
                <ul
                    className={styles.skillList}
                    aria-labelledby={`skill-category-${id}`}
                    role="list"
                >
                    {skills.map((skill) => (
                        <li
                            key={skill.id}
                            className={styles.skillItem}
                        >
                            <Badge
                                variant="outline"
                                size="sm"
                                className={styles.skillBadge}
                            >
                                {skill.name}
                            </Badge>
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
}