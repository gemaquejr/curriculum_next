import { navigationItems } from "@/data/navigation";
import type { SectionId } from "@/types/navigation";

import styles from "./Navigation.module.css";

interface NavigationProps {
    activeSection: SectionId;
    onNavigate: (section: SectionId) => void;
}

export function Navigation({
    activeSection,
    onNavigate,
}: NavigationProps) {
    return (
        <nav
            className={styles.navigation}
            aria-label="Navegação principal"
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
                                onClick={() => onNavigate(item.id)}
                            >
                                {item.shortLabel ?? item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}