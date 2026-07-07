import "./styles/tokens.css"
import "./styles/base.css"
import "./styles/header.css"
import "./styles/hero.css"
import "./styles/sections.css"
import "./styles/forms.css"

import { renderHeader, initHeader } from "./components/Header.js"
import { renderHeroProcess, initHeroProcess } from "./components/HeroProcess.js"
import { renderProcessSummary } from "./components/ProcessSummary.js"
import { renderCareerBridge } from "./components/CareerBridge.js"
import { renderJobList, initJobList } from "./components/JobList.js"
import { renderStats } from "./components/Stats.js"
import { renderContactPerson } from "./components/ContactPerson.js"
import { renderPhotoStories, initPhotoStories } from "./components/PhotoStories.js"
import { renderApplicationProcess } from "./components/ApplicationProcess.js"
import { renderApplicationForm, initApplicationForm } from "./components/ApplicationForm.js"
import { renderFooter } from "./components/Footer.js"

const app = document.getElementById("app")

app.innerHTML = [
	renderHeader(),
	'<main id="inhalt">',
	renderHeroProcess(),
	renderProcessSummary(),
	renderCareerBridge(),
	renderJobList(),
	renderStats(),
	renderContactPerson(),
	renderPhotoStories(),
	renderApplicationProcess(),
	renderApplicationForm(),
	"</main>",
	renderFooter(),
].join("")

initHeader()
initHeroProcess()
initJobList()
initPhotoStories()
initApplicationForm()

// Reveal-on-scroll для секций
const io = new IntersectionObserver(
	(entries) => {
		entries.forEach((e) => {
			if (e.isIntersecting) {
				e.target.classList.add("is-visible")
				io.unobserve(e.target)
			}
		})
	},
	{ threshold: 0.15 }
)
document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el))
