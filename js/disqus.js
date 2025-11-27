// DISCUS CONFIG
var disqus_config = function () {
	this.page.url = window.location.href
	this.page.identifier = window.location.hash
}
// Exemplo de lazy loading do Disqus
let disqusLoaded = false
function loadDisqus() {
	if (!disqusLoaded) {
		var d = document,
			s = d.createElement('script')
		s.src = '//pingu-tv.disqus.com/embed.js'
		s.setAttribute('data-timestamp', +new Date())
		;(d.head || d.body).appendChild(s)
		disqusLoaded = true
	}
}
// Carregar Disqus somente quando o usuário interagir
document.addEventListener('scroll', loadDisqus)
document.addEventListener('mousemove', loadDisqus)
document.addEventListener('click', loadDisqus)
