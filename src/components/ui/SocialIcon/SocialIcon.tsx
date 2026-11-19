import type { ComponentType } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

import type { SocialPlatform } from "@/types/profile";

interface SocialIconComponentProps {
    size?: number;
    "aria-hidden"?: boolean;
}

export interface SocialIconProps {
    platform: SocialPlatform;
    size?: number;
}

const platformIcons: Record<
    SocialPlatform,
    ComponentType<SocialIconComponentProps>
> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: Mail,
};

export function SocialIcon({
    platform,
    size = 21,
}: SocialIconProps) {
    const Icon = platformIcons[platform];

    return (
        <Icon
            size={size}
            aria-hidden={true}
        />
    );
}