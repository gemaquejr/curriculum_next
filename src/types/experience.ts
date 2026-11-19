export type ExperienceCategory =
    | "independent"
    | "professional"
    | "research";

export type ExperienceIcon =
    | "code"
    | "users"
    | "chart"
    | "microscope";

export interface ExperiencePeriod {
    start: string;
    end: string | null;
}

export interface Experience {
    id: string;
    title: string;
    organization: string;
    location: string;
    category: ExperienceCategory;
    icon: ExperienceIcon;
    period: ExperiencePeriod;
    description: string;
    responsibilities: readonly string[];
    skills: readonly string[];
}