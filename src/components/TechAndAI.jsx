import { useReveal } from '../hooks/useReveal'
import styles from './TechAndAI.module.css'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'We start with the problem',
    body: 'Technology selection follows the problem — not the other way around. We define what needs to happen first, then identify the best available tools to make it happen reliably and cost-effectively.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'We adapt to your environment',
    body: 'Already on AWS? Running n8n internally? Locked into a specific database? We work with your existing infrastructure and constraints, integrating cleanly without forcing unnecessary migrations.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'AI where it earns its place',
    body: 'We use AI as a building tool — to move faster — and embed it into solutions where it genuinely improves outcomes. Not every problem needs an LLM. When it does, we pick the right model and keep it updated as better ones ship.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
      </svg>
    ),
    title: 'Solutions that keep improving',
    body: 'As part of ongoing maintenance, we continuously evaluate whether a better model, a cheaper API, or a new open-source tool would improve your solution — and we upgrade it proactively.',
  },
]

export default function TechAndAI() {
  const label = useReveal()
  const title = useReveal()
  const body  = useReveal()

  return (
    <section className={`section ${styles.section}`} id="tech">
      <div className="container">
        <div className="section-label reveal" ref={label}>Technology &amp; AI</div>
        <h2 className="section-title reveal delay-1" ref={title}>
          Technology chosen for<br /><em>the problem, not the hype.</em>
        </h2>
        <p className="section-body reveal delay-2" ref={body}>
          The ecosystem moves fast, and that's a good thing — better tools mean better outcomes for you. We stay close to what's available, pick what genuinely fits the problem, and upgrade proactively when something meaningfully better comes along.
        </p>

        <div className={styles.grid}>
          {pillars.map((p, i) => (
            <Pillar key={p.title} pillar={p} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Pillar({ pillar, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`${styles.pillar} reveal delay-${delay}`}>
      <div className={styles.pillarHead}>
        <span className={styles.pillarIcon}>{pillar.icon}</span>
        <span className={styles.pillarTitle}>{pillar.title}</span>
      </div>
      <p className={styles.pillarBody}>{pillar.body}</p>
    </div>
  )
}
