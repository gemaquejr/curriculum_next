import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigationItems } from "@/data/navigation";
import type { SectionId } from "@/types/navigation";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
    activeSection: SectionId;
    onNavigate: (section: SectionId) => void;
}

export function MobileMenu({
    activeSection,
    onNavigate,
}: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown,
            );
        };
    }, [isOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(min-width: 1024px)",
        );

        function handleResize(event: MediaQueryListEvent) {
            if (event.matches) {
                setIsOpen(false);
            }
        }

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener(
                "change",
                handleResize,
            );
        };
    }, []);

    function handleNavigate(section: SectionId) {
        onNavigate(section);
        setIsOpen(false);

        document.getElementById(section)?.focus({
            preventScroll: true,
        });
    }

    return (
        <div className={styles.mobileMenu}>
            <button
                ref={buttonRef}
                type="button"
                className={styles.toggle}
                aria-label={
                    isOpen ? "Fechar menu" : "Abrir menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen((previous) => !previous)}
            >
                {isOpen ? (
                    <X size={24} aria-hidden="true" />
                ) : (
                    <Menu size={24} aria-hidden="true" />
                )}
            </button>

            <nav
                id="mobile-navigation"
                className={styles.navigation}
                aria-label="Navegação mobile"
                hidden={!isOpen}
            >
                <ul className={styles.list}>
                    {navigationItems.map((item) => {
                        const isActive = activeSection === item.id;

                        return (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className={[
                                        styles.link,
                                        isActive && styles.active,
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    onClick={() =>
                                        handleNavigate(item.id)
                                    }
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}