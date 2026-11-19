import type {
    EducationContent,
} from "@/types/education";

export const education: EducationContent = {
    eyebrow: "Conhecimento e qualificação",

    title: "Formação acadêmica",

    subtitle:
        "Uma formação multidisciplinar conectando engenharia, tecnologia e aprendizado contínuo.",

    items: [
        {
            id: "trybe-fullstack",

            title: "Desenvolvimento Web Full Stack",

            institution: "Trybe",

            category: "professional",

            status: "completed",

            icon: "code",

            period: {
                end: "2022",
            },

            description:
                "Formação em desenvolvimento web Full Stack, abrangendo fundamentos de programação, frontend, backend, bancos de dados e práticas de desenvolvimento de software.",

            skills: [
                "JavaScript",
                "React",
                "Node.js",
                "SQL",
                "Testes automatizados",
                "Git",
            ],
        },

        {
            id: "ufra-agronomy",

            title: "Engenharia Agronômica",

            institution:
                "Universidade Federal Rural da Amazônia (UFRA)",

            category: "degree",

            status: "completed",

            icon: "graduation",

            location: "Belém, PA — Brasil",

            description:
                "Formação superior em engenharia, com desenvolvimento de competências em pesquisa científica, pensamento analítico, planejamento, metodologia científica e resolução de problemas.",

            skills: [
                "Engenharia",
                "Pesquisa científica",
                "Pensamento analítico",
                "Planejamento",
                "Metodologia científica",
                "Resolução de problemas",
            ],
        },
    ],
};