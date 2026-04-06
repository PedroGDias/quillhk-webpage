import { useReveal } from '../hooks/useReveal'
import styles from './ZeroRisk.module.css'

const cards = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    title: 'Immediate impact',
    body: 'Performance and cost savings start from day one of deployment. We don\'t invoice for effort — we invoice because the problem is solved and the numbers prove it.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    title: 'Cancel any time',
    body: 'No contracts, no minimum terms. If you\'re not happy with the results, you stop paying. Pricing proportional to impact means our incentives are fully aligned with yours.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    title: 'Dedicated performance dashboard',
    body: 'Every client gets a live dashboard showing exactly what each automation is doing: units processed, time saved, cost saved, and ROI — updated in real time. You always know what you\'re paying for.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    title: 'Full code handover',
    body: 'Everything we build is yours. At any point you can request a full handover — complete codebase, documentation, and infrastructure setup — for a one-off handover fee.',
  },
]

const dashStats = [
  { val: '$18,420', label: 'Saved all time',       cls: 'accent' },
  { val: '$1,240',  label: 'Saved this month',     cls: 'green'  },
  { val: '4,831',   label: 'Tasks automated today', cls: ''       },
  { val: '312%',    label: 'Blended ROI',           cls: 'green'  },
]

const dashRows = [
  { name: 'Invoice reconciliation bot',   sub: 'Accounting · Python + OpenAI', saved: '$6,200 saved', roi: '410% ROI', live: true  },
  { name: 'Customer onboarding pipeline', sub: 'Ops · n8n + Airtable',         saved: '$8,900 saved', roi: '285% ROI', live: true  },
  { name: 'Weekly reporting agent',       sub: 'Analytics · Claude API + Sheets', saved: '—', roi: '—', live: false },
]

export default function ZeroRisk() {
  const label   = useReveal()
  const title   = useReveal()
  const body    = useReveal()
  const dash    = useReveal()

  return (
    <section className={`section ${styles.section}`} id="zero-risk">
      <div className="container">
        <div className="section-label reveal" ref={label}>Guarantees</div>
        <h2 className="section-title reveal delay-1" ref={title}>
          Zero risk.<br /><em>Zero lock-in.</em>
        </h2>
        <p className="section-body reveal delay-2" ref={body}>
          We designed the model so that the only reason you stay is because it works.
        </p>

        <div className={styles.grid}>
          {cards.map((c, i) => (
            <RiskCard key={c.title} card={c} delay={i + 1} />
          ))}
        </div>

        <div ref={dash} className={`${styles.dash} reveal`}>
          <div className={styles.dashHead}>
            <div className={`${styles.dot} ${styles.dotAccent}`} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <span className={styles.dashTitle}>quillhk.com / dashboard / your-company</span>
          </div>
          <div className={styles.dashStats}>
            {dashStats.map((s) => (
              <div key={s.label} className={styles.dashStat}>
                <span className={`${styles.dashStatVal} ${s.cls ? styles[s.cls] : ''}`}>{s.val}</span>
                <span className={styles.dashStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
          {dashRows.map((r) => (
            <div key={r.name} className={`${styles.dashRow} ${!r.live ? styles.dimmed : ''}`}>
              <div>
                <div className={styles.dashRowName}>{r.name}</div>
                <div className={styles.dashRowSub}>{r.sub}</div>
              </div>
              <div className={styles.dashRowRight}>
                {r.live
                  ? <span className={styles.liveTag}><span className={styles.liveDot} /> Live</span>
                  : <span className={styles.testingTag}>⏳ Testing</span>
                }
              </div>
              <div className={styles.dashRowVal}>{r.saved}</div>
              <div className={styles.dashRowVal}>{r.roi}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RiskCard({ card, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`${styles.card} reveal delay-${delay}`}>
      <div className={styles.cardIcon}>{card.icon}</div>
      <div className={styles.cardTitle}>{card.title}</div>
      <p className={styles.cardBody}>{card.body}</p>
    </div>
  )
}
