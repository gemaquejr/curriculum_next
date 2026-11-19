import type { Profile } from "@/types/profile";

export const profile: Profile = {
    name: "Francisco Gemaque",

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
    ],
};