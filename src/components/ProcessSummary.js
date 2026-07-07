import { stages } from "../data/stages.js"

export function renderProcessSummary() {
	const items = stages.map((s) => `<li class="psum__item"><span class="psum__num">${s.num}</span><span class="psum__label">${s.label}</span></li>`).join('<li class="psum__sep" aria-hidden="true">→</li>')
	return `<section id="prozess" class="psum" data-reveal><div class="container"><p class="eyebrow eyebrow--accent">Unser Prozess</p><ol class="psum__list">${items}</ol></div></section>`
}
