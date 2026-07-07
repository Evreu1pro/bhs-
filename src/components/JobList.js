import { jobs } from "../data/jobs.js"
import { imageUrl } from "../data/assets.js"

export function renderJobList() {
	const rows = jobs.map((j) => { const tags = j.tags.map((t) => `<span class="tag">${t}</span>`).join(""); const img = j.image ? `<img class="job__img" src="${imageUrl(j.image)}" alt="" loading="lazy" onerror="this.style.display='none'" />` : ""; return `<article class="job" data-job><button class="job__head" data-job-toggle aria-expanded="false"><span class="job__num">/ ${j.num}</span><span class="job__title">${j.title}</span><span class="job__tags">${tags}</span><span class="job__chev" aria-hidden="true"></span></button><div class="job__reveal"><div class="job__reveal-inner">${img}<div class="job__body"><p>${j.text}</p><a class="btn btn--primary btn--sm" href="#bewerbung" data-apply="${j.title}">${j.cta}</a></div></div></div></article>` }).join("")
	return `<section id="stellen" class="jobs" data-reveal><div class="container"><header class="section-head"><p class="eyebrow eyebrow--accent">Offene Stellen</p><h2 class="section-title">Arbeit mit Technik, Struktur und Sinn.</h2></header><div class="jobs__list">${rows}</div></div></section>`
}

export function initJobList() {
	document.querySelectorAll("[data-job]").forEach((job) => {
		const toggle = job.querySelector("[data-job-toggle]")
		const reveal = job.querySelector(".job__reveal")
		if (!toggle || !reveal) return
		toggle.addEventListener("click", () => {
			const open = job.classList.toggle("is-open")
			toggle.setAttribute("aria-expanded", String(open))
			reveal.style.maxHeight = open ? reveal.scrollHeight + "px" : ""
		})
	})
}
