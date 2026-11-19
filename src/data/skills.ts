import type {
    SkillsContent,
} from "@/types/skill";

export const skills: SkillsContent = {
    eyebrow: "Stack tecnológica",

    title: "Competências técnicas",

    subtitle:
        "Tecnologias, ferramentas e práticas aplicadas no desenvolvimento de software.",

    categories: [
        {
            id: "frontend",

            icon: "monitor",

            title: "Frontend",

            description:
                "Desenvolvimento de interfaces web responsivas, acessíveis e componentizadas.",

            skills: [
                { id: "html5", name: "HTML5" },
                { id: "css3", name: "CSS3" },
                { id: "javascript", name: "JavaScript" },
                { id: "typescript", name: "TypeScript" },
                { id: "react", name: "React" },
                { id: "nextjs", name: "Next.js" },
                { id: "vite", name: "Vite" },
                { id: "css-modules", name: "CSS Modules" },
                { id: "tailwindcss", name: "Tailwind CSS" },
                { id: "material-ui", name: "Material UI" },
            ],
        },

        {
            id: "backend",

            icon: "server",

            title: "Backend",

            description:
                "Desenvolvimento de APIs, serviços, regras de negócio e integração entre sistemas.",

            skills: [
                { id: "nodejs", name: "Node.js" },
                { id: "express", name: "Express" },
                { id: "nestjs", name: "NestJS" },
                { id: "python", name: "Python" },
                { id: "fastapi", name: "FastAPI" },
                { id: "django", name: "Django" },
                { id: "rest-api", name: "REST APIs" },
            ],
        },

        {
            id: "database",

            icon: "database",

            title: "Bancos de dados",

            description:
                "Modelagem de dados, persistência, consultas e integração com bancos de dados relacionais.",

            skills: [
                { id: "postgresql", name: "PostgreSQL" },
                { id: "mysql", name: "MySQL" },
                { id: "sqlite", name: "SQLite" },
                { id: "sql", name: "SQL" },
                { id: "prisma", name: "Prisma ORM" },
                { id: "supabase", name: "Supabase" },
            ],
        },

        {
            id: "mobile",

            icon: "smartphone",

            title: "Mobile",

            description:
                "Desenvolvimento de aplicações móveis multiplataforma e persistência local de dados.",

            skills: [
                { id: "react-native", name: "React Native" },
                { id: "expo", name: "Expo" },
                { id: "expo-router", name: "Expo Router" },
                { id: "async-storage", name: "AsyncStorage" },
            ],
        },

        {
            id: "testing",

            icon: "flask",

            title: "Testes e qualidade",

            description:
                "Validação de funcionalidades, testes automatizados e manutenção da qualidade de código.",

            skills: [
                { id: "jest", name: "Jest" },
                { id: "playwright", name: "Playwright" },
                { id: "msw", name: "MSW" },
                { id: "eslint", name: "ESLint" },
                {
                    id: "unit-testing",
                    name: "Testes unitários",
                },
                {
                    id: "integration-testing",
                    name: "Testes de integração",
                },
            ],
        },

        {
            id: "infrastructure",

            icon: "terminal",

            title: "Ferramentas e infraestrutura",

            description:
                "Versionamento, ambientes de desenvolvimento, containers e gerenciamento de dependências.",

            skills: [
                { id: "git", name: "Git" },
                { id: "github", name: "GitHub" },
                { id: "docker", name: "Docker" },
                {
                    id: "docker-compose",
                    name: "Docker Compose",
                },
                { id: "linux", name: "Linux" },
                { id: "npm", name: "npm" },
            ],
        },

        {
            id: "security",

            icon: "shield",

            title: "Segurança de aplicações",

            description:
                "Implementação de autenticação, controle de acesso e validação de dados.",

            skills: [
                { id: "jwt", name: "JWT" },
                { id: "bcrypt", name: "bcrypt" },
                { id: "rbac", name: "RBAC" },
                { id: "zod", name: "Zod" },
                {
                    id: "authentication",
                    name: "Autenticação",
                },
                {
                    id: "authorization",
                    name: "Autorização",
                },
            ],
        },

        {
            id: "integration",

            icon: "network",

            title: "Estado e integração",

            description:
                "Gerenciamento de estado, roteamento, consumo de APIs e comunicação em tempo real.",

            skills: [
                {
                    id: "tanstack-query",
                    name: "TanStack Query",
                },
                {
                    id: "tanstack-router",
                    name: "TanStack Router",
                },
                {
                    id: "context-api",
                    name: "Context API",
                },
                { id: "axios", name: "Axios" },
                { id: "socket-io", name: "Socket.IO" },
            ],
        },
    ],
};