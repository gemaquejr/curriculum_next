import type {
    ProjectCategory,
    ProjectFilterOption,
    ProjectFilterState,
    ProjectStatus,
    ProjectStatusFilterOption,
} from "@/types/project";

export const projectCategoryLabels: Readonly<
    Record<ProjectCategory, string>
> = {
    marketplace: "Marketplace",
    dashboard: "Dashboard",
    entertainment: "Entretenimento",
    game: "Jogos",
    website: "Websites",
};

export const projectStatusLabels: Readonly<
    Record<ProjectStatus, string>
> = {
    completed: "Concluído",
    in_development: "Em desenvolvimento",
    production: "Em produção",
    prototype: "Protótipo",
};

export const projectFilters:
    readonly ProjectFilterOption[] = [
        {
            id: "all",
            label: "Todos",
        },
        {
            id: "marketplace",
            label: projectCategoryLabels.marketplace,
        },
        {
            id: "dashboard",
            label: projectCategoryLabels.dashboard,
        },
        {
            id: "entertainment",
            label: projectCategoryLabels.entertainment,
        },
        {
            id: "game",
            label: projectCategoryLabels.game,
        },
        {
            id: "website",
            label: projectCategoryLabels.website,
        },
    ];

export const projectStatusFilters:
    readonly ProjectStatusFilterOption[] = [
        {
            id: "all",
            label: "Todos",
        },
        {
            id: "completed",
            label: projectStatusLabels.completed,
        },
        {
            id: "in_development",
            label: projectStatusLabels.in_development,
        },
        {
            id: "production",
            label: projectStatusLabels.production,
        },
        {
            id: "prototype",
            label: projectStatusLabels.prototype,
        },
    ];

export const defaultProjectFilters:
    Readonly<ProjectFilterState> = {
    query: "",
    category: "all",
    status: "all",
};