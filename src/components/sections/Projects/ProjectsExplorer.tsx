"use client";

import { useState } from "react";

import { SearchX } from "lucide-react";

import { Button, Card } from "@/components/ui";

import {
    defaultProjectFilters,
} from "@/data/projectFilters";

import { filterProjects } from "@/lib/filterProjects";

import type {
    ProjectFilterState,
    ResolvedProject,
} from "@/types/project";

import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";

import styles from "./ProjectsExplorer.module.css";

interface ProjectsExplorerProps {
    projects: readonly ResolvedProject[];
}

export function ProjectsExplorer({
    projects,
}: ProjectsExplorerProps) {
    const [filters, setFilters] =
        useState<ProjectFilterState>({
            ...defaultProjectFilters,
        });

    const filteredProjects = filterProjects(
        projects,
        filters,
    );

    function resetFilters() {
        setFilters({
            ...defaultProjectFilters,
        });
    }

    return (
        <div className={styles.explorer}>
            <ProjectFilters
                projects={projects}
                filters={filters}
                resultCount={filteredProjects.length}
                onChange={setFilters}
                onReset={resetFilters}
            />

            <div
                id="projects-results"
                className={styles.results}
            >
                {filteredProjects.length > 0 ? (
                    <ul
                        className={styles.grid}
                        aria-label="Projetos encontrados"
                        role="list"
                    >
                        {filteredProjects.map(
                            (project) => (
                                <li
                                    key={project.id}
                                    className={styles.item}
                                >
                                    <ProjectCard
                                        project={project}
                                    />
                                </li>
                            ),
                        )}
                    </ul>
                ) : (
                    <Card
                        variant="outlined"
                        padding="lg"
                        className={styles.empty}
                    >
                        <span
                            className={styles.emptyIcon}
                            aria-hidden="true"
                        >
                            <SearchX size={32} />
                        </span>

                        <h3
                            className={styles.emptyTitle}
                        >
                            Nenhum projeto encontrado
                        </h3>

                        <p
                            className={styles.emptyDescription}
                        >
                            Experimente alterar os termos da
                            busca ou limpar os filtros para
                            visualizar todos os projetos.
                        </p>

                        <Button
                            variant="secondary"
                            onClick={resetFilters}
                        >
                            Limpar filtros
                        </Button>
                    </Card>
                )}
            </div>
        </div>
    );
}