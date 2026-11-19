import {
    RotateCcw,
    Search,
} from "lucide-react";

import { Button, Card } from "@/components/ui";

import {
    projectFilters,
    projectStatusFilters,
} from "@/data/projectFilters";

import type {
    ProjectFilterState,
    ResolvedProject,
} from "@/types/project";

import styles from "./ProjectFilters.module.css";

interface ProjectFiltersProps {
    projects: readonly ResolvedProject[];

    filters: ProjectFilterState;

    resultCount: number;

    onChange: (filters: ProjectFilterState) => void;

    onReset: () => void;
}

export function ProjectFilters({
    projects,
    filters,
    resultCount,
    onChange,
    onReset,
}: ProjectFiltersProps) {
    const availableCategories = projectFilters.filter(
        (option) =>
            option.id === "all" ||
            projects.some(
                (project) =>
                    project.category === option.id,
            ),
    );

    const availableStatuses = projectStatusFilters.filter(
        (option) =>
            option.id === "all" ||
            projects.some(
                (project) =>
                    project.status === option.id,
            ),
    );

    const hasActiveFilters =
        Boolean(filters.query) ||
        filters.category !== "all" ||
        filters.status !== "all";

    const resultLabel =
        resultCount === 1
            ? "projeto encontrado"
            : "projetos encontrados";

    return (
        <Card
            variant="default"
            padding="md"
            className={styles.card}
        >
            <div
                className={styles.controls}
                role="group"
                aria-label="Filtros do portfólio"
            >
                <div className={styles.field}>
                    <label
                        htmlFor="project-search"
                        className={styles.label}
                    >
                        Buscar projetos
                    </label>

                    <div className={styles.searchField}>
                        <Search
                            size={20}
                            aria-hidden="true"
                            className={styles.searchIcon}
                        />

                        <input
                            id="project-search"
                            type="search"
                            value={filters.query}
                            placeholder="Ex.: React, Redux, Kurio..."
                            autoComplete="off"
                            className={styles.searchInput}
                            aria-controls="projects-results"
                            onChange={(event) =>
                                onChange({
                                    ...filters,
                                    query: event.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                <div className={styles.field}>
                    <label
                        htmlFor="project-category"
                        className={styles.label}
                    >
                        Categoria
                    </label>

                    <select
                        id="project-category"
                        value={filters.category}
                        className={styles.select}
                        aria-controls="projects-results"
                        onChange={(event) => {
                            const option =
                                availableCategories.find(
                                    (item) =>
                                        item.id ===
                                        event.target.value,
                                );

                            if (!option) return;

                            onChange({
                                ...filters,
                                category: option.id,
                            });
                        }}
                    >
                        {availableCategories.map(
                            (option) => (
                                <option
                                    key={option.id}
                                    value={option.id}
                                >
                                    {option.label}
                                </option>
                            ),
                        )}
                    </select>
                </div>

                <div className={styles.field}>
                    <label
                        htmlFor="project-status"
                        className={styles.label}
                    >
                        Status
                    </label>

                    <select
                        id="project-status"
                        value={filters.status}
                        className={styles.select}
                        aria-controls="projects-results"
                        onChange={(event) => {
                            const option =
                                availableStatuses.find(
                                    (item) =>
                                        item.id ===
                                        event.target.value,
                                );

                            if (!option) return;

                            onChange({
                                ...filters,
                                status: option.id,
                            });
                        }}
                    >
                        {availableStatuses.map(
                            (option) => (
                                <option
                                    key={option.id}
                                    value={option.id}
                                >
                                    {option.label}
                                </option>
                            ),
                        )}
                    </select>
                </div>
            </div>

            <div className={styles.footer}>
                <p
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className={styles.counter}
                >
                    <strong>{resultCount}</strong>
                    {" de "}
                    {projects.length}
                    {" — "}
                    {resultLabel}
                </p>

                <Button
                    variant="ghost"
                    size="md"
                    disabled={!hasActiveFilters}
                    onClick={onReset}
                    leftIcon={
                        <RotateCcw size={16} />
                    }
                >
                    Limpar filtros
                </Button>
            </div>
        </Card>
    );
}