export type ProjectCategory =
    | "marketplace"
    | "dashboard"
    | "entertainment"
    | "game"
    | "website";

export type ProjectArea =
    | "frontend"
    | "backend"
    | "fullstack"
    | "mobile";

export type ProjectStatus =
    | "completed"
    | "in_development"
    | "production"
    | "prototype";

export type ProjectContext =
    | "technical_challenge"
    | "personal"
    | "educational"
    | "professional";

export type ProjectCollaboration =
    | "individual"
    | "team";

export type ProjectIcon =
    | "shopping-bag"
    | "chart"
    | "gamepad"
    | "dumbbell"
    | "film"
    | "clapperboard"
    | "code";

export interface ProjectImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface ProjectLinks {
    repository?: string;
    demo?: string;
    documentation?: string;
}

export interface ProjectMetric {
    id: string;
    label: string;
    value: string;
    description?: string;
}

export interface Project {
    id: string;

    title: string;
    subtitle: string;
    description: string;

    category: ProjectCategory;
    area: ProjectArea;
    status: ProjectStatus;
    context: ProjectContext;

    collaboration?: ProjectCollaboration;

    icon: ProjectIcon;
    featured: boolean;
    order: number;

    skillIds: readonly string[];

    additionalTechnologies?: readonly string[];

    features: readonly string[];
    highlights?: readonly string[];
    limitations?: readonly string[];

    metrics?: readonly ProjectMetric[];

    image?: ProjectImage;

    links: ProjectLinks;
}

export interface ProjectsContent {
    eyebrow: string;
    title: string;
    subtitle: string;

    items: readonly Project[];
}

export type ProjectFilter =
    | "all"
    | ProjectCategory;

export interface ProjectFilterOption {
    id: ProjectFilter;
    label: string;
}

export interface ResolvedProject extends Project {
    technologies: readonly string[];
}

export interface ProjectStatusFilterOption {
    id: ProjectStatusFilter;
    label: string;
}

export interface ProjectFilterState {
    query: string;
    category: ProjectFilter;
    status: ProjectStatusFilter;
}

export type ProjectStatusFilter =
    | "all"
    | ProjectStatus;

export interface ProjectStatusFilterOption {
    id: ProjectStatusFilter;
    label: string;
}

export interface ProjectFilterState {
    query: string;
    category: ProjectFilter;
    status: ProjectStatusFilter;
}