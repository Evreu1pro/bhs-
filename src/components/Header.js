import { assets } from "../data/assets.js"
import { nav } from "../data/nav.js"

export function renderHeader() {
	const links = nav.map((n) => `<a class="nav__link" href="${n.href}">${n.label}</a>`).join("")
	const mobileLinks = nav.map((n) => `<a class="mobile-menu__link" href="${n.href}">${n.label}</a>`).join("")
	const logo = `<img class="brand__logo" src="${assets.logo.main}" alt="BHS Walldorf" onerror="this.onerror=null;this.src='${assets.logo.fallbackUrl}'" />`
	return `<header class="header" data-header><div class="header__inner"><a class="brand" href="#top" aria-label="BHS Walldorf Startseite"><span class="brand__chip">${logo}</span></a><nav class="nav" aria-label="Hauptnavigation">${links}</nav><div class="header__actions"><a class="btn btn--primary header__cta" href="#bewerbung">Jetzt bewerben</a><button class="burger" data-burger aria-label="Menü öffnen" aria-expanded="false"><span></span><span></span><span></span></button></div></div><div class="mobile-menu" data-mobile-menu hidden>${mobileLinks}<a class="btn btn--primary" href="#bewerbung">Jetzt bewerben</a></div></header>`
}

export function initHeader() {
	const header = document.querySelector("[data-header]")
	if (!header) return
	const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24)
	onScroll()
	window.addEventListener("scroll", onScroll, { passive: true })
	const burger = header.querySelector("[data-burger]")
	const menu = header.querySelector("[data-mobile-menu]")
	if (burger && menu) {
		burger.addEventListener("click", () => {
			const willOpen = menu.hasAttribute("hidden")
			if (willOpen) menu.removeAttribute("hidden")
			else menu.setAttribute("hidden", "")
			burger.setAttribute("aria-expanded", String(willOpen))
			burger.classList.toggle("is-open", willOpen)
		})
		menu.querySelectorAll("a").forEach((a) =>
			a.addEventListener("click", () => {
				menu.setAttribute("hidden", "")
				burger.setAttribute("aria-expanded", "false")
				burger.classList.remove("is-open")
			})
		)
	}
	const links = [...header.querySelectorAll(".nav__link")]
	const sections = links.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean)
	if (sections.length) {
		const spy = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						const id = "#" + e.target.id
						links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === id))
					}
				})
			},
			{ rootMargin: "-45% 0px -50% 0px" }
		)
		sections.forEach((s) => spy.observe(s))
	}
}
