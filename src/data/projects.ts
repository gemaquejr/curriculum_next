import type {
    ProjectsContent,
} from "@/types/project";

export const projects: ProjectsContent = {
    eyebrow: "Conhecimento aplicado",

    title: "Portfólio de projetos",

    subtitle:
        "Conheça as aplicações desenvolvidas ao longo da minha trajetória na tecnologia, explorando diferentes ferramentas, arquiteturas e soluções de software.",

    items: [
        {
            id: "kurio",

            title: "Kurio — NFT Marketplace",

            subtitle: "Desafio técnico Jungle Gaming",

            description:
                "Marketplace de NFTs desenvolvido como desafio técnico da Jungle Gaming, com foco em arquitetura frontend, fidelidade visual, responsividade, acessibilidade e testes automatizados.",

            category: "marketplace",

            area: "frontend",

            status: "in_development",

            context: "technical_challenge",

            icon: "shopping-bag",

            featured: true,

            order: 1,

            skillIds: [
                "react",
                "typescript",
                "vite",
                "tailwindcss",
                "tanstack-router",
                "tanstack-query",
                "axios",
                "msw",
                "playwright",
                "eslint",
            ],

            additionalTechnologies: [
                "Radix UI",
            ],

            features: [
                "Catálogo de NFTs com filtros combinados.",
                "Ordenação por preço e paginação.",
                "Interfaces responsivas para mobile e desktop.",
                "Integração com APIs simuladas utilizando MSW.",
                "Modal demonstrativo de autenticação e cadastro.",
                "Tratamento de estados de sucesso, erro e resultados vazios.",
            ],

            highlights: [
                "Arquitetura frontend componentizada.",
                "Desenvolvimento orientado por testes automatizados.",
                "Acessibilidade e gerenciamento de foco.",
                "Implementação baseada em design disponibilizado no Figma.",
                "Desafio técnico entregue e projeto em evolução.",
            ],

            limitations: [
                "Autenticação real ainda não integrada.",
                "Catálogo alimentado por dados locais.",
                "Comunicação em tempo real ainda não implementada.",
                "Newsletter sem integração com serviço externo.",
            ],

            metrics: [
                {
                    id: "e2e-tests",

                    label: "Testes E2E aprovados",

                    value: "36",

                    description:
                        "Resultado da última execução da suíte completa documentada no README.",
                },
            ],

            links: {
                repository:
                    "https://github.com/gemaquejr/kurio",

                demo:
                    "https://junglekurio.netlify.app/",

                documentation:
                    "https://github.com/gemaquejr/kurio#readme",
            },
        },

        {
            id: "gemaque-dashboard",

            title: "Gemaque Dashboard",

            subtitle: "Painel administrativo",

            description:
                "Painel administrativo responsivo desenvolvido com React e Material UI, reunindo visualização de dados, gestão de informações, formulários e calendário em uma interface organizada.",

            category: "dashboard",

            area: "frontend",

            status: "completed",

            context: "personal",

            icon: "chart",

            featured: false,

            order: 2,

            skillIds: [
                "react",
                "material-ui",
                "context-api",
            ],

            additionalTechnologies: [
                "Nivo Charts",
                "FullCalendar",
                "Formik",
                "Yup",
                "React Router",
            ],

            features: [
                "Painel de indicadores.",
                "Visualização de equipes e contatos.",
                "Listagem de faturas.",
                "Formulários com validação.",
                "Calendário integrado.",
                "Gráficos de linhas, barras e geográficos.",
                "Alternância entre temas claro e escuro.",
            ],

            highlights: [
                "Visualização de dados com Nivo Charts.",
                "Componentização de interfaces administrativas.",
                "Gerenciamento de tema com Context API.",
            ],

            limitations: [
                "Utiliza dados simulados em JSON.",
            ],

            links: {
                repository:
                    "https://github.com/gemaquejr/react-gemaque-dashboard",

                demo:
                    "https://gemaque-dashboard.netlify.app/",

                documentation:
                    "https://github.com/gemaquejr/react-gemaque-dashboard#readme",
            },
        },

        {
            id: "trivia-react-redux",

            title: "Trivia React Redux",

            subtitle: "Jogo de perguntas e respostas",

            description:
                "Jogo de perguntas e respostas desenvolvido em equipe, utilizando React, Redux e integração com a API Open Trivia Database, com organização das atividades por meio do método Kanban.",

            category: "game",

            area: "frontend",

            status: "completed",

            context: "educational",

            collaboration: "team",

            icon: "gamepad",

            featured: false,

            order: 3,

            skillIds: [
                "react",
                "javascript",
                "html5",
                "css3",
                "rest-api",
            ],

            additionalTechnologies: [
                "Redux",
                "Open Trivia DB",
            ],

            features: [
                "Jogo interativo de perguntas e respostas.",
                "Consumo de perguntas por API externa.",
                "Gerenciamento de estado global com Redux.",
            ],

            highlights: [
                "Desenvolvimento colaborativo.",
                "Organização de tarefas utilizando Kanban.",
                "Aplicação de metodologias ágeis.",
                "Integração entre componentes e estado global.",
            ],

            links: {
                repository:
                    "https://github.com/gemaquejr/trivia-react-redux",

                demo:
                    "https://trivia-gemaquejr.netlify.app/",

                documentation:
                    "https://github.com/gemaquejr/trivia-react-redux#readme",
            },
        },

        {
            id: "gemaque-gym",

            title: "Gemaque Gym",

            subtitle: "Plataforma fitness",

            description:
                "Aplicação web voltada à organização e visualização de treinos, com foco em componentização, responsividade e experiência do usuário.",

            category: "website",

            area: "frontend",

            status: "completed",

            context: "personal",

            icon: "dumbbell",

            featured: false,

            order: 4,

            skillIds: [
                "react",
                "javascript",
                "html5",
                "css3",
            ],

            features: [
                "Organização de exercícios por grupo muscular.",
                "Planejamento semanal de treinos.",
                "Navegação entre exercícios.",
                "Layout responsivo.",
            ],

            highlights: [
                "Componentização de interfaces React.",
                "Organização de informações de treinamento.",
                "Interface adaptável a diferentes dispositivos.",
            ],

            links: {
                repository:
                    "https://github.com/gemaquejr/react-gym-app",

                demo:
                    "https://gemaque-gym.netlify.app/",

                documentation:
                    "https://github.com/gemaquejr/react-gym-app#readme",
            },
        },

        {
            id: "disney-clone",

            title: "Disney+ Clone",

            subtitle: "Interface de streaming",

            description:
                "Projeto educacional inspirado na plataforma Disney+, desenvolvido com React, Styled Components e integração com Firebase para apresentação de conteúdos e autenticação.",

            category: "entertainment",

            area: "frontend",

            status: "completed",

            context: "educational",

            icon: "film",

            featured: false,

            order: 5,

            skillIds: [
                "react",
                "javascript",
                "html5",
                "authentication",
            ],

            additionalTechnologies: [
                "Styled Components",
                "Firebase",
            ],

            features: [
                "Autenticação utilizando conta Google.",
                "Integração com Firebase.",
                "Carrosséis de filmes em destaque.",
                "Catálogo organizado por categorias.",
            ],

            highlights: [
                "Estilização de componentes com CSS-in-JS.",
                "Integração com serviços Firebase.",
                "Reprodução educacional de uma interface de streaming.",
            ],

            links: {
                repository:
                    "https://github.com/gemaquejr/react-disney-clone",

                demo:
                    "https://react-disney-clone-837b1.web.app/",

                documentation:
                    "https://github.com/gemaquejr/react-disney-clone#readme",
            },
        },

        {
            id: "gemaqueflix",

            title: "GemaqueFlix",

            subtitle: "Catálogo de filmes e séries",

            description:
                "Aplicação educacional inspirada na interface da Netflix, utilizando a API do The Movie Database para apresentar informações sobre filmes e séries.",

            category: "entertainment",

            area: "frontend",

            status: "completed",

            context: "educational",

            icon: "clapperboard",

            featured: false,

            order: 6,

            skillIds: [
                "react",
                "javascript",
                "html5",
                "css3",
                "rest-api",
            ],

            additionalTechnologies: [
                "TMDB API",
            ],

            features: [
                "Consumo da API do The Movie Database.",
                "Exibição de filmes e séries.",
                "Carrosséis de conteúdos.",
                "Organização do catálogo por categorias.",
            ],

            highlights: [
                "Integração com API externa.",
                "Construção de interfaces orientadas por dados.",
                "Reutilização de componentes de apresentação.",
            ],

            links: {
                repository:
                    "https://github.com/gemaquejr/react-netflix-clone",

                demo:
                    "https://gemaqueflix.netlify.app/",

                documentation:
                    "https://github.com/gemaquejr/react-netflix-clone#readme",
            },
        },

        {
            id: "portfolio-2023",

            title: "Portfólio 2023",

            subtitle: "Website profissional",

            description:
                "Portfólio pessoal desenvolvido com React e Vite, representando uma etapa anterior da minha trajetória e evolução no desenvolvimento de interfaces web.",

            category: "website",

            area: "frontend",

            status: "completed",

            context: "personal",

            icon: "code",

            featured: false,

            order: 7,

            skillIds: [
                "react",
                "vite",
            ],

            features: [
                "Apresentação profissional em website pessoal.",
            ],

            links: {
                repository:
                    "https://github.com/gemaquejr/react-portifolio-2023",

                demo:
                    "https://portfolio-gemaquejr.netlify.app/",
            },
        },
    ],
};