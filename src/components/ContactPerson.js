import { imageUrl } from "../data/assets.js"

export function renderContactPerson() {
	const photo = `<img class="contact__photo" src="${imageUrl("nicoleEndres")}" alt="Nicole Endres, Ansprechpartnerin Bewerbung bei BHS" loading="lazy" onerror="this.closest('.contact__media').classList.add('is-empty')" />`
	return `<section class="contact" data-reveal><div class="container contact__inner"><div class="contact__media">${photo}<div class="contact__frame" aria-hidden="true"></div></div><div class="contact__text"><p class="eyebrow eyebrow--accent">Dein Kontakt bei BHS</p><h2 class="contact__name">Nicole Endres</h2><p class="contact__role">Ansprechpartnerin Bewerbung</p><p class="contact__lead">Kurze Wege, persönliche Rückmeldung, unkomplizierter Bewerbungsprozess.</p><div class="contact__cta"><a class="btn btn--primary" href="#bewerbung">Jetzt bewerben</a><a class="btn btn--ghost" href="mailto:bewerbung@bhs-walldorf.de">Frage stellen</a></div></div></div></section>`
}
