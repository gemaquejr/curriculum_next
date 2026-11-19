import Image from "next/image";

import {
    BookOpen,
    ChartColumn,
    Check,
    ChevronDown,
    Clapperboard,
    CodeXml,
    Dumbbell,
    ExternalLink,
    Film,
    Gamepad2,
    ShoppingBag,
    Star,
    type LucideIcon,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
    Badge,
    Card,
    type BadgeProps,
} from "@/components/ui";

import {
    projectCategoryLabels,
    projectStatusLabels,
} from "@/data/projectFilters";

import type {
    ProjectArea,
    ProjectContext,
    ProjectIcon,
    ProjectStatus,
    ResolvedProject,
} from "@/types/project";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    project: ResolvedProject;
}

const projectIcons: Record<
    ProjectIcon,
    LucideIcon
> = {
    "shopping-bag": ShoppingBag,
    chart: ChartColumn,
    gamepad: Gamepad2,
    dumbbell: Dumbbell,
    film: Film,
    clapperboard: Clapperboard,
    code: CodeXml,
};

const areaLabels: Record<ProjectArea, string> = {
    frontend: "Frontend",
    backend: "Backend",
    fullstack: "Full Stack",
    mobile: "Mobile",
};

const contextLabels: Record<
    ProjectContext,
    string
> = {
    technical_challenge: "Desafio técnico",
    personal: "Projeto pessoal",
    educational: "Projeto educacional",
    professional: "Projeto profissional",
};

const statusVariants: Record<
    ProjectStatus,
    NonNullable<BadgeProps["variant"]>
> = {
    completed: "success",
    in_development: "warning",
    production: "success",
    prototype: "outline",
};

