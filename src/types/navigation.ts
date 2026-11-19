
export type SectionId =
    | "home"
    | "about"
    | "experience"
    | "education"
    | "skills"
    | "projects"
    | "contact";

export type NavigationItem = {
    [Id in SectionId]: {
        id: Id;
        label: string;
        shortLabel?: string;
        href: `#${Id}`;
    };
}[SectionId];
