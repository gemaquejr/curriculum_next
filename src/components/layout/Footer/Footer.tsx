import Link from "next/link";

import {
    ArrowUp,
    Download,
    MapPin,
    QrCode,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

import { SocialIcon } from "@/components/ui/SocialIcon";

import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";

import styles from "./Footer.module.css";

import { siteConfig } from "@/config/site";

const footerNavigationItems = [
    ...navigationItems.filter(
        (item) => item.id !== "contact",
    ),
    {
        id: "share",
        label: "Compartilhamento",
        href: "#share",
    },
    ...navigationItems.filter(
        (item) => item.id === "contact",
    ),
];

export function Footer() {
    const location = [
        `${profile.location.city}, ${profile.location.state}`,
        profile.location.country,
    ].join(" — ");

    return (
        <footer
            id="site-footer"
            className={styles.footer}
        >
            <Container>
                <div className={styles.content}>
                    <div className={styles.grid}>
                        <div className={styles.identity}>
                            <Link
                                href="/#home"
                                className={styles.brand}
                                aria-label={`${profile.name} — Página inicial`}
                            >
                                <span
                                    className={styles.logo}
                                    aria-hidden="true"
                                >
                                    {profile.initials}
                                </span>

                                <span className={styles.brandIdentity}>
                                    <span className={styles.name}>
                                        {profile.name}
                                    </span>

                                    <span className={styles.professionalTitle}>
                                        {profile.title}
                                    </span>
                                </span>
                            </Link>

                            <p className={styles.description}>
                                Currículo digital e portfólio profissional.
                                Conheça minha trajetória, competências
                                e projetos na área de tecnologia.
                            </p>

                            <div className={styles.location}>
                                <MapPin
                                    size={18}
                                    aria-hidden="true"
                                />

                                <span>{location}</span>
                            </div>
                        </div>

                        <nav
                            className={styles.navigation}
                            aria-label="Navegação do rodapé"
                        >
                            <h2 className={styles.heading}>
                                Navegação
                            </h2>

                            <ul
                                className={styles.navigationList}
                                role="list"
                            >
                                {footerNavigationItems.map(
                                    (item) => (
                                        <li key={item.id}>
                                            <Link
                                                href={`/${item.href}`}
                                                className={styles.navigationLink}
                                            >
                                                {"shortLabel" in item
                                                    ? item.shortLabel ?? item.label
                                                    : item.label}
                                            </Link>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </nav>

                        <div className={styles.connections}>
                            <h2 className={styles.heading}>
                                Conecte-se
                            </h2>

                            {profile.socialLinks.length > 0 && (
                                <ul
                                    className={styles.socialLinks}
                                    aria-label="Redes profissionais"
                                    role="list"
                                >
                                    {profile.socialLinks.map(
                                        (link) => {
                                            const isExternal =
                                                link.href.startsWith(
                                                    "https://",
                                                );

                                            return (
                                                <li key={link.platform}>
                                                    <a
                                                        href={link.href}
                                                        className={styles.socialLink}
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
                                                            platform={
                                                                link.platform
                                                            }
                                                            size={21}
                                                        />
                                                    </a>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            )}

                            <div className={styles.actions}>
                                {profile.resumeUrl && (
                                    <a
                                        href={profile.resumeUrl}
                                        className={styles.actionLink}
                                        download
                                    >
                                        <Download
                                            size={18}
                                            aria-hidden="true"
                                        />

                                        Baixar currículo
                                    </a>
                                )}

                                <Link
                                    href="/#share"
                                    className={styles.actionLink}
                                >
                                    <QrCode
                                        size={18}
                                        aria-hidden="true"
                                    />

                                    Compartilhar perfil
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.credits}>
                            <p className={styles.copyright}>
                                © {siteConfig.copyrightYear} {profile.name}.
                                Todos os direitos reservados.
                            </p>

                            <p className={styles.developedWith}>
                                Desenvolvido com Next.js e TypeScript.
                            </p>
                        </div>

                        <Link
                            href="/#home"
                            className={styles.backToTop}
                            aria-label="Voltar ao início da página"
                            title="Voltar ao início"
                        >
                            <ArrowUp
                                size={22}
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}