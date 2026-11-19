export type SocialPlatform =
    | "github"
    | "linkedin"
    | "email";

export interface SocialLink {
    platform: SocialPlatform;
    label: string;
    href: string;
}

export interface ProfileImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface ProfileLocation {
    city: string;
    state: string;
    country: string;
}

export interface ProfileAvailability {
    isAvailable: boolean;
    label: string;
}

export interface Profile {
    name: string;
    initials: string;
    title: string;
    greeting: string;
    summary: string;
    location: ProfileLocation;
    availability: ProfileAvailability;
    technologies: readonly string[];
    socialLinks: readonly SocialLink[];
    image?: ProfileImage;
    resumeUrl?: string;
}