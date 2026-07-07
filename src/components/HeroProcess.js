import { assets, heroFirstFrameUrl } from "../data/assets.js"
import { stages, heroCopy } from "../data/stages.js"
import { hotspots } from "../data/hotspots.js"
import { getImpact, partners } from "../data/impact.js"

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

export function renderHeroProcess() {
	// Композед первый кадр — виден сразу, до любого видео/скролла.
	const firstFrame = `<img class="hero__firstframe" src="${heroFirstFrameUrl()}" alt="BHS Metallrecycling — technischer Viewport" onerror="this.style.display='none'" />`
	const layers = stages.map((s, i) => { const vid = s.video ? `<video class="hero__video" data-video muted playsinline preload="auto" poster="${assets.heroPosters[s.poster]}"><source src="${assets.heroVideos[s.video]}" type="video/mp4" /></video>` : ""; return `<div class="hero__layer${i === 0 ? " is-active" : ""}" data-layer="${i}">${vid}<div class="hero__vfallback" aria-hidden="true"></div></div>` }).join("")
	const markers = hotspots.map((h) => `<button class="annot annot--${h.side}" data-hotspot="${h.id}" style="left:${h.x}%;top:${h.y}%" aria-label="${h.label}"><span class="annot__dot"></span><span class="annot__line"></span><span class="annot__tag"><b>${h.num}</b> ${h.label}</span><span class="annot__pop" role="tooltip"><span class="annot__pop-title">${h.label}</span><span class="annot__pop-row"><em>Material</em> ${h.material}</span><span class="annot__pop-row"><em>Prozess</em> ${h.process}</span><span class="annot__pop-row"><em>Ergebnis</em> ${h.result}</span></span></button>`).join("")
	const impact = getImpact()
	const impactCells = impact.map((s) => `<div class="hero__impact-cell"><span class="hero__impact-value">${s.value}</span><span class="hero__impact-label">${s.label}</span></div>`).join("")
	const partnerLogos = partners.map((p) => `<span class="hero__partner"><img src="${p.logo}" alt="${p.name}" loading="lazy" onerror="this.parentElement.classList.add('is-empty');this.parentElement.textContent='${p.name}'" /></span>`).join("")
	const valueLayer = `<div class="hero__value" data-value-layer aria-hidden="true"><p class="hero__value-eyebrow">Wirkung</p><h2 class="hero__value-title">Recycling, das messbar Wert schafft.</h2><div class="hero__impact">${impactCells}</div><div class="hero__partners"><span class="hero__partners-label">Wer mit uns arbeitet</span><div class="hero__partners-row">${partnerLogos}</div></div></div>`
	const stageTexts = stages.map((s, i) => `<div class="hero__stage-text${i === 0 ? " is-active" : ""}" data-stage-text="${i}"><span class="hero__stage-num">${s.num}</span><div><p class="hero__eyebrow">${s.label}</p><h2 class="hero__stage-headline">${s.headline}</h2><p class="hero__stage-body">${s.text}</p></div></div>`).join("")
	const indicator = stages.map((s, i) => `<li data-ind="${i}" class="${i === 0 ? "is-active" : ""}"><span class="ind__num">${s.num}</span><span class="ind__label">${s.label}</span></li>`).join("")
	const intro = `<div class="hero__intro" data-hero-intro><p class="hero__eyebrow">${heroCopy.eyebrow}</p><h1 class="hero__headline">${heroCopy.headline}</h1><p class="hero__subline">${heroCopy.subline}</p><div class="hero__cta"><a class="btn btn--primary" href="#bewerbung">${heroCopy.ctaPrimary}</a><a class="btn btn--ghost" href="#prozess">${heroCopy.ctaSecondary}</a></div></div>`
	const sidePanel = `<aside class="hero__panel" data-panel hidden aria-live="polite"><button class="hero__panel-close" data-panel-close aria-label="Schließen">&times;</button><p class="hero__panel-eyebrow" data-panel-eyebrow></p><h3 class="hero__panel-title" data-panel-title></h3><dl class="hero__panel-dl"><dt>Material</dt><dd data-panel-material></dd><dt>Prozess</dt><dd data-panel-process></dd><dt>Ergebnis</dt><dd data-panel-result></dd></dl></aside>`
	const scene = `<div class="hero__stage">${firstFrame}${layers}<div class="hero__grid" aria-hidden="true"></div><div class="hero__scan" aria-hidden="true"></div><div class="hero__scrim"></div>${valueLayer}<div class="hero__annots" data-annots hidden>${markers}</div><div class="hero__frame" aria-hidden="true"><span></span><span></span><span></span><span></span></div></div>`
	const overlay = `<div class="hero__overlay">${intro}<div class="hero__stages">${stageTexts}</div><ol class="hero__indicator" aria-hidden="true">${indicator}</ol></div>`
	return `<section id="top" class="hero is-scan" data-hero><div class="hero__sticky">${scene}${overlay}${sidePanel}</div></section>`
}

