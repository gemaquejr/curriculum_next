import type { ReactNode } from "react";

import {
    ArrowUpRight,
    Download,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

import styles from "./ContactCard.module.css";

interface ContactCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    actionLabel: string;
    detail?: string;
    external?: boolean;
    download?: boolean;
    children?: ReactNode;
}

export function ContactCard({
    title,
    description,
    icon,
    href,
    actionLabel,
    detail,
    external = false,
    download = false,
    children,
}: ContactCardProps) {
    return (
        <Card
            variant="outlined"
            padding="lg"
            className={styles.card}
        >
            <div
                className={styles.icon}
                aria-hidden="true"
            >
                {icon}
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>
                    {title}
                </h3>

                <p className={styles.description}>
                    {description}
                </p>

                {detail && (
                    <p className={styles.detail}>
                        {detail}
                    </p>
                )}
            </div>

            <div className={styles.actions}>
                <a
                    href={href}
                    className={styles.link}
                    target={
                        external
                            ? "_blank"
                            : undefined
                    }
                    rel={
                        external
                            ? "noopener noreferrer"
                            : undefined
                    }
                    download={download || undefined}
                    aria-label={
                        external
                            ? `${actionLabel} — abre em nova aba`
                            : undefined
                    }
                >
                    {actionLabel}

                    {download ? (
                        <Download
                            size={18}
                            aria-hidden="true"
                        />
                    ) : (
                        <ArrowUpRight
                            size={18}
                            aria-hidden="true"
                        />
                    )}
                </a>

                {children}
            </div>
        </Card>
    );
}