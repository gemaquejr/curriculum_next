import { skills } from "@/data/skills";

import type { Skill } from "@/types/skill";

const skillCatalog = skills.categories.flatMap(
    (category) => category.skills,
);

const skillMap = new Map<string, Skill>(
    skillCatalog.map(
        (skill) => [skill.id, skill],
    ),
);

export function resolveSkills(
    skillIds: readonly string[],
): readonly Skill[] {
    return skillIds.map((skillId) => {
        const skill = skillMap.get(skillId);

        if (!skill) {
            throw new Error(
                `Competência não encontrada: ${skillId}`,
            );
        }

        return skill;
    });
}