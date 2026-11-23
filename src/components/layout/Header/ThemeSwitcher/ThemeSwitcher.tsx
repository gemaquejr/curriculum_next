"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";

import {
    readThemePreference,
    setThemePreference,
    type ThemePreference,
} from "@/lib/theme";

import styles from "./ThemeSwitcher.module.css";

const themeOptions = [
    {
        value: "system",
        label: "Sistema",
        icon: Monitor,
    },
    {
        value: "light",
        label: "Claro",
        icon: Sun,
    },
    {
        value: "dark",
        label: "Escuro",
        icon: Moon,
    },
] as const;

export function ThemeSwitcher() {
    const [theme, setTheme] =
        useState<ThemePreference>("system");

    const [isOpen, setIsOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Sincroniza o controle com a preferência inicial.
        // O script do layout já aplicou o tema visual.
        const initialTheme = readThemePreference();

        // A atualização é adiada para evitar uma alteração
        // síncrona de estado dentro do efeito.
        queueMicrotask(() => {
            setTheme(initialTheme);
        });
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        function handlePointerDown(event: PointerEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(
                    event.target as Node,
                )
            ) {
                setIsOpen(false);
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        }

        document.addEventListener(
            "pointerdown",
            handlePointerDown,
        );

        document.addEventListener(
            "keydown",
            handleKeyDown,
        );

        return () => {
            document.removeEventListener(
                "pointerdown",
                handlePointerDown,
            );

            document.removeEventListener(
                "keydown",
                handleKeyDown,
            );
        };
    }, [isOpen]);

    function handleSelect(preference: ThemePreference) {
        setThemePreference(preference);
        setTheme(preference);
        setIsOpen(false);
        buttonRef.current?.focus();
    }

    const CurrentIcon =
        theme === "light"
            ? Sun
            : theme === "dark"
                ? Moon
                : Monitor;

    return (
        <div
            ref={containerRef}
            className={styles.container}
        >
            <button
                ref={buttonRef}
                type="button"
                className={styles.toggle}
                aria-label={`Alterar tema. Preferência atual: ${themeOptions.find((option) => option.value === theme)?.label
                    }`}
                aria-expanded={isOpen}
                aria-controls="theme-options"
                onClick={() => setIsOpen((previous) => !previous)}
            >
                <CurrentIcon size={20} aria-hidden="true" />
            </button>

            {isOpen && (
                <div
                    id="theme-options"
                    className={styles.menu}
                    aria-label="Preferência de tema"
                >
                    {themeOptions.map((option) => {
                        const Icon = option.icon;
                        const isSelected =
                            theme === option.value;

                        return (
                            <button
                                key={option.value}
                                type="button"
                                className={[
                                    styles.option,
                                    isSelected && styles.selected,
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                aria-pressed={isSelected}
                                onClick={() =>
                                    handleSelect(option.value)
                                }
                            >
                                <Icon
                                    size={18}
                                    aria-hidden="true"
                                />

                                <span>{option.label}</span>

                                {isSelected && (
                                    <Check
                                        size={16}
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}