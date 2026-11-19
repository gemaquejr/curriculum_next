import {
    FileText,
    MapPin,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

import {
    Badge,
    SectionHeading,
    SocialIcon,
} from "@/components/ui";

import { profile } from "@/data/profile";

import { ContactCard } from "./ContactCard";

import { CopyEmailButton } from "./CopyEmailButton";

import styles from "./Contact.module.css";

export function Contact() {
    const emailLink = profile.socialLinks.find(
        (link) => link.platform === "email",
    );

    const linkedinLink = profile.socialLinks.find(
        (link) => link.platform === "linkedin",
    );

    const githubLink = profile.socialLinks.find(
        (link) => link.platform === "github",
    );

    const email =
        emailLink?.href
            .replace(/^mailto:/i, "")
            .split("?")[0] ?? "";

    const location = [
        `${profile.location.city}, ${profile.location.state}`,
        profile.location.country,
    ].join(" — ");

    return (
        <section
            id="contact"
            tabIndex={-1}
            aria-labelledby="contact-title"
            className={styles.contact}
        >
            <Container>
                <div className={styles.content}>
                    <SectionHeading
                        id="contact-title"
                        eyebrow="Contato"
                        title="Vamos construir algo juntos?"
                        subtitle={
                            profile.availability.isAvailable
                                ? "Estou disponível para oportunidades profissionais, novos projetos e conexões na área de tecnologia."
                                : "Conheça meus canais profissionais e entre em contato."
                        }
                        align="center"
                    />

                    <div className={styles.availability}>
                        <Badge
                            variant={
                                profile.availability.isAvailable
                                    ? "success"
                                    : "default"
                            }
                            size="md"
                        >
                            <span className={styles.availabilityLabel}>
                                <span
                                    className={[
                                        styles.indicator,
                                        profile.availability.isAvailable
                                            ? styles.available
                                            : styles.unavailable,
                                    ].join(" ")}
                                    aria-hidden="true"
                                />

                                {profile.availability.label}
                            </span>
                        </Badge>
                    </div>

                    <ul
                        className={styles.grid}
                        aria-label="Canais de contato profissional"
                        role="list"
                    >
                        {emailLink && email && (
                            <li className={styles.item}>
                                <ContactCard
                                    title="E-mail"
                                    description="Entre em contato diretamente para conversar sobre oportunidades profissionais."
                                    detail={email}
                                    icon={
                                        <SocialIcon
                                            platform="email"
                                            size={28}
                                        />
                                    }
                                    href={emailLink.href}
                                    actionLabel="Enviar e-mail"
                                >
                                    <CopyEmailButton
                                        email={email}
                                    />
                                </ContactCard>
                            </li>
                        )}

                        {linkedinLink && (
                            <li className={styles.item}>
                                <ContactCard
                                    title="LinkedIn"
                                    description="Conheça minha trajetória, acompanhe minhas experiências e conecte-se profissionalmente."
                                    icon={
                                        <SocialIcon
                                            platform="linkedin"
                                            size={28}
                                        />
                                    }
                                    href={linkedinLink.href}
                                    actionLabel="Visitar perfil"
                                    external
                                />
                            </li>
                        )}

                        {githubLink && (
                            <li className={styles.item}>
                                <ContactCard
                                    title="GitHub"
                                    description="Explore meus projetos, repositórios e implementações de código."
                                    icon={
                                        <SocialIcon
                                            platform="github"
                                            size={28}
                                        />
                                    }
                                    href={githubLink.href}
                                    actionLabel="Ver repositórios"
                                    external
                                />
                            </li>
                        )}

                        {profile.resumeUrl && (
                            <li className={styles.item}>
                                <ContactCard
                                    title="Currículo"
                                    description="Baixe meu currículo profissional com experiências, formação e competências técnicas."
                                    icon={
                                        <FileText size={28} />
                                    }
                                    href={profile.resumeUrl}
                                    actionLabel="Baixar PDF"
                                    download
                                />
                            </li>
                        )}
                    </ul>

                    <div className={styles.location}>
                        <MapPin
                            size={20}
                            aria-hidden="true"
                        />

                        <span>{location}</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}