import { Container } from "../Container";

import { Brand } from "./Brand";
import { HeaderNavigation } from "./HeaderNavigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <Brand />

                    <div className={styles.actions}>
                        <ThemeSwitcher />
                        <HeaderNavigation />
                    </div>
                </div>
            </Container>
        </header>
    );
}