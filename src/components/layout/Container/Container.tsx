import type { ComponentPropsWithoutRef } from "react";

import styles from "./Container.module.css";

export interface ContainerProps
    extends ComponentPropsWithoutRef<"div"> {
    size?: "sm" | "md" | "lg" | "full";
}

export function Container({
    children,
    size = "lg",
    className,
    ...props
}: ContainerProps) {
    const classes = [
        styles.container,
        styles[size],
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