export function initHeroProcess() {
	const hero = document.querySelector("[data-hero]")
	if (!hero) return
	const layers = [...hero.querySelectorAll("[data-layer]")]
	const stageTexts = [...hero.querySelectorAll("[data-stage-text]")]
	const inds = [...hero.querySelectorAll("[data-ind]")]
	const intro = hero.querySelector("[data-hero-intro]")
	const annots = hero.querySelector("[data-annots]")
	const visuals = stages.map((s) => "is-" + s.visual)
	hero.querySelectorAll("[data-video]").forEach((v) => { const layer = v.closest(".hero__layer"); v.addEventListener("loadeddata", () => layer.classList.add("has-video")); v.addEventListener("error", () => layer.classList.remove("has-video")); const source = v.querySelector("source"); if (source) source.addEventListener("error", () => layer.classList.remove("has-video")) })
	let currentActiveIdx = -1
	const setActive = (idx) => {
		if (idx === currentActiveIdx) {
			const active = layers[idx] && layers[idx].querySelector("video")
			if (active && active.paused && !active.ended) {
				active.play().catch(() => {})
			}
			return
		}
		currentActiveIdx = idx

		layers.forEach((l, i) => l.classList.toggle("is-active", i === idx))
		stageTexts.forEach((l, i) => l.classList.toggle("is-active", i === idx))
		inds.forEach((l, i) => l.classList.toggle("is-active", i <= idx))
		visuals.forEach((c, i) => hero.classList.toggle(c, i === idx))
		
		// Аннотации — только на 4-м этапе (Recycling, idx === 3) и только на десктопе
		if (idx === 3 && window.innerWidth > 860) {
			annots.removeAttribute("hidden")
		} else {
			annots.setAttribute("hidden", "")
		}

		// Пауза и сброс остальных видео
		layers.forEach((l, i) => {
			const v = l.querySelector("video")
			if (v && i !== idx) {
				v.pause()
				v.currentTime = 0
			}
		})

		const active = layers[idx] && layers[idx].querySelector("video")
		if (active) {
			active.currentTime = 0
			active.play().catch(() => {})
		}
	}
	if (prefersReducedMotion) {
		hero.classList.add("is-static")
		setActive(0)
		stageTexts.forEach((l) => l.classList.add("is-active"))
		if (annots && window.innerWidth > 860) annots.removeAttribute("hidden")
	} else {
		const onScroll = () => {
			const rect = hero.getBoundingClientRect()
			const total = hero.offsetHeight - window.innerHeight
			const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1))
			const p = total > 0 ? scrolled / total : 0
			const idx = Math.min(stages.length - 1, Math.floor(p * stages.length))
			setActive(idx)
			if (intro) { const o = Math.max(0, 1 - p * 4); intro.style.opacity = String(o); intro.style.pointerEvents = o < 0.1 ? "none" : "auto" }
		}
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		window.addEventListener("resize", onScroll)
	}
	const panel = hero.querySelector("[data-panel]")
	const openPanel = (h) => { if (!panel || !h) return; panel.querySelector("[data-panel-eyebrow]").textContent = h.num + " / Materialstrom"; panel.querySelector("[data-panel-title]").textContent = h.label; panel.querySelector("[data-panel-material]").textContent = h.material; panel.querySelector("[data-panel-process]").textContent = h.process; panel.querySelector("[data-panel-result]").textContent = h.result; panel.removeAttribute("hidden") }
	const closePanel = () => panel && panel.setAttribute("hidden", "")
	const annotEls = [...hero.querySelectorAll("[data-hotspot]")]
	annotEls.forEach((btn) => btn.addEventListener("click", (e) => {
		e.stopPropagation()
		if (window.innerWidth <= 860) return
		const h = hotspots.find((x) => x.id === btn.dataset.hotspot)
		const wasOpen = btn.classList.contains("is-open")
		annotEls.forEach((b) => b.classList.remove("is-open"))
		if (!wasOpen) btn.classList.add("is-open")
	}))
	document.addEventListener("click", () => annotEls.forEach((b) => b.classList.remove("is-open")))
	const closeBtn = hero.querySelector("[data-panel-close]")
	if (closeBtn) closeBtn.addEventListener("click", closePanel)
	document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePanel() })
}
