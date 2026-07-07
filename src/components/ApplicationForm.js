import { jobs } from "../data/jobs.js"
import { imageUrl } from "../data/assets.js"

// Detailkarte der ausgewählten Stelle (dynamisch neben dem Formular)
function jobDetailHtml(job) {
	if (!job) return `<div class="apply__detail-inner apply__detail-empty"><p class="eyebrow eyebrow--accent">Deine Stelle</p><h3 class="apply__detail-title">Stelle auswählen</h3><p class="apply__detail-text">Wähle rechts eine Position aus oder klicke bei einer Stelle auf „Jetzt bewerben“ — hier erscheinen sofort die Details dazu.</p></div>`
	const tags = job.tags.map((t) => `<span class="tag">${t}</span>`).join("")
	const img = job.image ? `<img class="apply__detail-img" src="${imageUrl(job.image)}" alt="" loading="lazy" onerror="this.style.display='none'" />` : ""
	return `<div class="apply__detail-inner">${img}<span class="apply__detail-num">/ ${job.num}</span><h3 class="apply__detail-title">${job.title}</h3><div class="apply__detail-tags">${tags}</div><p class="apply__detail-text">${job.text}</p></div>`
}

export function renderApplicationForm() {
	const options = jobs.map((j) => `<option value="${j.title}">${j.title}</option>`).join("")
	return `<section id="bewerbung" class="apply" data-reveal><div class="container"><header class="section-head"><p class="eyebrow eyebrow--accent">Bewerbung</p><h2 class="section-title">Kurz vorstellen — wir melden uns.</h2><p class="apply__lead">Keine langen Anschreiben. Füll das Formular aus, optional mit CV, und wir kommen auf dich zurück.</p></header><div class="apply__layout"><aside class="apply__detail" data-job-detail>${jobDetailHtml(null)}</aside><div class="apply__formwrap"><form class="form" data-form novalidate><div class="form__row"><label class="form__field form__field--full"><span>Stelle</span><select name="stelle" required><option value="" disabled selected>Bitte wählen …</option>${options}</select><em class="form__error" data-error></em></label></div><div class="form__row"><label class="form__field"><span>Name</span><input type="text" name="name" required autocomplete="name" /><em class="form__error" data-error></em></label><label class="form__field"><span>E-Mail</span><input type="email" name="email" required autocomplete="email" /><em class="form__error" data-error></em></label></div><div class="form__row"><label class="form__field"><span>Telefon</span><input type="tel" name="telefon" autocomplete="tel" /><em class="form__error" data-error></em></label><label class="form__field form__file"><span>CV / Datei (optional)</span><input type="file" name="cv" accept=".pdf,.doc,.docx,.jpg,.png" data-file /><span class="form__file-ui" data-file-ui>Datei auswählen … (PDF, DOC, max 10 MB)</span><em class="form__error" data-error></em></label></div><div class="form__row"><label class="form__field form__field--full"><span>Nachricht (optional)</span><textarea name="nachricht" rows="4"></textarea></label></div><label class="form__check"><input type="checkbox" name="datenschutz" required /><span>Ich habe die <a href="#" target="_blank" rel="noopener">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.</span><em class="form__error" data-error></em></label><button type="submit" class="btn btn--primary btn--block form__submit">Bewerbung absenden</button><p class="form__note">Frontend-Demo (Phase 1): Absenden ist simuliert, es werden keine Daten übertragen.</p></form><div class="form__success" data-success hidden><div class="form__success-icon" aria-hidden="true">✓</div><h3>Danke für deine Bewerbung!</h3><p>Wir haben deine Angaben erhalten und melden uns persönlich bei dir.</p></div></div></div></div></section>`
}

export function initApplicationForm() {
	const form = document.querySelector("[data-form]")
	if (!form) return
	const applySelect = form.querySelector('select[name="stelle"]')
	const applyName = form.querySelector('input[name="name"]')
	const jobDetail = document.querySelector("[data-job-detail]")
	const updateDetail = (title) => { if (!jobDetail) return; const job = jobs.find((j) => j.title === title); jobDetail.innerHTML = jobDetailHtml(job); jobDetail.classList.toggle("is-filled", Boolean(job)) }
	if (applySelect) applySelect.addEventListener("change", () => updateDetail(applySelect.value))
	document.querySelectorAll("[data-apply]").forEach((cta) => {
		cta.addEventListener("click", () => {
			const title = cta.getAttribute("data-apply")
			if (applySelect && title) { const match = [...applySelect.options].find((o) => o.value === title); if (match) { applySelect.value = title; updateDetail(title) } }
			form.classList.add("is-highlight")
			setTimeout(() => form.classList.remove("is-highlight"), 1600)
			setTimeout(() => { if (applyName) applyName.focus({ preventScroll: true }) }, 700)
		})
	})
	const success = document.querySelector("[data-success]")
	const fileInput = form.querySelector("[data-file]")
	const fileUi = form.querySelector("[data-file-ui]")
	const MAX = 10 * 1024 * 1024
	const setError = (field, msg) => { const em = field.querySelector("[data-error]"); if (em) em.textContent = msg || ""; field.classList.toggle("has-error", Boolean(msg)) }
	if (fileInput && fileUi) {
		fileInput.addEventListener("change", () => { const f = fileInput.files[0]; const field = fileInput.closest(".form__field"); if (!f) { fileUi.textContent = "Datei auswählen … (PDF, DOC, max 10 MB)"; return } if (f.size > MAX) { setError(field, "Datei ist zu groß (max 10 MB)."); fileInput.value = ""; fileUi.textContent = "Datei auswählen … (PDF, DOC, max 10 MB)"; return } setError(field, ""); fileUi.textContent = f.name })
	}
	form.addEventListener("submit", (e) => {
		e.preventDefault()
		let ok = true
		form.querySelectorAll(".form__field, .form__check").forEach((field) => {
			const input = field.querySelector("input, select, textarea")
			if (!input) return
			if (input.hasAttribute("required")) {
				if (input.type === "checkbox" && !input.checked) { setError(field, "Bitte bestätigen."); ok = false; return }
				if (input.type !== "checkbox" && !String(input.value).trim()) { setError(field, "Pflichtfeld."); ok = false; return }
				if (input.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value)) { setError(field, "Ungültige E-Mail."); ok = false; return }
			}
			setError(field, "")
		})
		if (!ok) return
		const btn = form.querySelector(".form__submit")
		btn.classList.add("is-loading")
		btn.disabled = true
		setTimeout(() => { form.hidden = true; if (success) success.hidden = false; success && success.scrollIntoView({ behavior: "smooth", block: "center" }) }, 1100)
	})
}
