import { useReveal } from '../hooks/useReveal'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: 'Step 01',
    title: 'Audit & find painpoints',
    body: 'We map your workflows, interview your team, and put a dollar value on every bottleneck we find. You leave the audit knowing exactly what\'s costing you and what fixing it would look like — before any commitment.',
    badge: 'Free · No commitment',
  },
  {
    num: 'Step 02',
    title: 'Build & deploy',
    body: 'We design and ship the solution — picking the right technology for the job, working within your existing stack where possible. One-off mobilisation fee covers everything from scoping to going live.',
    badge: 'One-off mobilisation fee',
  },
  {
    num: 'Step 03',
    title: 'Maintain & adapt',
    body: 'We keep the solution running, improving, and up to date. You pay a monthly fee proportional to what the problem was costing you — so our incentive is always to keep delivering, not just to keep the contract.',
    badge: 'Pay for impact, not effort',
  },
]

export default function HowItWorks() {
  const label = useReveal()
  const title = useReveal()
  const body  = useReveal()

  return (
    <section className={`section ${styles.section}`} id="how-it-works">
      <div className="container">
        <div className="section-label reveal" ref={label}>Process</div>
        <h2 className="section-title reveal delay-1" ref={title}>
          From problem to production.<br /><em>Fast to value.</em>
        </h2>
        <p className="section-body reveal delay-2" ref={body}>
          Three phases, end to end — from uncovering the problem to a live solution and ongoing maintenance. You own everything we build.
        </p>

        <div className={styles.grid}>
          {steps.map((s, i) => (
            <Step key={s.num} step={s} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Step({ step, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`${styles.step} reveal delay-${delay}`}>
      <div className={styles.stepNum}>{step.num}</div>
      <div className={styles.stepTitle}>{step.title}</div>
      <p className={styles.stepBody}>{step.body}</p>
      <span className={styles.stepBadge}>{step.badge}</span>
    </div>
  )
}
