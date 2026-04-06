import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.meta}>
        <div className={styles.inlineRow}>
          <a href="/privacy.html" className={styles.link}>Privacy Policy</a>
          <a href="/terms.html" className={styles.link}>Terms of Service</a>
          <span className={styles.link}>© {year} Quill HK</span>
        </div>
      </div>
    </footer>
  )
}
