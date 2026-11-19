import type {
    EducationContent,
} from "@/types/education";

export const education: EducationContent = {
    eyebrow: "Conhecimento e qualificação",

    title: "Formação acadêmica e certificações",

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
                end: "2023-04",
            },

            workloadHours: 1500,

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

            period: {
                end: "2012",
            },

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

        {
            id: "azure-ai-fundamentals",
            title: "Microsoft Certified: Azure AI Fundamentals",
            institution: "Microsoft",
            category: "certification",
            status: "completed",
            icon: "award",

            period: {
                end: "2024",
            },

            description:
                "Certificação em fundamentos de inteligência artificial e serviços de IA do Microsoft Azure.",

            skills: [
                "Microsoft Azure",
                "Inteligência artificial",
                "Fundamentos de Machine Learning",
            ],
        },

        {
            id: "aws-generative-ai",
            title: "Bootcamp — IA generativa com AWS",
            institution: "Instituição não informada",
            category: "course",
            status: "completed",
            icon: "book",

            period: {
                end: "2024",
            },

            description:
                "Formação complementar em inteligência artificial generativa com tecnologias AWS.",

            skills: [
                "Inteligência artificial generativa",
                "AWS",
            ],
        },

        {
            id: "ai-practice",
            title: "IA na prática",
            institution: "Instituição não informada",
            category: "course",
            status: "completed",
            icon: "book",

            period: {
                end: "2024",
            },

            description:
                "Curso complementar voltado à aplicação prática de inteligência artificial.",

            skills: [
                "Inteligência artificial",
            ],
        },

        {
            id: "aws-localizalabs",
            title: "Bootcamp — Descubra a nuvem AWS",
            institution: "LocalizaLabs",
            category: "course",
            status: "completed",
            icon: "book",

            period: {
                end: "2023",
            },

            description:
                "Formação complementar em fundamentos de computação em nuvem com AWS.",

            skills: [
                "AWS",
                "Cloud Computing",
            ],
        },

        {
            id: "java-course",
            title: "Curso de Java",
            institution: "Instituição não informada",
            category: "course",
            status: "completed",
            icon: "code",

            period: {
                end: "2023",
            },

            description:
                "Formação complementar na linguagem de programação Java.",

            skills: [
                "Java",
            ],
        },

        {
            id: "santander-java-angular",
            title: "Santander Bootcamp — Fullstack Java + Angular",
            institution: "Santander Bootcamp",
            category: "course",
            status: "completed",
            icon: "code",

            period: {
                end: "2023",
            },

            description:
                "Formação complementar em desenvolvimento Full Stack utilizando Java e Angular.",

            skills: [
                "Java",
                "Angular",
                "Desenvolvimento Full Stack",
            ],
        },
    ],
};