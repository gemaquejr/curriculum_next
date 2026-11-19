import { Container } from "@/components/layout";

import { SectionHeading } from "@/components/ui";

import { projects } from "@/data/projects";

import {
    resolveProjectTechnologies,
} from "@/lib/resolveProjectTechnologies";

import type {
    ResolvedProject,
} from "@/types/project";

import {
    ProjectsExplorer,
} from "./ProjectsExplorer";

import styles from "./Projects.module.css";

export function Projects() {
    const resolvedProjects: ResolvedProject[] =
        projects.items.map((project) => ({
            ...project,

            technologies:
                resolveProjectTechnologies(project),
        }));

    return (
        <section
            id="projects"
            tabIndex={-1}
            aria-labelledby="projects-title"
            className={styles.projects}
        >
            <Container>
                <div className={styles.content}>
                    <SectionHeading
                        id="projects-title"
                        eyebrow={projects.eyebrow}
                        title={projects.title}
                        subtitle={projects.subtitle}
                    />

                    <ProjectsExplorer
                        projects={resolvedProjects}
                    />
                </div>
            </Container>
        </section>
    );
}