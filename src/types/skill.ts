export type SkillCategoryId =
    | "frontend"
    | "backend"
    | "database"
    | "mobile"
    | "testing"
    | "infrastructure"
    | "security"
    | "integration";

export type SkillCategoryIcon =
    | "monitor"
    | "server"
    | "database"
    | "smartphone"
    | "flask"
    | "terminal"
    | "shield"
    | "network";

export interface Skill {
    id: string;
    name: string;
}

export interface SkillCategory {
    id: SkillCategoryId;
    icon: SkillCategoryIcon;
    title: string;
    description: string;
    skills: readonly Skill[];
}

export interface SkillsContent {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: readonly SkillCategory[];
}