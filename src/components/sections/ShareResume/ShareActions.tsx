"use client";

import { useState } from "react";

import {
    Copy,
    Share2,
} from "lucide-react";

import { Button } from "@/components/ui";

import styles from "./ShareActions.module.css";

import { copyToClipboard } from "@/lib/clipboard";

interface ShareActionsProps {
    url: string;
    title: string;
    description: string;
}

type FeedbackType =
    | "idle"
    | "success"
    | "error";

interface Feedback {
    type: FeedbackType;
    message: string;
}

export function ShareActions({
    url,
    title,
    description,
}: ShareActionsProps) {
    const [feedback, setFeedback] =
        useState<Feedback>({
            type: "idle",
            message: "",
        });

    const [isSharing, setIsSharing] =
        useState(false);

    async function handleCopy(): Promise<void> {
        try {
            await copyToClipboard(url);

            setFeedback({
                type: "success",
                message:
                    "Endereço copiado com sucesso!",
            });
        } catch {
            setFeedback({
                type: "error",
                message:
                    "Não foi possível copiar automaticamente. Selecione e copie o endereço manualmente.",
            });
        }
    }

    async function handleShare(): Promise<void> {
        if (isSharing) {
            return;
        }

        setFeedback({
            type: "idle",
            message: "",
        });

        const shareData = {
            title,
            text: description,
            url,
        };

        if (
            typeof navigator.share !== "function" ||
            (
                typeof navigator.canShare === "function" &&
                !navigator.canShare(shareData)
            )
        ) {
            await handleCopy();

            return;
        }

        setIsSharing(true);

        try {
            await navigator.share(shareData);

            setFeedback({
                type: "success",
                message:
                    "Ação de compartilhamento concluída pelo dispositivo.",
            });
        } catch (error: unknown) {
            if (
                error instanceof DOMException &&
                error.name === "AbortError"
            ) {
                return;
            }

            await handleCopy();
        } finally {
            setIsSharing(false);
        }
    }

    return (
        <div className={styles.actions}>
            <div className={styles.urlGroup}>
                <label
                    htmlFor="share-resume-url"
                    className={styles.label}
                >
                    Endereço do currículo digital
                </label>

                <input
                    id="share-resume-url"
                    type="url"
                    value={url}
                    readOnly
                    className={styles.urlInput}
                    onFocus={(event) => {
                        event.currentTarget.select();
                    }}
                />
            </div>

            <div className={styles.buttons}>
                <Button
                    variant="secondary"
                    leftIcon={<Copy />}
                    onClick={handleCopy}
                    disabled={isSharing}
                    fullWidth
                >
                    Copiar endereço
                </Button>

                <Button
                    variant="primary"
                    leftIcon={<Share2 />}
                    onClick={handleShare}
                    disabled={isSharing}
                    fullWidth
                >
                    {isSharing
                        ? "Compartilhando..."
                        : "Compartilhar currículo"}
                </Button>
            </div>

            <p
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className={[
                    styles.feedback,
                    styles[feedback.type],
                ].join(" ")}
            >
                {feedback.message}
            </p>
        </div>
    );
}