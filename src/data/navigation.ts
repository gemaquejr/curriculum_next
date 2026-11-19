
import type { NavigationItem } from "@/types/navigation";

export const navigationItems: readonly NavigationItem[] = [
    {
        id: "home",
        label: "Início",
        href: "#home",
    },
    {
        id: "about",
        label: "Sobre mim",
        shortLabel: "Sobre",
        href: "#about",
    },
    {
        id: "experience",
        label: "Experiências",
        href: "#experience",
    },
    {
        id: "education",
        label: "Formação acadêmica",
        shortLabel: "Formação",
        href: "#education",
    },
    {
        id: "skills",
        label: "Competências",
        href: "#skills",
    },
    {
        id: "projects",
        label: "Projetos",
        href: "#projects",
    },
    {
        id: "contact",
        label: "Contato",
        href: "#contact",
    },
];
