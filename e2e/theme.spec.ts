import { expect, test } from "@playwright/test";

const storageKey = "curriculum-theme";

test.describe("Currículo digital — Tema", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("deve selecionar o tema claro", async ({ page }) => {
        const toggle = page.getByRole("button", {
            name: /Alterar tema\. Preferência atual:/,
        });

        await toggle.click();

        const lightOption = page.getByRole("button", {
            name: "Claro",
            exact: true,
        });

        await lightOption.click();

        await expect(page.locator("html")).toHaveAttribute(
            "data-theme",
            "light",
        );

        await expect(toggle).toHaveAccessibleName(
            "Alterar tema. Preferência atual: Claro",
        );

        const storedTheme = await page.evaluate(
            (key) => localStorage.getItem(key),
            storageKey,
        );

        expect(storedTheme).toBe("light");
    });

    test("deve selecionar o tema escuro", async ({ page }) => {
        const toggle = page.getByRole("button", {
            name: /Alterar tema\. Preferência atual:/,
        });

        await toggle.click();

        const darkOption = page.getByRole("button", {
            name: "Escuro",
            exact: true,
        });

        await darkOption.click();

        await expect(page.locator("html")).toHaveAttribute(
            "data-theme",
            "dark",
        );

        await expect(toggle).toHaveAccessibleName(
            "Alterar tema. Preferência atual: Escuro",
        );

        const storedTheme = await page.evaluate(
            (key) => localStorage.getItem(key),
            storageKey,
        );

        expect(storedTheme).toBe("dark");
    });

    test("deve manter o tema após recarregar", async ({ page }) => {
        const toggle = page.getByRole("button", {
            name: /Alterar tema\. Preferência atual:/,
        });

        await toggle.click();

        await page.getByRole("button", {
            name: "Escuro",
            exact: true,
        }).click();

        await page.reload();

        await expect(page.locator("html")).toHaveAttribute(
            "data-theme",
            "dark",
        );

        await expect(toggle).toHaveAccessibleName(
            "Alterar tema. Preferência atual: Escuro",
        );
    });

    test("deve respeitar a preferência do sistema", async ({ page }) => {
        await page.emulateMedia({
            colorScheme: "dark",
        });

        const toggle = page.getByRole("button", {
            name: /Alterar tema\. Preferência atual:/,
        });

        await toggle.click();

        await page.getByRole("button", {
            name: "Sistema",
            exact: true,
        }).click();

        await expect(page.locator("html")).not.toHaveAttribute(
            "data-theme",
            /.+/,
        );

        await expect(toggle).toHaveAccessibleName(
            "Alterar tema. Preferência atual: Sistema",
        );

        const colorScheme = await page.locator("html").evaluate(
            (element) => getComputedStyle(element).colorScheme,
        );

        expect(colorScheme).toBe("dark");
    });

    test("deve indicar a opção selecionada", async ({ page }) => {
        const toggle = page.getByRole("button", {
            name: /Alterar tema\. Preferência atual:/,
        });

        await toggle.click();

        await page.getByRole("button", {
            name: "Claro",
            exact: true,
        }).click();

        await toggle.click();

        await expect(
            page.getByRole("button", {
                name: "Claro",
                exact: true,
            }),
        ).toHaveAttribute("aria-pressed", "true");

        await expect(
            page.getByRole("button", {
                name: "Escuro",
                exact: true,
            }),
        ).toHaveAttribute("aria-pressed", "false");
    });

    test("deve fechar o seletor com Escape", async ({ page }) => {
        const toggle = page.getByRole("button", {
            name: /Alterar tema\. Preferência atual:/,
        });

        await toggle.click();

        await expect(toggle).toHaveAttribute(
            "aria-expanded",
            "true",
        );

        await page.keyboard.press("Escape");

        await expect(toggle).toHaveAttribute(
            "aria-expanded",
            "false",
        );

        await expect(toggle).toBeFocused();

        await expect(
            page.locator("#theme-options"),
        ).toHaveCount(0);
    });
});
