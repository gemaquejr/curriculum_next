import { THEME_STORAGE_KEY } from "./theme";

export const themeInitScript = `
(function () {
    try {
        var preference = localStorage.getItem(
            ${JSON.stringify(THEME_STORAGE_KEY)}
        );

        if (
            preference === "light" ||
            preference === "dark"
        ) {
            document.documentElement.setAttribute(
                "data-theme",
                preference
            );
        } else {
            document.documentElement.removeAttribute(
                "data-theme"
            );
        }
    } catch (error) {
        document.documentElement.removeAttribute(
            "data-theme"
        );
    }
})();
`;
