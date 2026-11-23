import { expect, test } from "@playwright/test";

test.describe("Currículo digital — Menu mobile", () => {
    test.use({
        viewport: {
            width: 375,
            height: 812,
        },
        isMobile: true,
        hasTouch: true,
    });

    test("deve abrir o menu e direcionar o foco ao primeiro link", async ({
        page,
    }) => {
        await page.goto("/");

        const toggle = page.getByRole("button", {
            name: /^(Abrir|Fechar) menu$/,
        });

        await toggle.focus();
        await page.keyboard.press("Enter");

        await expect(toggle).toHaveAttribute(
            "aria-expanded",
            "true",
        );

        const navigation = page.locator("#mobile-navigation");

        await expect(navigation).toBeVisible();

        await expect(
            navigation.getByRole("link").first(),
        ).toBeFocused();
    });

    test("deve fechar com Escape e devolver o foco ao botão", async ({
        page,
    }) => {
        await page.goto("/");

        const toggle = page.getByRole("button", {
            name: "Abrir menu",
        });

        await toggle.focus();
        await page.keyboard.press("Enter");

        await expect(
            page.locator("#mobile-navigation"),
        ).toBeVisible();

        await page.keyboard.press("Escape");

        await expect(
            page.locator("#mobile-navigation"),
        ).toBeHidden();

        await expect(toggle).toBeFocused();

        await expect(toggle).toHaveAttribute(
            "aria-expanded",
            "false",
        );
    });

    test("deve navegar para uma seção e fechar o menu", async ({
        page,
    }) => {
        await page.goto("/");

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const navigation = page.locator("#mobile-navigation");

        const aboutLink = navigation.locator('a[href="#about"]');

        await aboutLink.click();

        await expect(page).toHaveURL(/#about$/);

        await expect(navigation).toBeHidden();

        await expect(
            page.locator("#about"),
        ).toBeFocused();
    });
});
