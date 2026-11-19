import type { Experience } from "@/types/experience";

export const experiences: readonly Experience[] = [
    {
        id: "fullstack-developer",

        title: "Desenvolvedor Full Stack",

        organization: "Projetos independentes",

        location: "São Paulo, SP — Brasil",

        category: "independent",

        icon: "code",

        period: {
            start: "2021-08",
            end: null,
        },

        description:
            "Desenvolvimento de projetos independentes e aplicações de software, abrangendo frontend, backend, bancos de dados e qualidade de código.",

        responsibilities: [
            "Desenvolvimento de interfaces web responsivas e componentizadas.",
            "Construção e integração de APIs REST.",
            "Modelagem e integração de bancos de dados relacionais.",
            "Implementação de autenticação e autorização de usuários.",
            "Desenvolvimento de testes automatizados.",
            "Versionamento de código com Git e GitHub.",
            "Desenvolvimento de aplicações web e mobile.",
        ],

        skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "PostgreSQL",
            "Prisma",
            "Docker",
            "Jest",
            "Git",
        ],
    },

    {
        id: "municipal-health",

        title: "Funcionário de Saúde",

        organization:
            "Secretaria Municipal de Saúde de Belém",

        location: "Belém, PA — Brasil",

        category: "professional",

        icon: "users",

        period: {
            start: "2012-12",
            end: "2016-06",
        },

        description:
            "Atuação como supervisor de equipe da localidade DAICO.",

        responsibilities: [
            "Supervisão de equipe.",
        ],

        skills: [
            "Liderança",
            "Supervisão de equipes",
            "Organização",
            "Comunicação",
        ],
    },

    {
        id: "ibge",

        title: "Agente Censitário",

        organization:
            "Instituto Brasileiro de Geografia e Estatística (IBGE)",

        location: "Belém, PA — Brasil",

        category: "professional",

        icon: "chart",

        period: {
            start: "2008-11",
            end: "2010-12",
        },

        description:
            "Atuação como supervisor de equipe de setor urbano.",

        responsibilities: [
            "Supervisão de equipe de setor urbano.",
        ],

        skills: [
            "Supervisão de equipes",
            "Coleta de dados",
            "Planejamento",
            "Organização",
        ],
    },

    {
        id: "museum-research",

        title: "Bolsista de Iniciação Científica",

        organization:
            "Museu Paraense Emílio Goeldi (MPEG)",

        location: "Belém, PA — Brasil",

        category: "research",

        icon: "microscope",

        period: {
            start: "2003-04",
            end: "2008-12",
        },

        description:
            "Estágio em pesquisa no Departamento de Zoologia, na área de Curadoria de Entomologia.",

        responsibilities: [
            "Atuação em pesquisa científica na área de Curadoria de Entomologia.",
        ],

        skills: [
            "Pesquisa científica",
            "Capacidade analítica",
            "Metodologia científica",
            "Organização",
        ],
    },
];