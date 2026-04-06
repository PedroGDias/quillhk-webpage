import { useReveal } from '../hooks/useReveal'
import styles from './CTA.module.css'

export default function CTA() {
  const label = useReveal()
  const title = useReveal()
  const body  = useReveal()
  const row   = useReveal()

  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <div className="section-label reveal" ref={label}>Ready?</div>
        <h2 className={`${styles.title} reveal delay-1`} ref={title}>
          Start with a free<br /><em>audit call.</em>
        </h2>
        <p className={`${styles.body} reveal delay-2`} ref={body}>
          We'll map one of your biggest pain points, put a number on it, and show you exactly what a solution would look like and cost.
        </p>
        <div className={`${styles.row} reveal delay-3`} ref={row}>
          <a
            href="https://calendar.app.google/ebLJgX97qppEVqW28"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-primary-lg"
          >
            Let&apos;s talk
          </a>
          <span className={styles.fine}>30 min · Talk through pain points, inefficiencies &amp; costs</span>
        </div>
      </div>
    </section>
  )
}
