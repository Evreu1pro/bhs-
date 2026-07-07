// 5 этапов. visual — идентификатор визуального состояния (CSS-класс is-<visual>).
// video/poster — ключи из assets.heroVideos / assets.heroPosters (null = только fallback).
export const stages = [
	{
		id: "analyse",
		num: "01",
		label: "Analyse",
		headline: "Jedes Objekt beginnt mit Kontrolle.",
		text: "Wir erkennen Materialien, Bauteile und Wertstoffe, bevor der Prozess startet.",
		visual: "scan",
		video: "intro",
		poster: "intro",
	},
	{
		id: "demontage",
		num: "02",
		label: "Demontage",
		headline: "Schritt für Schritt zerlegt.",
		text: "Komplexe Bauteile werden fachgerecht getrennt — sicher, sauber und nachvollziehbar.",
		visual: "cut",
		video: "disassembly",
		poster: "disassembly",
	},
	{
		id: "sortierung",
		num: "03",
		label: "Sortierung",
		headline: "Aus Einzelteilen wird Ordnung.",
		text: "Metall, Gummi, Kabel, Kunststoff und Technik gehen in die passenden Materialströme.",
		visual: "streams",
		video: "orbit",
		poster: "orbit",
	},
	{
		id: "recycling",
		num: "04",
		label: "Recycling",
		headline: "Zurück in den Kreislauf.",
		text: "Wertstoffe werden weiterverarbeitet und bekommen eine neue industrielle Zukunft.",
		visual: "loop",
		video: "rear",
		poster: "rear",
	},
	{
		id: "wert",
		num: "05",
		label: "Neuer Wert",
		headline: "Material wird Ressource. Arbeit wird Wirkung.",
		text: "Dafür brauchen wir Menschen, die anpacken.",
		visual: "value",
		video: "wert",
		poster: "wert",
	},
]

export const processSteps = ["Analyse", "Demontage", "Sortierung", "Recycling", "Neuer Wert"]

export const heroCopy = {
	eyebrow: "BHS Metallrecycling · Walldorf",
	headline: "Aus Komplexität wird neuer Wert.",
	subline:
		"Fahrzeuge, Metalle und technische Komponenten werden professionell zerlegt, sortiert und zurück in den Kreislauf geführt.",
	ctaPrimary: "Karriere starten",
	ctaSecondary: "Unser Prozess",
}
