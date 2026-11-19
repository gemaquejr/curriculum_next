import { useEffect, useState } from "react";

import { navigationItems } from "@/data/navigation";
import type { SectionId } from "@/types/navigation";

export function useActiveSection() {
    const [activeSection, setActiveSection] =
        useState<SectionId>("home");

    useEffect(() => {
        function syncFromHash() {
            const currentItem = navigationItems.find(
                (item) => item.href === window.location.hash,
            );

            if (currentItem) {
                setActiveSection(currentItem.id);
            }
        }

        syncFromHash();

        const sections = navigationItems.flatMap(
            (item) => {
                const element = document.getElementById(
                    item.id,
                );

                return element ? [element] : [];
            },
        );

        const headerHeight =
            document.querySelector("body > header")
                ?.getBoundingClientRect().height ?? 72;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top,
                    );

                const currentEntry = visibleEntries[0];

                if (!currentEntry) return;

                const currentItem = navigationItems.find(
                    (item) =>
                        item.id === currentEntry.target.id,
                );

                if (currentItem) {
                    setActiveSection(currentItem.id);
                }
            },
            {
                root: null,
                rootMargin: `-${Math.ceil(headerHeight)}px 0px -65% 0px`,
                threshold: 0,
            },
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        window.addEventListener(
            "hashchange",
            syncFromHash,
        );

        return () => {
            observer.disconnect();

            window.removeEventListener(
                "hashchange",
                syncFromHash,
            );
        };
    }, []);

    return {
        activeSection,
        setActiveSection,
    };
}