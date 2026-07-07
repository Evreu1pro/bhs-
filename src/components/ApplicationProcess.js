const steps = [
	{ num: "01", title: "Stelle auswählen", text: "Finde die passende Position oder bewirb dich initiativ." },
	{ num: "02", title: "Kurz bewerben", text: "Formular ausfüllen, CV hochladen — in wenigen Minuten." },
	{ num: "03", title: "Rückmeldung erhalten", text: "Wir melden uns persönlich und unkompliziert." },
	{ num: "04", title: "Kennenlernen", text: "Wir lernen uns kennen — direkt, ehrlich, auf Augenhöhe." },
]

export function renderApplicationProcess() {
	const items = steps.map((s) => `<li class="astep"><span class="astep__num">${s.num}</span><h3 class="astep__title">${s.title}</h3><p class="astep__text">${s.text}</p></li>`).join("")
	return `<section class="aprocess" data-reveal><div class="container"><header class="section-head"><p class="eyebrow eyebrow--accent">So läuft die Bewerbung</p><h2 class="section-title">In vier Schritten zum Team.</h2></header><ol class="aprocess__list">${items}</ol></div></section>`
}
