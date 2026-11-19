import type { AboutContent } from "@/types/about";

export const about: AboutContent = {
    eyebrow: "Minha trajetória",

    title: "Sobre mim",

    subtitle:
        "Formação multidisciplinar, desenvolvimento de software e aprendizado contínuo.",

    paragraphs: [
        "Sou desenvolvedor Full Stack e engenheiro agrônomo de formação pela Universidade Federal Rural da Amazônia (UFRA), onde concluí minha graduação em 2012. Realizei minha transição de carreira para a tecnologia, complementando minha formação com o curso de Desenvolvimento Web Full Stack da Trybe, com carga horária de 1.500 horas, concluído em abril de 2023.",

        "Desde 2021, venho desenvolvendo projetos independentes, utilizando tecnologias como JavaScript, TypeScript, React, Next.js, Node.js, Python e PostgreSQL.",

        "Minha trajetória profissional reúne experiências em pesquisa científica, supervisão de equipes, capacidade analítica e resolução de problemas, competências que aplico atualmente no desenvolvimento de software.",

        "Busco uma oportunidade na área de tecnologia para contribuir com soluções eficientes, colaborar com equipes de desenvolvimento e continuar evoluindo profissionalmente.",
    ],

    highlights: [
        {
            id: "fullstack",
            icon: "code",
            title: "Desenvolvimento Full Stack",
            description:
                "Construção de aplicações, desde a interface até o banco de dados.",
        },
        {
            id: "architecture",
            icon: "layers",
            title: "Arquitetura de software",
            description:
                "Componentização, organização de código e separação de responsabilidades.",
        },
        {
            id: "leadership",
            icon: "users",
            title: "Liderança e colaboração",
            description:
                "Experiência anterior em supervisão de equipes.",
        },
        {
            id: "analytical-thinking",
            icon: "science",
            title: "Pensamento analítico",
            description:
                "Formação em engenharia e experiência em pesquisa científica.",
        },
        {
            id: "quality",
            icon: "shield",
            title: "Qualidade de software",
            description:
                "Testes automatizados, boas práticas e segurança de aplicações.",
        },
        {
            id: "learning",
            icon: "book",
            title: "Aprendizado contínuo",
            description:
                "Estudo e aplicação prática de novas tecnologias.",
        },
    ],
};