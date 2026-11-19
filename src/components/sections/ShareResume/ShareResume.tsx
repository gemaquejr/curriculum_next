import {
    Download,
    FileImage,
    QrCode,
} from "lucide-react";

import { Container } from "@/components/layout";

import {
    Card,
    QRCode,
    SectionHeading,
} from "@/components/ui";

import { siteConfig } from "@/config/site";

import { ShareActions } from "./ShareActions";

import styles from "./ShareResume.module.css";

export function ShareResume() {
    const { url, qrCode } = siteConfig;

    return (
        <section
            id="share"
            tabIndex={-1}
            aria-labelledby="share-title"
            className={styles.section}
        >
            <Container>
                <div className={styles.content}>
                    <SectionHeading
                        id="share-title"
                        eyebrow="Compartilhe meu perfil"
                        title="Meu currículo sempre à mão"
                        subtitle="Acesse meu currículo digital pelo celular ou compartilhe meu perfil profissional com sua rede de contatos."
                    />

                    <Card
                        variant="outlined"
                        padding="lg"
                        className={styles.card}
                    >
                        <div className={styles.grid}>
                            <div className={styles.qrArea}>
                                <QRCode
                                    src={qrCode.svgPath}
                                    alt="QR Code para acessar meu currículo digital"
                                    size={240}
                                    caption="Escaneie com a câmera do seu celular."
                                />

                                <div
                                    className={
                                        styles.downloads
                                    }
                                >
                                    <a
                                        href={qrCode.pngPath}
                                        download="curriculo-qrcode.png"
                                        className={
                                            styles.downloadLink
                                        }
                                    >
                                        <FileImage
                                            size={18}
                                            aria-hidden="true"
                                        />

                                        Baixar PNG
                                    </a>

                                    <a
                                        href={qrCode.svgPath}
                                        download="curriculo-qrcode.svg"
                                        className={
                                            styles.downloadLink
                                        }
                                    >
                                        <Download
                                            size={18}
                                            aria-hidden="true"
                                        />

                                        Baixar SVG
                                    </a>
                                </div>
                            </div>

                            <div
                                className={styles.shareArea}
                            >
                                <div
                                    className={
                                        styles.introduction
                                    }
                                >
                                    <span
                                        className={styles.icon}
                                        aria-hidden="true"
                                    >
                                        <QrCode size={26} />
                                    </span>

                                    <h3
                                        className={styles.title}
                                    >
                                        Compartilhe meu currículo
                                    </h3>

                                    <p
                                        className={
                                            styles.description
                                        }
                                    >
                                        Utilize o endereço abaixo
                                        para compartilhar minhas
                                        experiências, competências
                                        e projetos profissionais.
                                    </p>
                                </div>

                                <ShareActions
                                    url={url}
                                    title={
                                        `${siteConfig.name} | ${siteConfig.title}`
                                    }
                                    description={
                                        siteConfig.description
                                    }
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
        </section>
    );
}