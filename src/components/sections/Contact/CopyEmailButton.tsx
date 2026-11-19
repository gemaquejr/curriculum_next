"use client";

import { useState } from "react";

import {
    Check,
    Copy,
} from "lucide-react";

import { Button } from "@/components/ui/Button";

import { copyToClipboard } from "@/lib/clipboard";

import styles from "./CopyEmailButton.module.css";

interface CopyEmailButtonProps {
    email: string;
}

type FeedbackType =
    | "idle"
    | "success"
    | "error";

interface Feedback {
    type: FeedbackType;
    message: string;
}

export function CopyEmailButton({
    email,
}: CopyEmailButtonProps) {
    const [feedback, setFeedback] =
        useState<Feedback>({
            type: "idle",
            message: "",
        });

    const [isCopying, setIsCopying] =
        useState(false);

    async function handleCopy(): Promise<void> {
        if (isCopying) {
            return;
        }

        setIsCopying(true);

        try {
            await copyToClipboard(email);

            setFeedback({
                type: "success",
                message: "E-mail copiado com sucesso!",
            });
        } catch {
            setFeedback({
                type: "error",
                message:
                    "Não foi possível copiar automaticamente. Selecione o e-mail e copie manualmente.",
            });
        } finally {
            setIsCopying(false);
        }
    }

    const isCopied =
        feedback.type === "success";

    return (
        <div className={styles.container}>
            <Button
                variant="secondary"
                size="sm"
                className={styles.button}
                leftIcon={
                    isCopied
                        ? <Check />
                        : <Copy />
                }
                disabled={isCopying}
                onClick={handleCopy}
            >
                {isCopying
                    ? "Copiando..."
                    : isCopied
                        ? "Copiar novamente"
                        : "Copiar e-mail"}
            </Button>

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