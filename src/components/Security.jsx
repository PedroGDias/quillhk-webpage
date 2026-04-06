import { useReveal } from '../hooks/useReveal'
import styles from './Security.module.css'

const items = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'On-premise deployment',
    body: 'We can deliver the full solution inside your private servers or data centre. Your data never leaves your network.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    title: 'Private dedicated server',
    body: 'Need cloud but not shared? We provision and manage a private dedicated server environment isolated from any other client.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Self-hosted AI models',
    body: 'When AI is part of the solution, we can run it on a private or self-hosted LLM (Ollama, vLLM, LM Studio). No data sent to third-party APIs unless you explicitly choose to.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v16h5v4l4-4h4l5-5V2z"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="12" y2="12"/></svg>,
    title: 'Self-hosted tooling',
    body: 'We favour open-source and self-hostable tools (n8n, Supabase, Baserow) so your workflow stack is fully under your control with no SaaS dependencies unless you want them.',
  },
]

const options = [
  {
    title: 'Cloud (default)',
    body: 'Fastest to ship. We manage infrastructure on a shared cloud. Best for non-sensitive data and teams that want zero ops overhead.',
  },
  {
    title: 'Private cloud / dedicated server',
    body: 'Your cloud account, your VPC, your keys. We build and deploy into your existing infrastructure.',
  },
  {
    title: 'On-premise / air-gapped',
    body: 'Full deployment inside your physical or virtual private network. No external dependencies. Suitable for regulated industries — finance, legal, healthcare.',
  },
]

export default function Security() {
  const label = useReveal()
  const title = useReveal()
  const body  = useReveal()

  return (
    <section className={`section section-alt ${styles.section}`} id="security">
      <div className="container">
        <div className="section-label reveal" ref={label}>Security &amp; Privacy</div>
        <h2 className="section-title reveal delay-1" ref={title}>
          Your data stays<br /><em>where you want it.</em>
        </h2>
        <p className="section-body reveal delay-2" ref={body}>
          Every solution can be delivered on your terms — on your infrastructure, behind your firewall, with models you control.
        </p>

        <div className={styles.layout}>
          <div className={styles.items}>
            {items.map((item, i) => (
              <SecurityItem key={item.title} item={item} delay={i + 1} />
            ))}
          </div>

          <DeploymentOptions options={options} />
        </div>
      </div>
    </section>
  )
}

function SecurityItem({ item, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`${styles.item} reveal delay-${delay}`}>
      <div className={styles.itemIcon}>{item.icon}</div>
      <div>
        <div className={styles.itemTitle}>{item.title}</div>
        <p className={styles.itemBody}>{item.body}</p>
      </div>
    </div>
  )
}

function DeploymentOptions({ options }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`${styles.callout} reveal delay-2`}>
      <div className={styles.calloutHead}>
        <span className={styles.calloutDot} />
        <span className={styles.calloutTag}>Deployment options</span>
      </div>
      <div className={styles.calloutBody}>
        {options.map((o) => (
          <div key={o.title} className={styles.option}>
            <div className={styles.optionDot} />
            <div>
              <div className={styles.optionTitle}>{o.title}</div>
              <p className={styles.optionBody}>{o.body}</p>
            </div>
          </div>
        ))}
        <p className={styles.calloutNote}>Deployment mode is agreed during the audit phase at no extra cost.</p>
      </div>
    </div>
  )
}
