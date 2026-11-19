"use client";

import { useActiveSection } from "@/hooks";

import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function HeaderNavigation() {
    const {
        activeSection,
        setActiveSection,
    } = useActiveSection();

    return (
        <>
            <Navigation
                activeSection={activeSection}
                onNavigate={setActiveSection}
            />

            <MobileMenu
                activeSection={activeSection}
                onNavigate={setActiveSection}
            />
        </>
    );
}