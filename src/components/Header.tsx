import styles from "./Header.module.css"
import igniteLogo from "../assets/igniteLogo.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ igniteLogo } alt="Logotipo do ignite" />
            <h1>Ignite Feed</h1>
        </header>
    )
}