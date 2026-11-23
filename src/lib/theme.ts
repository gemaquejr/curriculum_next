export const THEME_STORAGE_KEY = "curriculum-theme";

export const THEME_PREFERENCES = [
    "system",
    "light",
    "dark",
] as const;

export type ThemePreference =
    (typeof THEME_PREFERENCES)[number];

export function isThemePreference(
    value: unknown,
): value is ThemePreference {
    return (
        value === "system" ||
        value === "light" ||
        value === "dark"
    );
}

export function readThemePreference(): ThemePreference {
    if (typeof window === "undefined") {
        return "system";
    }

    try {
        const stored = window.localStorage.getItem(
            THEME_STORAGE_KEY,
        );

        return isThemePreference(stored)
            ? stored
            : "system";
    } catch {
        return "system";
    }
}

export function applyThemePreference(
    preference: ThemePreference,
): void {
    if (typeof document === "undefined") {
        return;
    }

    if (preference === "system") {
        document.documentElement.removeAttribute(
            "data-theme",
        );

        return;
    }

    document.documentElement.setAttribute(
        "data-theme",
        preference,
    );
}

export function saveThemePreference(
    preference: ThemePreference,
): void {
    if (typeof window === "undefined") {
        return;
    }

    try {
        window.localStorage.setItem(
            THEME_STORAGE_KEY,
            preference,
        );
    } catch {
        // A interface continua funcionando mesmo sem armazenamento.
    }
}

export function setThemePreference(
    preference: ThemePreference,
): void {
    applyThemePreference(preference);
    saveThemePreference(preference);
}