export function ProjectCard({
    project,
}: ProjectCardProps) {
    const {
        id,
        title,
        subtitle,
        description,
        category,
        area,
        context,
        status,
        collaboration,
        icon,
        featured,
        technologies,
        features,
        highlights,
        limitations,
        metrics,
        image,
        links,
    } = project;

    const Icon = projectIcons[icon];

    const hasLinks = Boolean(
        links.repository ||
        links.demo ||
        links.documentation,
    );

    const hasTechnicalDetails = Boolean(
        features.length ||
        highlights?.length ||
        limitations?.length,
    );

    return (
        <Card
            variant="default"
            padding="none"
            className={[
                styles.card,
                featured
                    ? styles.featured
                    : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <article
                className={styles.article}
                aria-labelledby={`project-${id}`}
            >
                <div className={styles.media}>
                    {image ? (
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 560px"
                            className={styles.image}
                        />
                    ) : (
                        <div
                            className={styles.fallback}
                            aria-hidden="true"
                        >
                            <span
                                className={
                                    styles.fallbackIcon
                                }
                            >
                                <Icon size={36} />
                            </span>

                            <span
                                className={
                                    styles.fallbackTitle
                                }
                            >
                                {title}
                            </span>

                            <span
                                className={
                                    styles.fallbackSubtitle
                                }
                            >
                                {subtitle}
                            </span>
                        </div>
                    )}
                </div>

                <div className={styles.content}>
                    <header
                        className={styles.header}
                    >
                        <div
                            className={
                                styles.metadata
                            }
                        >
                            <span
                                className={
                                    styles.category
                                }
                            >
                                {
                                    projectCategoryLabels[
                                    category
                                    ]
                                }

                                {" · "}

                                {areaLabels[area]}
                            </span>

                            <Badge
                                variant={statusVariants[status]}
                                size="sm"
                            >
                                {projectStatusLabels[status]}
                            </Badge>
                        </div>

                        {featured && (
                            <span
                                className={
                                    styles.featuredLabel
                                }
                            >
                                <Star
                                    size={16}
                                    aria-hidden="true"
                                />

                                Projeto em destaque
                            </span>
                        )}

                        <h3
                            id={`project-${id}`}
                            className={styles.title}
                        >
                            {title}
                        </h3>

                        <p
                            className={
                                styles.subtitle
                            }
                        >
                            {subtitle}
                        </p>

                        <div
                            className={
                                styles.context
                            }
                        >
                            <Badge
                                variant="outline"
                                size="sm"
                            >
                                {
                                    contextLabels[
                                    context
                                    ]
                                }
                            </Badge>

                            {collaboration && (
                                <Badge
                                    variant="outline"
                                    size="sm"
                                >
                                    {collaboration ===
                                        "team"
                                        ? "Projeto colaborativo"
                                        : "Projeto individual"}
                                </Badge>
                            )}
                        </div>
                    </header>

                    <p
                        className={
                            styles.description
                        }
                    >
                        {description}
                    </p>

                    {metrics &&
                        metrics.length > 0 && (
                            <dl
                                className={
                                    styles.metrics
                                }
                            >
                                {metrics.map(
                                    (metric) => (
                                        <div
                                            key={
                                                metric.id
                                            }
                                            className={
                                                styles.metric
                                            }
                                        >
                                            <dt
                                                className={
                                                    styles.metricLabel
                                                }
                                            >
                                                {
                                                    metric.label
                                                }
                                            </dt>

                                            <dd
                                                className={
                                                    styles.metricValue
                                                }
                                            >
                                                {
                                                    metric.value
                                                }
                                            </dd>

                                            {metric.description && (
                                                <dd
                                                    className={
                                                        styles.metricDescription
                                                    }
                                                >
                                                    {
                                                        metric.description
                                                    }
                                                </dd>
                                            )}
                                        </div>
                                    ),
                                )}
                            </dl>
                        )}

                    {technologies.length > 0 && (
                        <div
                            className={
                                styles.technologies
                            }
                        >
                            <h4
                                id={`project-${id}-technologies`}
                                className={
                                    styles.sectionTitle
                                }
                            >
                                Tecnologias utilizadas
                            </h4>

                            <ul
                                className={
                                    styles.technologyList
                                }
                                aria-labelledby={`project-${id}-technologies`}
                                role="list"
                            >
                                {technologies.map(
                                    (technology) => (
                                        <li
                                            key={
                                                technology
                                            }
                                            className={
                                                styles.technologyItem
                                            }
                                        >
                                            <Badge
                                                variant="outline"
                                                size="sm"
                                                className={
                                                    styles.technologyBadge
                                                }
                                            >
                                                {
                                                    technology
                                                }
                                            </Badge>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    )}

                    {hasTechnicalDetails && (
                        <details
                            className={
                                styles.details
                            }
                        >
                            <summary
                                className={
                                    styles.summary
                                }
                            >
                                Detalhes técnicos

                                <ChevronDown
                                    size={20}
                                    aria-hidden="true"
                                    className={
                                        styles.chevron
                                    }
                                />
                            </summary>

                            <div
                                className={
                                    styles.detailsContent
                                }
                            >
                                {features.length >
                                    0 && (
                                        <div
                                            className={
                                                styles.detailGroup
                                            }
                                        >
                                            <h4
                                                className={
                                                    styles.sectionTitle
                                                }
                                            >
                                                Funcionalidades
                                            </h4>

                                            <ul
                                                className={
                                                    styles.featureList
                                                }
                                                role="list"
                                            >
                                                {features.map(
                                                    (
                                                        feature,
                                                    ) => (
                                                        <li
                                                            key={
                                                                feature
                                                            }
                                                            className={
                                                                styles.featureItem
                                                            }
                                                        >
                                                            <Check
                                                                size={
                                                                    16
                                                                }
                                                                aria-hidden="true"
                                                            />

                                                            <span>
                                                                {
                                                                    feature
                                                                }
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                {highlights &&
                                    highlights.length >
                                    0 && (
                                        <div
                                            className={
                                                styles.detailGroup
                                            }
                                        >
                                            <h4
                                                className={
                                                    styles.sectionTitle
                                                }
                                            >
                                                Diferenciais técnicos
                                            </h4>

                                            <ul
                                                className={
                                                    styles.detailList
                                                }
                                            >
                                                {highlights.map(
                                                    (
                                                        highlight,
                                                    ) => (
                                                        <li
                                                            key={
                                                                highlight
                                                            }
                                                        >
                                                            {
                                                                highlight
                                                            }
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                {limitations &&
                                    limitations.length >
                                    0 && (
                                        <div
                                            className={
                                                styles.limitations
                                            }
                                        >
                                            <h4
                                                className={
                                                    styles.sectionTitle
                                                }
                                            >
                                                Limitações atuais
                                            </h4>

                                            <ul
                                                className={
                                                    styles.detailList
                                                }
                                            >
                                                {limitations.map(
                                                    (
                                                        limitation,
                                                    ) => (
                                                        <li
                                                            key={
                                                                limitation
                                                            }
                                                        >
                                                            {
                                                                limitation
                                                            }
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                            </div>
                        </details>
                    )}

                    {hasLinks && (
                        <footer
                            className={
                                styles.actions
                            }
                        >
                            {links.repository && (
                                <a
                                    href={
                                        links.repository
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                        styles.secondaryLink
                                    }
                                    aria-label={`Código-fonte de ${title} (abre em nova aba)`}
                                >
                                    <FaGithub
                                        size={18}
                                        aria-hidden="true"
                                    />

                                    Código-fonte
                                </a>
                            )}

                            {links.demo && (
                                <a
                                    href={links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                        styles.primaryLink
                                    }
                                    aria-label={`Ver aplicação ${title} (abre em nova aba)`}
                                >
                                    Ver aplicação

                                    <ExternalLink
                                        size={16}
                                        aria-hidden="true"
                                    />
                                </a>
                            )}

                            {links.documentation && (
                                <a
                                    href={
                                        links.documentation
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                        styles.documentationLink
                                    }
                                    aria-label={`Documentação de ${title} (abre em nova aba)`}
                                >
                                    <BookOpen
                                        size={16}
                                        aria-hidden="true"
                                    />

                                    Documentação
                                </a>
                            )}
                        </footer>
                    )}
                </div>
            </article>
        </Card>
    );
}