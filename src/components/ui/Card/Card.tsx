import type { ComponentPropsWithoutRef } from "react";

import styles from "./Card.module.css";

export interface CardProps
    extends ComponentPropsWithoutRef<"div"> {
    variant?: "default" | "outlined" | "elevated";
    padding?: "none" | "sm" | "md" | "lg";
    hoverable?: boolean;
}

export function Card({
    children,
    variant = "default",
    padding = "md",
    hoverable = false,
    className,
    ...props
}: CardProps) {
    const classes = [
        styles.card,
        styles[variant],
        styles[padding],
        hoverable && styles.hoverable,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}
