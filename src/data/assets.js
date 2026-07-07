// Единый контракт ассетов. Локальный агент трогает ТОЛЬКО этот файл + public/assets.
const LOGO_FALLBACK_URL = "https://karriere.bhs-walldorf.de/BHS_Logo_blau.svg"

export const PHASE = {
	// Phase 1: локальных бинарников ещё нет — картинки временно с внешних URL BHS.
	// Локальный агент ставит false после asset-integration pass.
	useExternalImages: true,
}

export const assets = {
	logo: {
		main: "/assets/logo/BHS_Logo_blau.svg",
		fallbackUrl: LOGO_FALLBACK_URL,
	},
	favicon: "/assets/logo/favicon.svg",
	// Композед первый кадр — объект виден СРАЗУ при загрузке (фикс blank-hero).
	heroFirstFrame: "/assets/posters/hero-first-frame.jpg",
	heroVideos: {
		intro: "/assets/video/hero-01-cinematic-intro.mp4",
		disassembly: "/assets/video/hero-02-first-disassembly.mp4",
		orbit: "/assets/video/hero-03-camera-rotation.mp4",
		rear: "/assets/video/hero-04-rear-transformation.mp4",
		wert: "/assets/video/hero-05.mp4",
	},
	heroPosters: {
		intro: "/assets/posters/hero-01-poster.jpg",
		disassembly: "/assets/posters/hero-02-poster.jpg",
		orbit: "/assets/posters/hero-03-poster.jpg",
		rear: "/assets/posters/hero-04-poster.jpg",
		wert: "/assets/posters/hero-04-poster.jpg",
	},
	images: {
		kraftfahrer: "/assets/images/hero-kraftfahrer.jpg",
		reqKraftfahrer: "/assets/images/req-kraftfahrer.jpg",
		brennschneider: "/assets/images/hero-brennschneider.jpg",
		platzarbeiter: "/assets/images/hero-platzarbeiter.jpg",
		greifbagger: "/assets/images/bhs-walldorf-magnet-greifbagger.jpg",
		aboutBhs: "/assets/images/about-bhs.jpg",
		heroIndex: "/assets/images/hero-index.jpg",
		nicoleEndres: "/assets/images/nicole-endres.jpg",
	},
}

const externalImages = {
	kraftfahrer: "https://karriere.bhs-walldorf.de/img/hero-kraftfahrer.jpg",
	reqKraftfahrer: "https://karriere.bhs-walldorf.de/img/req-kraftfahrer.jpg",
	brennschneider: "https://karriere.bhs-walldorf.de/img/hero-brennschneider.jpg",
	platzarbeiter: "https://karriere.bhs-walldorf.de/img/hero-platzarbeiter.jpg",
	greifbagger: "https://karriere.bhs-walldorf.de/img/bhs-walldorf-magnet-greifbagger.jpg",
	aboutBhs: "https://karriere.bhs-walldorf.de/img/about-bhs.jpg",
	heroIndex: "https://karriere.bhs-walldorf.de/img/hero-index.jpg",
	nicoleEndres: "https://karriere.bhs-walldorf.de/img/nicole-endres.jpg",
}

export function imageUrl(key) {
	if (PHASE.useExternalImages && externalImages[key]) return externalImages[key]
	return assets.images[key] || ""
}

// Композед первый кадр hero: локальный -> poster intro -> внешний index.
export function heroFirstFrameUrl() {
	if (!PHASE.useExternalImages) return assets.heroFirstFrame
	return externalImages.heroIndex
}
