import type { ComponentType } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

import { profile } from "@/data/profile";
import type { SocialPlatform } from "@/types/profile";

import styles from "./HeroSocialLinks.module.css";

interface SocialIconProps {
    size?: number;
    "aria-hidden"?: boolean;
}

const platformIcons: Record<
    SocialPlatform,
    ComponentType<SocialIconProps>
> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: Mail,
};

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
                const Icon = platformIcons[link.platform];

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
                            <Icon
                                size={21}
                                aria-hidden={true}
                            />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}