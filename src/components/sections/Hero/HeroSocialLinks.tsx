import { profile } from "@/data/profile";

import { SocialIcon } from "@/components/ui/SocialIcon";

import styles from "./HeroSocialLinks.module.css";

export function HeroSocialLinks() {
    if (profile.socialLinks.length === 0) {
        return null;
    }

    return (
        <ul
            className={styles.socialLinks}
            aria-label="Redes profissionais"
        >
            {profile.socialLinks.map((link) => {
                const isExternal =
                    link.href.startsWith("https://");

                return (
                    <li key={link.platform}>
                        <a
                            href={link.href}
                            className={styles.link}
                            target={
                                isExternal
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                isExternal
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            aria-label={
                                isExternal
                                    ? `${link.label} — abre em nova aba`
                                    : link.label
                            }
                            title={link.label}
                        >
                            <SocialIcon
                                platform={link.platform}
                                size={21}
                            />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}