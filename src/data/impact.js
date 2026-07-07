// Impact-Kennzahlen + Partner für die finale Hero-Etappe (05 "Neuer Wert").
// WICHTIG: Zahlen NICHT erfinden. Standard = qualitative Blöcke.
// Echte Zahlen -> IMPACT_MODE.useRealNumbers = true und impactRealStats füllen.
export const IMPACT_MODE = {
	useRealNumbers: false,
}

// Platzhalter — mit echten Werten ersetzen, bevor useRealNumbers=true.
export const impactRealStats = [
	{ value: "— %", label: "weniger CO₂ als Primärmetall" },
	{ value: "— t", label: "Metall zurück in den Kreislauf" },
	{ value: "100%", label: "regional & nachvollziehbar" },
]

// Qualitative Aussagen — sicher, ohne erfundene Zahlen.
export const impactQualitative = [
	{ value: "CO₂", label: "gespart — Recycling statt Neuproduktion" },
	{ value: "Kreislauf", label: "Metalle bleiben im Wertstoffkreislauf" },
	{ value: "Regional", label: "kurze Wege, nachvollziehbare Prozesse" },
]

export function getImpact() {
	return IMPACT_MODE.useRealNumbers ? impactRealStats : impactQualitative
}

// "Wer uns vertraut" — SVG-Logos in public/assets/partners/ ablegen.
// Bis echte Logos vorliegen, greift der onerror-Fallback (Name als Text).
export const partners = [
	{ name: "Thüringen Min", logo: "/assets/partners/thueringen-min.png" },
	{ name: "EDEKA", logo: "/assets/partners/edeka.png" },
	{ name: "Lidl", logo: "/assets/partners/lidl.png" },
]

