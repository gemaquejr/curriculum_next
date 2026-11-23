import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const alt = `Currículo digital de ${profile.name}`;

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    padding: "80px",
                    background:
                        "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
                    color: "#f8fafc",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "32px",
                        color: "#60a5fa",
                        fontSize: 26,
                        fontWeight: 600,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                    }}
                >
                    Currículo Digital
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: 64,
                        fontWeight: 700,
                        lineHeight: 1.15,
                        maxWidth: 1050,
                    }}
                >
                    {profile.name}
                </div>

                <div
                    style={{
                        display: "flex",
                        marginTop: "28px",
                        color: "#cbd5e1",
                        fontSize: 36,
                        lineHeight: 1.3,
                    }}
                >
                    {profile.title}
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "56px",
                        gap: "16px",
                    }}
                >
                    <div
                        style={{
                            width: "56px",
                            height: "5px",
                            backgroundColor: "#60a5fa",
                            borderRadius: "4px",
                        }}
                    />

                    <div
                        style={{
                            color: "#94a3b8",
                            fontSize: 24,
                        }}
                    >
                        Projetos • Experiência • Competências
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}