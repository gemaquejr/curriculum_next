import styles from "./SectionHeading.module.css";

export interface SectionHeadingProps {
    id: string;
    title: string;
    eyebrow?: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    id,
    title,
    eyebrow,
    subtitle,
    align = "left",
    className,
}: SectionHeadingProps) {
    const classes = [
        styles.heading,
        styles[align],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <header className={classes}>
            {eyebrow && (
                <p className={styles.eyebrow}>
                    {eyebrow}
                </p>
            )}

            <h2
                id={id}
                className={styles.title}
            >
                {title}
            </h2>

            {subtitle && (
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            )}

            <span
                className={styles.accent}
                aria-hidden="true"
            />
        </header>
    );
}