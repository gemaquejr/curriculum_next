export type EducationCategory =
    | "degree"
    | "professional"
    | "course"
    | "certification";

export type EducationStatus =
    | "completed"
    | "in_progress"
    | "incomplete";

export type EducationIcon =
    | "graduation"
    | "code"
    | "book"
    | "award";

export interface EducationPeriod {
    start?: string;
    end?: string;
}

export interface EducationCredential {
    id?: string;
    url?: string;
}

export interface Education {
    id: string;
    title: string;
    institution: string;
    category: EducationCategory;
    status: EducationStatus;
    icon: EducationIcon;
    period?: EducationPeriod;
    location?: string;
    description: string;
    skills: readonly string[];
    workloadHours?: number;
    credential?: EducationCredential;
    institutionUrl?: string;
}

export interface EducationContent {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly Education[];
}