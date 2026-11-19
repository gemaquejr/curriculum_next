import type {
    ProjectFilterState,
    ResolvedProject,
} from "@/types/project";

function normalizeText(value: string): string {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

export function filterProjects(
    projects: readonly ResolvedProject[],
    filters: ProjectFilterState,
): ResolvedProject[] {
    const query = normalizeText(filters.query);

    const terms = query
        .split(/\s+/)
        .filter(Boolean);

    return projects
        .filter((project) => {
            const matchesCategory =
                filters.category === "all" ||
                project.category === filters.category;

            const matchesStatus =
                filters.status === "all" ||
                project.status === filters.status;

            const searchableContent = normalizeText(
                [
                    project.title,
                    project.subtitle,
                    project.description,
                    ...project.technologies,
                ].join(" "),
            );

            const matchesQuery = terms.every(
                (term) =>
                    searchableContent.includes(term),
            );

            return (
                matchesCategory &&
                matchesStatus &&
                matchesQuery
            );
        })
        .sort((a, b) => a.order - b.order);
}