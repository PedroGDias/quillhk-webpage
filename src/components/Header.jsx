import styles from './Header.module.css'
import logo from '../assets/quill-logo.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="Quill HK" className={styles.logoImg} />
        <span className={styles.logoName}>Quill HK</span>
      </a>

      <nav className={styles.nav}>
        <a href="#how-it-works" className={styles.navLink}>How it works</a>
        {/*
          <a href="#tech" className={styles.navLink}>Tech &amp; AI</a>
        */}
        <a href="#pricing" className={styles.navLink}>Pricing</a>
        <a href="#security" className={styles.navLink}>Security</a>
        <a href="#zero-risk" className={styles.navLink}>Zero risk</a>
        <a
          href="https://calendar.app.google/ebLJgX97qppEVqW28"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  )
}
