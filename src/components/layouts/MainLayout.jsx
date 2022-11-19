// Css
import styles from "../../css/MainLayout.module.css"

export const MainLayout = ({children}) => {
  return (
    <>
        <header className={styles.headerClass}>
            <h2>Simulacr. challenge</h2>
            <i className={`fa-solid fa-bars ${styles.menuVisibility}`} />
        </header>

        <main className={styles.mainClass}>
            {children}
        </main>

        <footer className={styles.footerClass}>
            <h3>Joaquín S. Caggiano - 2022</h3>
        </footer>
    </>
  )
}
