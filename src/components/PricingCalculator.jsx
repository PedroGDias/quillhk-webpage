import { useMemo, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import {
  FEE_PCT_HIGH,
  FEE_PCT_LOW,
  HOURS_PER_MONTH_FT,
  HOURS_PER_WORKDAY,
  WORK_DAYS_PER_MONTH,
  formatAnnualSaveBand,
  formatBreakevenRange,
  formatMonthlyFeeBand,
  formatMonthlySaveBand,
  formatUsd,
  monthlyBaselineFromInputs,
  pricingFromBaseline,
} from '../lib/pricingMath'
import styles from './PricingCalculator.module.css'

const PLACEHOLDER = '?'

function parseNum(s) {
  const n = parseFloat(String(s).replace(/,/g, ''))
  return Number.isFinite(n) ? n : 0
}

function ResultRow({ label, val, accent, green, dim }) {
  const isPlaceholder = val === PLACEHOLDER
  return (
    <div className={`${styles.row} ${dim ? styles.dimRow : ''}`}>
      <span className={styles.rowLabel}>{label}</span>
      <span
        className={`${styles.rowVal} ${!isPlaceholder && accent ? styles.accent : ''} ${!isPlaceholder && green ? styles.green : ''} ${isPlaceholder ? styles.placeholderVal : ''}`}
      >
        {val}
      </span>
    </div>
  )
}

function SubHead({ children, spaced }) {
  return (
    <h3 className={`${styles.subHead} ${spaced ? styles.subHeadSpaced : ''}`}>
      {children}
    </h3>
  )
}

export default function PricingCalculator() {
  const label = useReveal()
  const title = useReveal()
  const body = useReveal()
  const grid = useReveal()

  const [workflowName, setWorkflowName] = useState('')
  const [fteWorkers, setFteWorkers] = useState('')
  const [monthlyFteCost, setMonthlyFteCost] = useState('')
  const [infrastructure, setInfrastructure] = useState('')

  const nums = useMemo(
    () => ({
      fteWorkers: parseNum(fteWorkers),
      monthlyFteCost: parseNum(monthlyFteCost),
      infrastructure: parseNum(infrastructure),
    }),
    [fteWorkers, monthlyFteCost, infrastructure]
  )

  const baseline = useMemo(() => monthlyBaselineFromInputs(nums), [nums])
  const pricing = useMemo(() => pricingFromBaseline(baseline), [baseline])

  const titleName = workflowName.trim() || PLACEHOLDER

  return (
    <section className={`section ${styles.section}`} id="estimate">
      <div className="container">
        <div className="section-label reveal" ref={label}>
          Workflow cost estimator
        </div>
        <h2 className="section-title reveal delay-1" ref={title}>
          Rough cost today,<br /><em>solution pricing &amp; savings.</em>
        </h2>
        <p className="section-body reveal delay-2" ref={body}>
          FTE on this workflow, loaded monthly cost per full-timer, plus infrastructure — that’s your
          baseline. Typical ongoing fee is {FEE_PCT_LOW}–{FEE_PCT_HIGH}% of that; the table brackets
          low and high so you can see fees, savings, and payback.
        </p>

        <div ref={grid} className={`${styles.grid} reveal delay-3`}>
          <div className={`${styles.card} ${styles.cardInputs}`}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>Inputs</span>
              <span className={styles.cardTag}>Private · in-browser</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.fields}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="calc-workflow">
                    Workflow name
                  </label>
                  <input
                    id="calc-workflow"
                    className={styles.input}
                    type="text"
                    autoComplete="off"
                    placeholder="e.g. Month-end close checklist"
                    value={workflowName}
                    onChange={(e) => setWorkflowName(e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="calc-fte">
                    Number of full-time equivalent workers
                  </label>
                  <input
                    id="calc-fte"
                    className={styles.input}
                    type="number"
                    min={0}
                    step="any"
                    inputMode="decimal"
                    placeholder="e.g. 2 or 0.5"
                    value={fteWorkers}
                    onChange={(e) => setFteWorkers(e.target.value)}
                  />
                  <p className={styles.fieldHint}>
                    Fractional FTE allowed ({WORK_DAYS_PER_MONTH} × {HOURS_PER_WORKDAY} h/mo per 1.0
                    FTE).
                  </p>
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="calc-cost">
                    Monthly cost per full-time worker (USD)
                  </label>
                  <input
                    id="calc-cost"
                    className={styles.input}
                    type="number"
                    min={0}
                    step={100}
                    inputMode="decimal"
                    placeholder="Salary, taxes, benefits…"
                    value={monthlyFteCost}
                    onChange={(e) => setMonthlyFteCost(e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="calc-infra">
                    Infrastructure (USD / month)
                  </label>
                  <input
                    id="calc-infra"
                    className={styles.input}
                    type="number"
                    min={0}
                    step={50}
                    inputMode="decimal"
                    placeholder="Tools, seats, space share…"
                    value={infrastructure}
                    onChange={(e) => setInfrastructure(e.target.value)}
                  />
                </div>
              </div>
              <p className={styles.fieldNote}>
                Nothing is sent to a server. Figures are indicative; we confirm baseline and fees with
                you during the audit.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardEstimate}`}>
            <div className={styles.cardHead}>
              <span
                className={`${styles.cardTitle} ${titleName === PLACEHOLDER ? styles.cardTitlePlaceholder : ''}`}
              >
                {titleName}
              </span>
              <span className={styles.cardTag}>Estimated</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.mathRows}>
                <SubHead>Problem</SubHead>
                <ResultRow
                  label="Current cost of your problem / manual solution"
                  val={
                    pricing
                      ? `${formatUsd(pricing.monthlyBaseline)} / mo`
                      : PLACEHOLDER
                  }
                />
                <SubHead spaced>Solution</SubHead>
                <ResultRow
                  label="One-off mobilisation fee (2× monthly cost)"
                  val={pricing ? formatUsd(pricing.mobilisation) : PLACEHOLDER}
                  accent
                />
                <ResultRow
                  label={`Monthly fee (${FEE_PCT_LOW}–${FEE_PCT_HIGH}% of baseline, case-dependent)`}
                  val={pricing ? formatMonthlyFeeBand(pricing) : PLACEHOLDER}
                  accent
                />
                <hr className={styles.divider} />
                <ResultRow
                  label="You save"
                  val={pricing ? formatMonthlySaveBand(pricing) : PLACEHOLDER}
                  green
                />
                <ResultRow
                  label="ROI breakeven"
                  val={
                    pricing
                      ? formatBreakevenRange(
                          pricing.breakevenMonthsLow,
                          pricing.breakevenMonthsHigh
                        )
                      : PLACEHOLDER
                  }
                  green
                />
                <ResultRow
                  label="Net savings / year (after breakeven)"
                  val={pricing ? formatAnnualSaveBand(pricing) : PLACEHOLDER}
                  green
                />
              </div>
              <p className={styles.note}>
                Mobilisation is 2× the agreed monthly baseline. Ongoing fee is usually{' '}
                {FEE_PCT_LOW}–{FEE_PCT_HIGH}% of that baseline once scope is defined — so you keep the
                rest each month (about {100 - FEE_PCT_HIGH}%–{100 - FEE_PCT_LOW}% of baseline).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
