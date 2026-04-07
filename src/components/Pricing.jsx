import { useReveal } from '../hooks/useReveal'
import styles from './Pricing.module.css'

const roiMonths = [
  { label: 'M1', type: 'red' },
  { label: 'M2', type: 'red' },
  { label: 'M3', type: 'mixed', tag: '↗ ROI' },
  { label: 'M4', type: 'green' },
  { label: 'M5', type: 'green' },
  { label: 'M6', type: 'green' },
]

export default function Pricing() {
  const label = useReveal()
  const title = useReveal()
  const body  = useReveal()
  const card  = useReveal()
  const roi   = useReveal()

  return (
    <section className={`section section-alt ${styles.section}`} id="pricing">
      <div className="container">
        <div className="section-label reveal" ref={label}>Pricing model</div>
        <h2 className="section-title reveal delay-1" ref={title}>
          You pay according to<br /><em>what you get.</em>
        </h2>
        <p className="section-body reveal delay-2" ref={body}>
          No fixed retainers. The math is simple and always in your favour.
        </p>

        <div className={styles.layout}>
          <div ref={card} className={`${styles.card} reveal delay-1`}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>Example: $2,000/mo problem or manual workaround</span>
              <span className={styles.cardTag}>Illustrative</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.mathRows}>
                <Row label="What you pay today (problem cost and/or manual solution)" val="$2,000 / mo" />
                <hr className={styles.divider} />
                <Row label="One-off mobilisation fee (2× monthly cost)" val="$4,000" accent />
                <Row label="Monthly fee (25% of problem cost)" val="$500 / mo" accent />
                <hr className={styles.divider} />
                <Row label="You save" val="$1,500 / mo" green />
                <Row label="ROI breakeven" val="2.67 months" green />
                <Row label="Net savings / year (after breakeven)" val="$18,000" green />
              </div>
              <p className={styles.note}>
                Pricing is agreed upfront and stays fixed within the scope defined at the audit. If your usage or scale grows significantly beyond the original baseline, we renegotiate — fees always stay proportional to the impact we're delivering, never arbitrary.
              </p>
            </div>
          </div>

          <div ref={roi} className={`${styles.roiCard} reveal delay-2`}>
            <div className={styles.roiLabel}>ROI timeline — typical engagement</div>
            <div className={styles.roiMonths}>
              <div className={styles.barsRow}>
                {roiMonths.map((m) => (
                  <div key={m.label} className={`${styles.bar} ${styles[m.type]}`} />
                ))}
              </div>
              <div className={styles.labelsRow}>
                {roiMonths.map((m) => (
                  <div key={m.label} className={styles.monthLabel}>
                    <span className={styles.monthNum}>{m.label}</span>
                    {m.tag && <span className={styles.monthTag}>{m.tag}</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.roiLegend}>
              <div className={styles.legendItem}>
                <div className={styles.legendDot} style={{ background: '#f5c3b3' }} />
                Net investment phase
              </div>
              <div className={styles.legendItem}>
                <div className={styles.legendDot} style={{ background: '#a8e6bf' }} />
                Net positive
              </div>
            </div>
            <div className={styles.roiMeta}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Performance tracked live</span>
                <span className={styles.liveTag}><span className={styles.liveDot} /> Live dashboard</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Costs &amp; savings visible in real time</span>
                <span className={styles.metaVal}>Always-on</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Optimised continuously</span>
                <span className={styles.metaVal}>Included</span>
              </div>
            </div>
            <div className={styles.handover}>
              <div className={styles.handoverLabel}>Optional — want to fully own the solution?</div>
              <p className={styles.handoverBody}>
                Code, docs, migration support, and handover sessions — everything your team needs to own it.
              </p>
              <div className={styles.handoverRow}>
                <span className={styles.handoverDesc}>One-off handover fee · 2× monthly problem cost</span>
                <span className={styles.handoverVal}>$4,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, val, accent, green, dim }) {
  return (
    <div className={`${styles.row} ${dim ? styles.dimRow : ''}`}>
      <span className={styles.rowLabel}>{label}</span>
      <span className={`${styles.rowVal} ${accent ? styles.accent : ''} ${green ? styles.green : ''}`}>{val}</span>
    </div>
  )
}
