export type AboutHighlightIcon =
    | "code"
    | "layers"
    | "users"
    | "science"
    | "shield"
    | "book";

export interface AboutHighlight {
    id: string;
    icon: AboutHighlightIcon;
    title: string;
    description: string;
}

export interface AboutContent {
    eyebrow: string;
    title: string;
    subtitle: string;
    paragraphs: readonly string[];
    highlights: readonly AboutHighlight[];
}