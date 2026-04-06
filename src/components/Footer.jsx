import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.logo}>
        <div className={styles.logoMark} />
        Quill
      </a>
      <div className={styles.links}>
        <a href="mailto:pedrodias@quillhk.com" className={styles.link}>Contact</a>
        <a href="https://calendar.app.google/ebLJgX97qppEVqW28" target="_blank" rel="noopener noreferrer" className={styles.link}>Book a call</a>
      </div>
      <span className={styles.copy}>© 2025 Quill</span>
    </footer>
  )
}
