// Инженерные аннотации (marker -> thin line -> label -> side panel).
// Появляются ТОЛЬКО после фазы Analyse (stage index >= 1).
// x/y — % внутри viewport; side — с какой стороны уходит линия (left/right).
export const hotspots = [
	{
		id: "karosserie",
		num: "01",
		label: "Karosserie & Stahl",
		material: "Stahl, Aluminium, Beschichtung",
		process: "Trennen → Sortieren → Verwerten",
		result: "Hauptmaterial des Fahrzeugs. Wird getrennt, sortiert und als Wertstoff vorbereitet.",
		x: 34,
		y: 52,
		side: "right",
	},
	{
		id: "kabel",
		num: "02",
		label: "Kabel & Elektronik",
		material: "Kupfer, Kunststoff, Isolierung",
		process: "Ausbauen → Material trennen → Kupfer zurückgewinnen",
		result: "Separater Materialstrom. Wird gezielt entfernt und weitergeführt.",
		x: 52,
		y: 38,
		side: "left",
	},
	{
		id: "reifen",
		num: "03",
		label: "Gummi & Reifen",
		material: "Gummi, Stahl, Aluminium",
		process: "Vorbehandlung → Trennung → Recyclingweg",
		result: "Vorbehandlung und Trennung. Geht in passende Recyclingwege.",
		x: 68,
		y: 68,
		side: "right",
	},
	{
		id: "aluminium",
		num: "04",
		label: "Aluminium / Leichtmetall",
		material: "Aluminium, Leichtmetalle",
		process: "Erkennen → Separate Sortierung → Wertstoff",
		result: "Wertstoff mit separater Sortierung.",
		x: 44,
		y: 70,
		side: "left",
	},
]
