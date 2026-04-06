import { useReveal } from '../hooks/useReveal'
import styles from './Hero.module.css'

const stats = [
  { val: '<3 mo',   label: 'ROI guarantee' },
  { val: '10–30%',  label: 'of problem cost / month' },
  { val: '0',       label: 'vendor lock-in' },
]

export default function Hero() {
  const eyebrow = useReveal()
  const h1      = useReveal()
  const sub     = useReveal()
  const actions = useReveal()
  const statsEl = useReveal()

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p ref={eyebrow} className={`${styles.eyebrow} reveal`}>
          <span className={styles.eyebrowDot} />
          AI-first · Workflow automation · Impact-based pricing
        </p>

        <h1 ref={h1} className={`${styles.h1} reveal delay-1`}>
          Fix your ops.<br />
          <em>Pay based on ROI.</em>
        </h1>

        <p ref={sub} className={`${styles.sub} reveal delay-2`}>
          We audit your workflows, identify what's costing you the most, and automate it — using the right technology for the job. You pay a fraction of what the problem was costing you, and see results immediately.
        </p>

        <div ref={actions} className={`${styles.actions} reveal delay-3`}>
          <a
            href="https://calendar.app.google/ebLJgX97qppEVqW28"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-primary-lg"
          >
            Book a free audit call
          </a>
          <span className={styles.actionTag}>No commitment · 30 min · We come prepared</span>
        </div>

        <div ref={statsEl} className={`${styles.statsBar} reveal delay-4`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.val}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
