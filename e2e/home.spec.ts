import { expect, test } from "@playwright/test";

test.describe("Currículo digital — Página inicial", () => {
    test("deve carregar a página com título e conteúdo principal", async ({
        page,
    }) => {
        await page.goto("/");

        await expect(page).toHaveTitle(
            /Francisco Espíndola Gemaque Junior/,
        );

        await expect(
            page.getByRole("heading", {
                level: 1,
            }),
        ).toBeVisible();

        await expect(
            page.locator("main#conteudo-principal"),
        ).toBeVisible();
    });

    test("deve apresentar as principais seções do currículo", async ({
        page,
    }) => {
        await page.goto("/");

        const sectionIds = [
            "about",
            "experience",
            "education",
            "skills",
            "projects",
            "contact",
        ];

        for (const id of sectionIds) {
            await expect(
                page.locator(`section#${id}`),
            ).toHaveCount(1);
        }
    });

    test("deve disponibilizar o link para pular ao conteúdo", async ({
        page,
    }) => {
        await page.goto("/");

        const skipLink = page.getByRole("link", {
            name: "Pular para o conteúdo principal",
        });

        await page.keyboard.press("Tab");

        await expect(skipLink).toBeFocused();

        await page.keyboard.press("Enter");

        await expect(
            page.locator("main#conteudo-principal"),
        ).toBeFocused();
    });
});
