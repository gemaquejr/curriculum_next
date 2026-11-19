import {
    BookOpen,
    CodeXml,
    FlaskConical,
    Layers,
    ShieldCheck,
    Users,
    type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui";

import type {
    AboutHighlight,
    AboutHighlightIcon,
} from "@/types/about";

import styles from "./AboutHighlights.module.css";

interface AboutHighlightsProps {
    highlights: readonly AboutHighlight[];
}

const highlightIcons: Record<
    AboutHighlightIcon,
    LucideIcon
> = {
    code: CodeXml,
    layers: Layers,
    users: Users,
    science: FlaskConical,
    shield: ShieldCheck,
    book: BookOpen,
};

export function AboutHighlights({
    highlights,
}: AboutHighlightsProps) {
    if (highlights.length === 0) {
        return null;
    }

    return (
        <ul
            className={styles.grid}
            aria-label="Diferenciais profissionais"
            role="list"
        >
            {highlights.map((highlight) => {
                const Icon =
                    highlightIcons[highlight.icon];

                return (
                    <li
                        key={highlight.id}
                        className={styles.item}
                    >
                        <Card
                            variant="default"
                            padding="md"
                            hoverable
                            className={styles.card}
                        >
                            <div
                                className={styles.icon}
                                aria-hidden="true"
                            >
                                <Icon size={24} />
                            </div>

                            <h3 className={styles.title}>
                                {highlight.title}
                            </h3>

                            <p
                                className={
                                    styles.description
                                }
                            >
                                {highlight.description}
                            </p>
                        </Card>
                    </li>
                );
            })}
        </ul>
    );
}