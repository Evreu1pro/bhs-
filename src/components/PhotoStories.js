import { photoStories } from "../data/photoStories.js"
import { imageUrl } from "../data/assets.js"

export function renderPhotoStories() {
	const slides = photoStories.map((p, i) => `<figure class="story${i === 0 ? " is-active" : ""}" data-slide="${i}"><span class="story__num" aria-hidden="true">0${i + 1}</span><img class="story__img" src="${imageUrl(p.img)}" alt="${p.title}" loading="lazy" onerror="this.closest('.story').classList.add('is-empty')" /><figcaption class="story__cap"><h3>${p.title}</h3><p>${p.text}</p></figcaption></figure>`).join("")
	const dots = photoStories.map((p, i) => `<button class="story__dot${i === 0 ? " is-active" : ""}" data-dot="${i}" aria-label="Bild ${i + 1}"></button>`).join("")
	return `<section id="einblicke" class="stories" data-reveal><div class="container"><header class="section-head"><p class="eyebrow eyebrow--accent">Einblicke · Walldorf</p><h2 class="section-title">So sieht Arbeit bei BHS aus.</h2></header><div class="stories__viewport" data-stories><div class="stories__frame" aria-hidden="true"></div>${slides}<button class="stories__arrow stories__arrow--prev" data-prev aria-label="Zurück">&#8249;</button><button class="stories__arrow stories__arrow--next" data-next aria-label="Weiter">&#8250;</button></div><div class="stories__dots">${dots}</div></div></section>`
}

export function initPhotoStories() {
	const root = document.querySelector("[data-stories]")
	if (!root) return
	const slides = [...root.querySelectorAll("[data-slide]")]
	const dots = [...document.querySelectorAll("[data-dot]")]
	let cur = 0
	const go = (n) => { cur = (n + slides.length) % slides.length; slides.forEach((s, i) => s.classList.toggle("is-active", i === cur)); dots.forEach((d, i) => d.classList.toggle("is-active", i === cur)) }
	const next = root.querySelector("[data-next]")
	const prev = root.querySelector("[data-prev]")
	if (next) next.addEventListener("click", () => go(cur + 1))
	if (prev) prev.addEventListener("click", () => go(cur - 1))
	dots.forEach((d, i) => d.addEventListener("click", () => go(i)))
	let timer = setInterval(() => go(cur + 1), 6000)
	root.addEventListener("mouseenter", () => clearInterval(timer))
	root.addEventListener("mouseleave", () => (timer = setInterval(() => go(cur + 1), 6000)))
}
