import { assets } from "../data/assets.js"
import { nav } from "../data/nav.js"

// TODO(local agent): заменить MAPS_URL реальной ссылкой Google Maps + точный адрес.
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=BHS+Metallrecycling+Walldorf"

export function renderFooter() {
	const links = nav.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")
	return `<footer class="footer"><div class="container footer__inner"><div class="footer__brandblock"><p class="footer__wordmark">BHS<br>METALLRECYCLING<br>WALLDORF</p><p class="footer__claim">Aus Komplexität wird neuer Wert.</p></div><div class="footer__cols"><div class="footer__col"><h4>Kontakt</h4><p>BHS Metallrecycling</p><p>Walldorf, Deutschland</p><p><a href="${MAPS_URL}" target="_blank" rel="noopener">Adresse in Google Maps öffnen</a></p><p><a href="mailto:bewerbung@bhs-walldorf.de">bewerbung@bhs-walldorf.de</a></p></div><nav class="footer__col" aria-label="Footer"><h4>Navigation</h4>${links}</nav><div class="footer__col footer__cta"><h4>Loslegen</h4><a class="btn btn--ghost" href="mailto:bewerbung@bhs-walldorf.de">Frage stellen</a><a class="btn btn--primary" href="#bewerbung">Jetzt bewerben</a></div></div><div class="footer__legal"><span>© ${new Date().getFullYear()} BHS Metallrecycling Walldorf</span><span><a href="#">Impressum</a> · <a href="#">Datenschutz</a></span></div></div></footer>`
}
