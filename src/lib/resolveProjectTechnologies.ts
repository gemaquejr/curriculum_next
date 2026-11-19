import { resolveSkills } from "./resolveSkills";

import type { Project } from "@/types/project";

export function resolveProjectTechnologies(
    project: Project,
): readonly string[] {
    const resolvedSkills = resolveSkills(
        project.skillIds,
    );

    const technologies = [
        ...resolvedSkills.map(
            (skill) => skill.name,
        ),

        ...(project.additionalTechnologies ?? []),
    ];

    const uniqueTechnologies = new Map<
        string,
        string
    >();

    for (const technology of technologies) {
        const name = technology.trim();

        if (!name) {
            continue;
        }

        const key = name.toLowerCase();

        if (!uniqueTechnologies.has(key)) {
            uniqueTechnologies.set(key, name);
        }
    }

    return [...uniqueTechnologies.values()];
}