const monthYearFormatter = new Intl.DateTimeFormat(
    "pt-BR",
    {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    },
);

export function formatMonthYear(value: string): string {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(value)) {
        throw new Error(
            `Período inválido: ${value}. Utilize YYYY-MM.`,
        );
    }

    const date = new Date(
        `${value}-01T00:00:00.000Z`,
    );

    const formatted = monthYearFormatter
        .format(date)
        .replace(/\s+de\s+/g, " ");

    return (
        formatted.charAt(0).toUpperCase() +
        formatted.slice(1)
    );
}

export function formatPeriod(
    start: string,
    end: string | null,
): string {
    const startLabel = formatMonthYear(start);

    const endLabel = end
        ? formatMonthYear(end)
        : "Atual";

    return `${startLabel} — ${endLabel}`;
}

export function formatAcademicDate(
    value: string,
): string {
    if (/^\d{4}$/.test(value)) {
        return value;
    }

    return formatMonthYear(value);
}

export function formatEducationPeriod(
    start?: string,
    end?: string,
): string | null {
    if (start && end) {
        return `${formatAcademicDate(start)} — ${formatAcademicDate(end)}`;
    }

    if (end) {
        return `Conclusão em ${formatAcademicDate(end)}`;
    }

    if (start) {
        return `Início em ${formatAcademicDate(start)}`;
    }

    return null;
}