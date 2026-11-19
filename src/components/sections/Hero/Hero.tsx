import { MapPin } from "lucide-react";

import { Container } from "@/components/layout";
import { Badge } from "@/components/ui";

import { profile } from "@/data/profile";

import { HeroActions } from "./HeroActions";
import { HeroProfile } from "./HeroProfile";
import { HeroSocialLinks } from "./HeroSocialLinks";

import styles from "./Hero.module.css";

export function Hero() {
    const {
        name,
        greeting,
        title,
        summary,
        availability,
        technologies,
        location,
    } = profile;

    return (
        <section
            id="home"
            tabIndex={-1}
            aria-labelledby="home-title"
            className={styles.hero}
        >
            <Container>
                <div className={styles.content}>
                    <div className={styles.information}>
                        {availability.isAvailable && (
                            <div className={styles.availability}>
                                <span
                                    className={styles.statusIndicator}
                                    aria-hidden="true"
                                />

                                <span>
                                    {availability.label}
                                </span>
                            </div>
                        )}

                        <div className={styles.heading}>
                            <p className={styles.greeting}>
                                {greeting}
                            </p>

                            <h1
                                id="home-title"
                                className={styles.name}
                            >
                                {name}
                            </h1>

                            <p className={styles.title}>
                                {title}
                            </p>
                        </div>

                        <p className={styles.summary}>
                            {summary}
                        </p>

                        <ul
                            className={styles.technologies}
                            aria-label="Principais tecnologias"
                        >
                            {technologies.map(
                                (technology) => (
                                    <li key={technology}>
                                        <Badge variant="outline">
                                            {technology}
                                        </Badge>
                                    </li>
                                ),
                            )}
                        </ul>

                        <HeroActions />

                        <div className={styles.details}>
                            <HeroSocialLinks />

                            <div className={styles.location}>
                                <MapPin
                                    size={18}
                                    aria-hidden="true"
                                />

                                <span>
                                    {location.city}, {location.state}
                                    {" — "}
                                    {location.country}
                                </span>
                            </div>
                        </div>
                    </div>

                    <HeroProfile />
                </div>
            </Container>
        </section>
    );
}