export async function copyToClipboard(
    text: string,
): Promise<void> {
    if (
        typeof navigator === "undefined" ||
        !navigator.clipboard?.writeText
    ) {
        throw new Error(
            "Clipboard API indisponível.",
        );
    }

    await navigator.clipboard.writeText(text);
}