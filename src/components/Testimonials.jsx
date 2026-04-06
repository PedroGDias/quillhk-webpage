import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import ritaImg     from '../assets/photos/rita.jpeg'
import laurenceImg from '../assets/photos/laurence.jpeg'
import joaoImg     from '../assets/photos/joao.jpeg'
import lukasImg    from '../assets/photos/lukas.jpeg'
import arunImg     from '../assets/photos/arun.jpeg'
import chrisImg    from '../assets/photos/chris.jpeg'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'Pedro developed and implemented a system that streamlined performance tracking and operational reporting (...) automated donor receipts from Salesforce (...) His work had a direct impact on productivity and efficiency.',
    name: 'Rita Gomes',
    role: 'Head of Individual Giving',
    company: 'WWF Portugal',
    photo: ritaImg,
    linkedin: 'https://www.linkedin.com/in/ritagomespim/',
  },
  {
    quote: 'Pedro took the lead in defining requirements and context engineering on an LLM-heavy project (...) combined strong technical insight with excellent human management skills (...) consistently delivered high-quality results.',
    name: 'Laurence Jennings',
    role: 'Data Scientist, ML Engineer',
    company: 'Independent',
    photo: laurenceImg,
    linkedin: 'https://www.linkedin.com/in/jenningslaurence/',
  },
  {
    quote: 'Pedro led the development of our MVP with full autonomy and excellent deliverables (...) clients are happy, the product delivers and we\'ve had zero product issues.',
    name: 'João Ferrão dos Santos',
    role: 'Growth Mentor, early-stage founders',
    company: 'Premium LinkedIn Coach',
    photo: joaoImg,
    linkedin: 'https://www.linkedin.com/in/joao-ferrao-dos-santos/',
  },
  {
    quote: 'Pedro impressed me with his logical and structured way of working (...) identifying opportunities and potential improvements (...) reliable, detail-oriented, and genuinely invested in creating long-term value.',
    name: 'Lukas Friedemann',
    role: 'Founder & Chief of Growth and Product',
    company: 'The Equal Food Co.',
    photo: lukasImg,
    linkedin: 'https://www.linkedin.com/in/lukas-friedemann-6a050660/',
  },
  {
    quote: 'Pedro took on the hardest, most complex problems, broke them down systematically, and delivered scalable solutions (...) leadership and problem-solving made a material difference to what we accomplished.',
    name: 'Arun Makhija',
    role: 'Previously C-level',
    company: 'ex-Delivery Hero',
    photo: arunImg,
    linkedin: 'https://www.linkedin.com/in/arun-makhija-b4417925/',
  },
  {
    quote: 'Pedro is an incredibly thorough, diligent and hardworking professional with excellent project management skills (...) high curiosity and capable of zooming in and out with great detail and attention.',
    name: 'Chris Prescott',
    role: 'Founder and CEO',
    company: 'Stealth AI Startup',
    photo: chrisImg,
    linkedin: 'https://www.linkedin.com/in/chris-prescott/',
  },
]

export default function Testimonials() {
  const label   = useReveal()
  const title   = useReveal()
  const track   = useReveal()
  const [paused, setPaused] = useState(false)

  // Duplicate for seamless loop
  const items = [...testimonials, ...testimonials]

  return (
    <section className={`section section-alt ${styles.section}`} id="testimonials">
      <div className="container">
        <div className="section-label reveal" ref={label}>From clients &amp; collaborators</div>
        <h2 className="section-title reveal delay-1" ref={title}>What people say.</h2>
      </div>

      <div
        ref={track}
        className={`${styles.trackWrap} reveal delay-2`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`${styles.track} ${paused ? styles.paused : ''}`}>
          {items.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>{t.quote}</p>
      <div className={styles.footer}>
        <img src={t.photo} alt={t.name} className={styles.avatar} />
        <div className={styles.info}>
          <a
            href={t.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.name}
          >
            {t.name}
          </a>
          <div className={styles.role}>{t.role}</div>
          <div className={styles.company}>{t.company}</div>
        </div>
      </div>
    </div>
  )
}
