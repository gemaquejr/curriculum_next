import {
    ArrowRight,
    Download,
    Mail,
} from "lucide-react";

import { profile } from "@/data/profile";

import styles from "./HeroActions.module.css";

export function HeroActions() {
    return (
        <div className={styles.actions}>
            <a
                href="#projects"
                className={`${styles.action} ${styles.primary}`}
            >
                Conheça meus projetos

                <ArrowRight
                    size={20}
                    aria-hidden="true"
                />
            </a>

            {profile.resumeUrl ? (
                <a
                    href={profile.resumeUrl}
                    className={`${styles.action} ${styles.secondary}`}
                    download
                >
                    <Download
                        size={20}
                        aria-hidden="true"
                    />

                    Baixar currículo
                </a>
            ) : (
                <a
                    href="#contact"
                    className={`${styles.action} ${styles.secondary}`}
                >
                    <Mail
                        size={20}
                        aria-hidden="true"
                    />

                    Entre em contato
                </a>
            )}
        </div>
    );
}