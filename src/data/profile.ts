import type { Profile } from "@/types/profile";

export const profile: Profile = {
    name: "Francisco Espíndola Gemaque Junior",

    initials: "FG",

    title: "Desenvolvedor Full Stack",

    greeting: "Olá, eu sou",

    summary:
        "Desenvolvo aplicações web completas, integrando interfaces modernas, APIs e bancos de dados, com foco em qualidade de código e soluções para problemas reais.",

    location: {
        city: "São Paulo",
        state: "SP",
        country: "Brasil",
    },

    availability: {
        isAvailable: true,
        label: "Disponível para oportunidades",
    },

    technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Python",
        "PostgreSQL",
    ],

    socialLinks: [
        {
            platform: "github",
            label: "GitHub",
            href: "https://github.com/gemaquejr",
        },
        {
            platform: "linkedin",
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/gemaquejr",
        },
        {
            platform: "email",
            label: "E-mail",
            href: "mailto:gemaquejr@hotmail.com",
        },
    ],

    resumeUrl: "/documents/francisco-gemaque-curriculo.pdf",
};