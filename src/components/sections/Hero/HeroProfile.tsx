import Image from "next/image";

import { profile } from "@/data/profile";

import styles from "./HeroProfile.module.css";

export function HeroProfile() {
    return (
        <div className={styles.profile}>
            <div className={styles.frame}>
                {profile.image ? (
                    <Image
                        src={profile.image.src}
                        alt={profile.image.alt}
                        width={profile.image.width}
                        height={profile.image.height}
                        sizes="(max-width: 767px) 220px, 360px"
                        className={styles.image}
                    />
                ) : (
                    <div
                        className={styles.avatar}
                        aria-hidden="true"
                    >
                        <span className={styles.initials}>
                            {profile.initials}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}