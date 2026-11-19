import type {
    ComponentPropsWithoutRef,
    ReactNode,
} from "react";

import styles from "./Button.module.css";

export interface ButtonProps
    extends ComponentPropsWithoutRef<"button"> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    leftIcon,
    rightIcon,
    className,
    type = "button",
    ...props
}: ButtonProps) {
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type={type}
            className={classes}
            {...props}
        >
            {leftIcon && (
                <span className={styles.icon} aria-hidden="true">
                    {leftIcon}
                </span>
            )}

            {children}

            {rightIcon && (
                <span className={styles.icon} aria-hidden="true">
                    {rightIcon}
                </span>
            )}
        </button>
    );
}
