import type { ComponentPropsWithoutRef } from "react";

import styles from "./Badge.module.css";

export interface BadgeProps
    extends ComponentPropsWithoutRef<"span"> {
    variant?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "outline";

    size?: "sm" | "md" | "lg";
}

export function Badge({
    children,
    variant = "default",
    size = "md",
    className,
    ...props
}: BadgeProps) {
    const classes = [
        styles.badge,
        styles[variant],
        styles[size],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
}
