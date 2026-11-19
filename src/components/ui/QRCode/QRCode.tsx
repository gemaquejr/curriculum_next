import Image from "next/image";

import styles from "./QRCode.module.css";

export interface QRCodeProps {
    src: string;
    alt: string;
    size?: number;
    caption?: string;
    className?: string;
}

export function QRCode({
    src,
    alt,
    size = 240,
    caption,
    className,
}: QRCodeProps) {
    const classes = [
        styles.figure,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <figure className={classes}>
            <div className={styles.frame}>
                <Image
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className={styles.image}
                    unoptimized
                />
            </div>

            {caption && (
                <figcaption
                    className={styles.caption}
                >
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}