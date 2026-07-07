// ВАЖНО: цифры не выдумываем. По умолчанию — качественные блоки (без чисел).
// Если появятся РЕАЛЬНЫЕ цифры — выставь useRealNumbers=true и заполни realStats.
export const STATS_MODE = {
	useRealNumbers: false,
}

// Плейсхолдеры — ЗАМЕНИТЬ реальными данными перед включением useRealNumbers.
export const realStats = [
	{ value: "— t", label: "Metall zurück in den Kreislauf" },
	{ value: "—+", label: "Jahre Erfahrung" },
	{ value: "5", label: "klare Materialströme" },
	{ value: "100%", label: "regional, nachvollziehbar, professionell" },
]

// Качественные блоки — безопасны, не требуют цифр.
export const qualitativeStats = [
	{ value: "Materialströme", label: "sauber getrennt" },
	{ value: "Bauteile", label: "fachgerecht demontiert" },
	{ value: "Metalle", label: "zurück in den Kreislauf" },
	{ value: "Arbeit", label: "mit Technik, Struktur und Sinn" },
]

export function getStats() {
	return STATS_MODE.useRealNumbers ? realStats : qualitativeStats
}
