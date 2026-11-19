import { Container } from "../Container";

import { Brand } from "./Brand";
import { HeaderNavigation } from "./HeaderNavigation";

import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <Brand />

                    <HeaderNavigation />
                </div>
            </Container>
        </header>
    );
}