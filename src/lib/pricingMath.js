/** Full-time month = 22 working days × 8 h/day (assumption for FTE in the estimator). */
export const WORK_DAYS_PER_MONTH = 22
export const HOURS_PER_WORKDAY = 8
export const HOURS_PER_MONTH_FT = WORK_DAYS_PER_MONTH * HOURS_PER_WORKDAY

/** Ongoing fee as a share of agreed monthly baseline (case-dependent). */
export const FEE_PCT_LOW = 10
export const FEE_PCT_HIGH = 30

export function monthlyBaselineFromInputs({
  fteWorkers,
  monthlyFteCost,
  infrastructure,
}) {
  const fte = Math.max(0, fteWorkers)
  const c = Math.max(0, monthlyFteCost)
  const infra = Math.max(0, infrastructure)
  const labor = fte * c
  return labor + infra
}

export function laborCostFromInputs({ fteWorkers, monthlyFteCost }) {
  const fte = Math.max(0, fteWorkers)
  const c = Math.max(0, monthlyFteCost)
  return fte * c
}

/**
 * Mobilisation and optional handover: 2× monthly baseline.
 * Ongoing fee: between FEE_PCT_LOW and FEE_PCT_HIGH % of baseline (set at audit).
 * @returns {null} when monthly baseline is not positive
 */
export function pricingFromBaseline(monthlyBaseline) {
  if (!(monthlyBaseline > 0)) return null
  const M = monthlyBaseline
  const mobilisation = 2 * M
  const rLow = FEE_PCT_LOW / 100
  const rHigh = FEE_PCT_HIGH / 100
  const monthlyFeeLow = rLow * M
  const monthlyFeeHigh = rHigh * M
  const monthlySaveLow = M - monthlyFeeHigh
  const monthlySaveHigh = M - monthlyFeeLow
  const savePctLow = Math.round((100 * monthlySaveLow) / M)
  const savePctHigh = Math.round((100 * monthlySaveHigh) / M)
  const breakevenMonthsLow = mobilisation / monthlySaveHigh
  const breakevenMonthsHigh = mobilisation / monthlySaveLow
  const annualSaveLow = monthlySaveLow * 12
  const annualSaveHigh = monthlySaveHigh * 12

  return {
    monthlyBaseline: M,
    mobilisation,
    handoverFee: mobilisation,
    feePctLow: FEE_PCT_LOW,
    feePctHigh: FEE_PCT_HIGH,
    monthlyFeeLow,
    monthlyFeeHigh,
    monthlySaveLow,
    monthlySaveHigh,
    savePctLow,
    savePctHigh,
    breakevenMonthsLow,
    breakevenMonthsHigh,
    annualSaveLow,
    annualSaveHigh,
  }
}

export function formatUsd(n) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)
}

export function formatUsdRange(low, high) {
  return `${formatUsd(low)}–${formatUsd(high)}`
}

export function formatBreakevenMonths(months) {
  return `${months.toFixed(2)} months`
}

export function formatBreakevenRange(lowMonths, highMonths) {
  return `${lowMonths.toFixed(2)}–${highMonths.toFixed(2)} months`
}

export function formatMonthlyFeeBand(p) {
  return `${formatUsdRange(p.monthlyFeeLow, p.monthlyFeeHigh)} / mo (${p.feePctLow}–${p.feePctHigh}%)`
}

export function formatMonthlySaveBand(p) {
  return `${formatUsdRange(p.monthlySaveLow, p.monthlySaveHigh)} / mo (${p.savePctLow}–${p.savePctHigh}%)`
}

export function formatAnnualSaveBand(p) {
  return `${formatUsdRange(p.annualSaveLow, p.annualSaveHigh)} (${p.savePctLow}–${p.savePctHigh}%)`
}
