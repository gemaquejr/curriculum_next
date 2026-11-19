import QRCode from "qrcode";

import {
    mkdir,
    stat,
} from "node:fs/promises";

import {
    dirname,
    resolve,
} from "node:path";

import {
    siteConfig,
} from "../src/config/site.ts";

async function generateQRCode(): Promise<void> {
    const { url, qrCode } = siteConfig;

    const parsedUrl = new URL(url);

    if (parsedUrl.protocol !== "https:") {
        throw new Error(
            "A URL do currículo deve utilizar HTTPS.",
        );
    }

    const svgPath = resolve(
        process.cwd(),
        `public${qrCode.svgPath}`,
    );

    const pngPath = resolve(
        process.cwd(),
        `public${qrCode.pngPath}`,
    );

    const options = {
        errorCorrectionLevel:
            qrCode.errorCorrectionLevel,

        margin: qrCode.margin,

        color: {
            dark: qrCode.colors.dark,
            light: qrCode.colors.light,
        },
    };

    await Promise.all([
        mkdir(dirname(svgPath), {
            recursive: true,
        }),

        mkdir(dirname(pngPath), {
            recursive: true,
        }),
    ]);

    console.log("\nGerando QR Code do currículo...\n");

    console.log(`URL: ${url}`);

    await Promise.all([
        QRCode.toFile(svgPath, url, {
            ...options,
            type: "svg",
        }),

        QRCode.toFile(pngPath, url, {
            ...options,
            type: "png",
            width: qrCode.pngWidth,
        }),
    ]);

    const [svgStats, pngStats] = await Promise.all([
        stat(svgPath),
        stat(pngPath),
    ]);

    console.log("\nArquivos gerados:");

    console.log(
        `[OK] SVG: ${svgPath}`,
    );

    console.log(
        `     Tamanho: ${svgStats.size} bytes`,
    );

    console.log(
        `[OK] PNG: ${pngPath}`,
    );

    console.log(
        `     Tamanho: ${pngStats.size} bytes`,
    );

    console.log(
        `     Resolução: ${qrCode.pngWidth} × ${qrCode.pngWidth}`,
    );

    console.log(
        "\n[SUCESSO] QR Code gerado corretamente.\n",
    );
}

generateQRCode().catch((error: unknown) => {
    console.error(
        "\n[ERRO] Falha na geração do QR Code:",
        error,
    );

    process.exitCode = 1;
});