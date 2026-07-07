import { getStats, STATS_MODE } from "../data/stats.js"

export function renderStats() {
	const data = getStats()
	const cells = data.map((s) => `<div class="stat"><div class="stat__value">${s.value}</div><div class="stat__label">${s.label}</div></div>`).join("")
	const note = STATS_MODE.useRealNumbers ? "" : '<p class="stats__note">Qualitative Kennzahlen — echte Zahlen folgen.</p>'
	return `<section id="vorteile" class="stats" data-reveal><div class="container"><header class="section-head"><p class="eyebrow eyebrow--accent">Warum BHS</p><h2 class="section-title">Struktur, die man sieht — und Arbeit, die zählt.</h2></header><div class="stats__grid">${cells}</div>${note}</div></section>`
}
