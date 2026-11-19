export const siteConfig = {
    name: "Francisco Espíndola Gemaque Junior",

    title: "Desenvolvedor Full Stack",

    url: "https://francisco-gemaque.vercel.app",

    locale: "pt-BR",

    description:
        "Currículo digital e portfólio profissional de Francisco Espíndola Gemaque Junior, desenvolvedor Full Stack.",

    qrCode: {
        svgPath: "/images/qrcode/curriculum.svg",

        pngPath: "/images/qrcode/curriculum.png",

        pngWidth: 1024,

        margin: 4,

        errorCorrectionLevel: "M",

        colors: {
            dark: "#000000",
            light: "#FFFFFF",
        },
    },
} as const;