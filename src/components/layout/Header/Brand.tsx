import { profile } from "@/data/profile";

import styles from "./Brand.module.css";

export function Brand() {
    return (
        <a
            href="#home"
            className={styles.brand}
            aria-label={`${profile.name} — Página inicial`}
        >
            <span
                className={styles.logo}
                aria-hidden="true"
            >
                {profile.initials}
            </span>

            <span className={styles.identity}>
                <span className={styles.name}>
                    {profile.name}
                </span>

                <span className={styles.title}>
                    {profile.title}
                </span>
            </span>
        </a>
    );
}
